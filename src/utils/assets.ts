/** Resolve a path inside /public while respecting Vite's configured base path. */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
