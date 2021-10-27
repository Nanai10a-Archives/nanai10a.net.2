const path = "../htmls/404.html";

let file = undefined;
let buffer = undefined;

try {
  file = Deno.openSync(path, { read: true });
  const info = file.statSync();

  buffer = new Uint8Array(info.size);
  const result = file.readSync(buffer);
  if (result !== info.size) {
    throw `failed read file: ${path}`;
  }
} finally {
  file?.close();
}

const decoder = new TextDecoder();
const notFound = decoder.decode(buffer);

export default notFound;
