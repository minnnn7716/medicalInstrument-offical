// Next.js Link and router already handle basePath; use this for public assets.
export function assetPath(pathname: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${pathname}`
}
