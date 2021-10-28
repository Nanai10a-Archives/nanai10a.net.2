import "../style/app.css";
import "../style/fonts.css";
import "../style/colors.css";
import "../public/prism.css";

import { AppProps } from "next/app";
// eslint-disable-next-line no-use-before-define
import React from "react";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <head>
      <meta name="viewport" content="width=device-width" />
      {/* Roboto link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
    </head>
    <Component {...pageProps} />
  </div>
);

export default App;
