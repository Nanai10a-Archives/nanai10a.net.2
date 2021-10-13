import React, { FC } from "https://esm.sh/react@17.0.2";

export default function Page() {
  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
}

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
