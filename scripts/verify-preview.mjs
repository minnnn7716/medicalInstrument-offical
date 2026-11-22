const base = process.argv[2] || "http://127.0.0.1:3000"
for (const route of [
  "/",
  "/about-us",
  "/product-experience",
  "/why-partner-with-us",
  "/demo-logo.svg",
]) {
  const res = await fetch(base + route, { signal: AbortSignal.timeout(90000) })
  const body = await res.text()
  if (!res.ok) throw new Error(route + ": " + res.status)
  if (!route.endsWith(".svg") && !body.includes("Medical Instrument")) {
    throw new Error("Missing demo branding on " + route)
  }
  console.log(route + ": HTTP " + res.status)
}
const res = await fetch(base + "/api/contact", {
  method: "POST",
  signal: AbortSignal.timeout(10000),
})
if (res.status !== 403) throw new Error("Demo API must reject submissions")
console.log("/api/contact: HTTP 403 (no messages sent)")
