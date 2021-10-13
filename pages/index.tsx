import React from "https://esm.sh/react@0.0.0-experimental-27659559e";
import { useRouter } from "https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts";

import { None } from "../lib/util.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

import Renderer from "../components/renderer.tsx";

const Page = ({}: None): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Renderer route={router.pathname} />
      <Footer />
    </>
  );
};

export default Page;
