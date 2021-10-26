import { SSROptions } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";

import Page, { Props } from "./[...path].tsx";
import { INDEXES_ARRAY, URLS } from "../lib/pages.ts";
import fetchMarkdown from "../lib/markdown.ts";

// FIXME: 何故`[...path].tsx`のexportsが読めない？
export const ssr: SSROptions<Props> = {
  props: async () => {
    const mds = [];
    for (const index of INDEXES_ARRAY) {
      const url = URLS[index.path]?.url;
      if (url !== undefined) {
        mds.push(await fetchMarkdown(url));
      }
    }

    return {
      $revalidate: 60 * 60,
      mds,
    };
  },
};

export default Page;
