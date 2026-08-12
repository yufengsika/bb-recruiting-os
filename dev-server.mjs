import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json" };
const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://localhost");
  const pathname = decodeURIComponent(url.pathname);
  const safePath = normalize(pathname).replace(/^([/\\])+/, "");
  let target = join(root, safePath);
  try {
    const details = await stat(target);
    if (details.isDirectory()) target = join(target, "index.html");
    const body = await readFile(target);
    response.writeHead(200, { "Content-Type": mime[extname(target)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});
const port = Number(process.env.BB_V2_PORT || 4175);
server.listen(port, "127.0.0.1", () => console.log(`BB Recruiting OS V2: http://127.0.0.1:${port}/`));
