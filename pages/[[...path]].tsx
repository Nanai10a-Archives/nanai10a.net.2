import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
// eslint-disable-next-line no-use-before-define
import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Renderer from "../components/renderer";
import fetchMarkdown from "../lib/markdown";
import { INDEXED_MAPPING, URLS } from "../lib/pages";

export type Props = {
  mds: Array<string>;
};

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mds = [];
  for (const index of INDEXED_MAPPING) {
    const url = URLS[index.path];
    if (url !== undefined) {
      mds.push(await fetchMarkdown(url));
    }
  }

  return {
    props: {
      mds,
    },
    // eslint-disable-next-line no-magic-numbers
    revalidate: 60 * 60, // 1 hour as secs
  };
};

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: INDEXED_MAPPING.map(({ path }) => ({ params: { path } })),
});

export default Page;
