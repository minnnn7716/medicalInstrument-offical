import { createStaticServer } from "./serve-static.mjs"
import { verifyPreview } from "./verify-preview.mjs"

const { server, basePath } = await createStaticServer()
try {
  await new Promise((resolve, reject) => {
    server.once("error", reject)
    server.listen(0, "127.0.0.1", resolve)
  })
  const port = server.address().port
  await verifyPreview("http://127.0.0.1:" + port + basePath + "/")
} finally {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve()))
  )
}
