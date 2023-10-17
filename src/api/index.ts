const protocol = import.meta.env.VITE_API_PROTOCOL;
const hostname = import.meta.env.VITE_API_HOSTNAME;
const port = import.meta.env.VITE_API_PORT;
const pathname = import.meta.env.VITE_API_PATHNAME;
export const baseUrl = `${protocol}://${hostname}:${port}/${pathname}`;