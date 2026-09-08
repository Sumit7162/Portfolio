/**
 * Resolve a /public asset against Vite's base URL.
 *
 * The deploy script publishes to GitHub Pages under /Portfolio/, where a
 * hard-coded "/sumit-portrait.webp" would 404. Vite rewrites absolute paths
 * inside index.html for us, but not strings inside components — hence this.
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
