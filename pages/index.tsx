import React, { FC } from "https://esm.sh/react@17.0.2";

const Page: FC<None> = () => {
  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
};

export default Page;

const Main: FC<None> = () => {
  return (
    <>
      <main>
        Contents
      </main>
    </>
  );
};

type None = Record<string, never>;

const Header: FC<None> = () => {
  return (
    <>
      <header>
        <nav>
          Title
        </nav>
      </header>
    </>
  );
};

const Footer: FC<None> = () => {
  return (
    <>
      <footer>
        Footer
      </footer>
    </>
  );
};
