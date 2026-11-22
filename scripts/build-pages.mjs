import { spawnSync } from "node:child_process"

const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  {
    stdio: "inherit",
    windowsHide: true,
    env: {
      ...process.env,
      NEXT_PUBLIC_BASE_PATH: process.argv[2] || "/medicalInstrument-offical",
    },
  }
)
if (result.error) throw result.error
process.exit(result.status ?? 1)
