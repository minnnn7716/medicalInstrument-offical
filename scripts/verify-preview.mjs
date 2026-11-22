import { pathToFileURL } from "node:url"
import path from "node:path"

export async function verifyPreview(base) {
  const home = new URL(base.endsWith("/") ? base : base + "/")
  const prefix = home.pathname.replace(/\/$/, "")
  const assets = new Map()
  const links = new Set()
  function localUrl(value, context) {
    const url = new URL(value.replaceAll("&amp;", "&"), context)
    if (
      url.origin !== home.origin ||
      !["http:", "https:"].includes(url.protocol)
    )
      return null
    if (
      prefix &&
      url.pathname !== prefix &&
      !url.pathname.startsWith(prefix + "/")
    ) {
      throw new Error("Resource escapes the project subpath: " + url.pathname)
    }
    url.hash = ""
    return url
  }
  for (const route of [
    "",
    "about-us/",
    "product-experience/",
    "why-partner-with-us/",
  ]) {
    const url = new URL(route, home)
    const res = await fetch(url, { signal: AbortSignal.timeout(30000) })
    const body = await res.text()
    if (!res.ok || !body.includes("Medical Instrument"))
      throw new Error("Page failed: " + url.pathname)
    for (const match of body.matchAll(/\b(src|href)="([^"]+)"/g)) {
      // Connection hints may target the origin; they are not files or navigation links.
      const tag = body.slice(
        body.lastIndexOf("<", match.index),
        body.indexOf(">", match.index) + 1
      )
      if (/\brel="(?:preconnect|dns-prefetch)"/.test(tag)) continue
      const target = localUrl(match[2], url)
      if (!target) continue
      if (
        match[1] === "src" ||
        /\.(css|js|svg|jpg|png|webp|woff2)(?:\?|$)/.test(target.href)
      )
        assets.set(target.href, target)
      else links.add(target.href)
    }
    console.log(url.pathname + ": HTTP " + res.status)
  }
  for (const target of assets.values()) {
    const res = await fetch(target, { signal: AbortSignal.timeout(30000) })
    if (!res.ok)
      throw new Error("Asset failed: " + target.pathname + " " + res.status)
    if (target.pathname.endsWith(".css")) {
      const css = await res.text()
      for (const match of css.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)) {
        if (match[1].startsWith("data:")) continue
        const font = localUrl(match[1], target)
        if (font) assets.set(font.href, font)
      }
    } else {
      await res.arrayBuffer()
    }
  }
  for (const href of links) {
    const res = await fetch(href, { signal: AbortSignal.timeout(30000) })
    if (!res.ok) throw new Error("Internal link failed: " + href)
    await res.arrayBuffer()
  }
  const missing = await fetch(new URL("not-a-real-page/", home))
  if (missing.status !== 404) throw new Error("Missing routes must return 404")
  const api = await fetch(new URL("api/contact", home), { method: "POST" })
  if (api.ok) throw new Error("Static demo must not accept contact submissions")
  console.log(
    "Verified " +
      assets.size +
      " assets (including fonts), " +
      links.size +
      " internal links, 404 handling and no contact API."
  )
}

if (
  process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
) {
  await verifyPreview(process.argv[2] || "http://127.0.0.1:3000/")
}
