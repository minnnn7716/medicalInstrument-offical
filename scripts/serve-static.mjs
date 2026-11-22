import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url))
const types = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
}

export async function createStaticServer() {
  let html
  try {
    html = await readFile(path.join(outputDirectory, "index.html"), "utf8")
  } catch {
    throw new Error("Static output is missing. Run npm run build first.")
  }
  // Read the path compiled into this build, so preview and CI use the same URL.
  const match = html.match(/(?:src|href)="([^"]*?)\/_next\//)
  if (!match) throw new Error("Cannot detect the static build base path")
  const basePath = match[1]
  const server = createServer(async (req, res) => {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" })
      res.end("Static site: this method is not supported.")
      return
    }
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname
      )
      if (
        basePath &&
        pathname !== basePath &&
        !pathname.startsWith(basePath + "/")
      ) {
        res.writeHead(404)
        res.end("Not found")
        return
      }
      const relative = pathname.slice(basePath.length).replace(/^\/+/, "")
      let filename = path.resolve(outputDirectory, relative || "index.html")
      if (!filename.startsWith(path.resolve(outputDirectory) + path.sep)) {
        res.writeHead(404)
        res.end("Not found")
        return
      }
      const info = await stat(filename)
      if (info.isDirectory()) {
        if (!pathname.endsWith("/")) {
          res.writeHead(308, { Location: pathname + "/" })
          res.end()
          return
        }
        filename = path.join(filename, "index.html")
      }
      const body = await readFile(filename)
      res.writeHead(200, {
        "Content-Type":
          types[path.extname(filename)] || "application/octet-stream",
      })
      res.end(req.method === "HEAD" ? undefined : body)
    } catch {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      const body = await readFile(path.join(outputDirectory, "404.html")).catch(
        () => Buffer.from("Not found")
      )
      res.end(req.method === "HEAD" ? undefined : body)
    }
  })
  return { server, basePath }
}

if (
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
) {
  const { server, basePath } = await createStaticServer()
  const port = Number(process.env.PORT || 3000)
  server.listen(port, "127.0.0.1", () => {
    console.log("Static site ready: http://127.0.0.1:" + port + basePath + "/")
  })
}
