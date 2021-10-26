import React from "https://esm.sh/react";
import { useRouter } from "https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts";
import { SSROptions } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts";

import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

import Renderer from "../components/renderer.tsx";
import fetchMarkdown from "../lib/markdown.ts";
import { INDEXES_ARRAY, URLS } from "../lib/pages.ts";

const Page = ({ mds }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <Header
        pushRoute={(path) => {
          router.push(path);
        }}
        currentPath={router.pathname}
      />
      <Renderer route={router.pathname} mds={mds} />
      <Footer />
    </div>
  );
};

export type Props = {
  mds: Array<string>;
};

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
  paths: () =>
    INDEXES_ARRAY.map(({ path }) => path).filter((path) => path !== "/"),
};

export default Page;
