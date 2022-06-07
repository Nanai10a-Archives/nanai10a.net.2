import "../style/components/renderer.css";

import React, { useEffect, useMemo, useState } from "https://esm.sh/react";

import { INDEXES } from "../lib/pages.ts";
import * as Prism from "../public/prism.js";

const Renderer = ({ route, mds }: Props): JSX.Element => {
  Prism;
  const markdowns = useMemo<Array<JSX.Element>>(
    () =>
      mds.map((md, idx) => (
      <div key={idx} className="display_markdown_container">
        <section
          className="display_markdown"
          dangerouslySetInnerHTML={{ __html: md }}
        />
      </div>
    )),
    [mds]
  );

  const [index, position] = useMemo<
    [number | undefined, number | undefined]
  >(() => {
    const nowIdx = INDEXES[route];
    if (nowIdx === undefined) {
      // TODO: [任意のエラーコードページ]への移行処理
      return [undefined, undefined];
    }

    return [nowIdx, nowIdx * -100];
  }, [route]);

  const [isSSR, setIsSSR] = useState<boolean>(true);
  useEffect(
    () =>
      setTimeout(() => {
      setIsSSR(false);
    }),
    []
  );
  const height = useMemo<number | undefined>(() => {
    if (!isSSR) {
      return eval(
        `document.getElementsByClassName("display_markdown_container").item(${index}).offsetHeight`
      );
    }
    return undefined;
  }, [index, position]);

  return (
    <div
      className="all_display_container"
      style={{
        left: `${position}vw`,
        width: `calc(100vw * ${markdowns.length})`,
        height: `calc(${height} + (32px + calc(100vh / 8)))`,
      }}
    >
      {markdowns}
    </div>
  );
};

export type Props = {
  route: string;
  mds: Array<string>;
};

export default Renderer;
