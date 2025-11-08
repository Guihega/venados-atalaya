/**
 * ✅ Devuelve la ruta correcta según el entorno (local o producción)
 * Ejemplo: withBase('img/foto.webp') → '/img/foto.webp' (dev) o '/venados-atalaya/img/foto.webp' (build)
 */
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
};
