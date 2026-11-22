import { spawn } from "node:child_process"
const port = "3100"
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--port", port],
  { stdio: ["ignore", "pipe", "pipe"], windowsHide: true }
)
let output = ""
server.stdout.on("data", (d) => (output += d))
server.stderr.on("data", (d) => (output += d))
try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearInterval(timer)
      reject(new Error(output || "Server startup timed out"))
    }, 30000)
    const timer = setInterval(() => {
      if (output.includes("Ready")) {
        clearInterval(timer)
        clearTimeout(timeout)
        resolve()
      }
    }, 200)
    server.on("exit", (code) => {
      clearInterval(timer)
      clearTimeout(timeout)
      reject(new Error("Server exited: " + code + "\n" + output))
    })
  })
  process.argv[2] = "http://127.0.0.1:" + port
  await import("./verify-preview.mjs")
} finally {
  server.kill()
}
