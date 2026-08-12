import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { URL } from "node:url";

test("la página conserva las rutas de conversión principales", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /https:\/\/wa.me\/34619842164/);
  assert.match(source, /https:\/\/mail.google.com\/mail\//);
  assert.match(source, /tel:\+34619842164/);
  assert.match(source, /Enviar fotos por WhatsApp/);
  assert.match(source, /Consultar próximas plazas/);
});

test("las imágenes clave tienen texto alternativo", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const images = [...source.matchAll(/<Image[^>]+>/g)];
  assert.ok(images.length >= 6);
  for (const image of images) assert.match(image[0], /alt="[^"]+"/);
});
