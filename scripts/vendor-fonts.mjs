import { mkdir, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
const target = new URL("../public/fonts/", import.meta.url)
await mkdir(target, { recursive: true })
const families = [
  "Inter:wght@100..900",
  "Roboto:wght@100..900",
  "Geist+Mono:wght@100..900",
  "Abhaya+Libre:wght@400;500;600;700;800",
  "Anuphan:wght@100..700",
  "Fragment+Mono:ital@0;1",
]
let styles = ""
for (const family of families) {
  const res = await fetch(
    "https://fonts.googleapis.com/css2?family=" + family + "&display=swap",
    {
      headers: { "User-Agent": "Mozilla/5.0 Chrome/120.0.0.0 Safari/537.36" },
      signal: AbortSignal.timeout(30000),
    }
  )
  if (!res.ok) throw new Error("Font stylesheet failed: " + res.status)
  let css = await res.text()
  const urls = [
    ...new Set([...css.matchAll(/url\((https:\/\/[^)]+)\)/g)].map((m) => m[1])),
  ]
  for (const url of urls) {
    const name =
      createHash("sha256").update(url).digest("hex").slice(0, 16) + ".woff2"
    const font = await fetch(url, { signal: AbortSignal.timeout(30000) })
    if (!font.ok) throw new Error("Font download failed: " + font.status)
    await writeFile(
      new URL(name, target),
      Buffer.from(await font.arrayBuffer())
    )
    css = css.replaceAll(url, "/fonts/" + name)
  }
  styles += css + "\n"
  console.log("Downloaded " + family)
}
// Preserve the original metric-adjusted fallback faces when refreshing fonts.
styles +=
  "\n@font-face {\n  font-family: Inter Fallback;\n  src: local(Arial);\n  ascent-override: 90.44%;\n  descent-override: 22.52%;\n  line-gap-override: 0%;\n  size-adjust: 107.12%;\n}\n\n@font-face {\n  font-family: Roboto Fallback;\n  src: local(Arial);\n  ascent-override: 92.98%;\n  descent-override: 24.47%;\n  line-gap-override: 0%;\n  size-adjust: 99.78%;\n}\n\n@font-face {\n  font-family: Geist Mono Fallback;\n  src: local(Arial);\n  ascent-override: 74.67%;\n  descent-override: 21.92%;\n  line-gap-override: 0%;\n  size-adjust: 134.59%;\n}\n"
await writeFile(new URL("../app/fonts.css", import.meta.url), styles)
for (const family of [
  "inter",
  "roboto",
  "geistmono",
  "abhayalibre",
  "anuphan",
  "fragmentmono",
]) {
  const res = await fetch(
    "https://raw.githubusercontent.com/google/fonts/main/ofl/" +
      family +
      "/OFL.txt",
    { signal: AbortSignal.timeout(30000) }
  )
  if (!res.ok) throw new Error("Font license missing: " + family)
  await writeFile(
    new URL(family + "-OFL.txt", target),
    (await res.text()).replace(/[ \t]+$/gm, "")
  )
}
