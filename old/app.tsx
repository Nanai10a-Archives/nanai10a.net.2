import React, { FC } from "https://esm.sh/react";

import "./style/app.css";
import "./style/fonts.css";
import "./style/colors.css";

import "./public/prism.css";

export default function App({
  Page,
  pageProps,
}: {
  Page: FC;
  pageProps: Record<string, unknown>;
}) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        {/* Roboto link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <Page {...pageProps} />
    </>
  );
}
