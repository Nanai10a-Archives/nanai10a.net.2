import marked from "https://esm.sh/marked";
import dompurify from "https://esm.sh/dompurify";
// @deno-types="https://esm.sh/@types/feather-icons/index.d.ts"
import { icons } from "https://esm.sh/feather-icons";

const fetchMarkdown = async (url: string) => {
  const resp = await fetch(url);
  const raw = await resp.text();

  let html = marked(raw, { sanitizer: dompurify.sanitize });

  const regex = /(?!https?):(?!\/\/)[^: ]+:/;

  if (regex.test(html)) {
    let raw = html;
    while (true) {
      if (!regex.test(raw)) {
        break;
      }

      regex.exec(raw)?.forEach((txt) => {
        console.log(txt);
        raw = raw.replace(txt, "");

        html = html.replace(
          txt,
          icons[txt.replaceAll(":", "")]?.toSvg() ?? txt
        );
      });
    }
  }

  return html;
};

export default fetchMarkdown;
