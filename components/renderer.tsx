import React, {
  useEffect,
  useState,
} from "https://esm.sh/react";

import { PAGES } from "../lib/pages.ts";

import Markdown from "./markdown.tsx";

export type Props = {
  route: string;
};

const Renderer = ({ route }: Props): JSX.Element => {
  const [cache, setCache] = useState<Record<string, string | undefined>>({});
  useEffect(() => {
    if (cache[route] === undefined) {
      (async () => {
        const url = PAGES[route];
        if (url === undefined) {
          return;
        }

        const response = await fetch(url);
        const raw = await response.text();

        const _cache = { ...cache };
        _cache[route] = raw;

        setCache(_cache);
      })();
    }
    return;
  }, [route]);

  const raw = cache[route];
  if (raw === undefined) {
    return <>now loading...</>;
  } else {
    return <Markdown raw={raw} />;
  }
};

export default Renderer;
