import React from "https://esm.sh/react@17.0.2";
const Page = ({}: None): JSX.Element => {

  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
};

export default Page;

const Main = ({}: None): JSX.Element => {
  return (
    <>
      <main>
        Contents
      </main>
    </>
  );
};

type None = Record<string, never>;

const Header = ({}: None): JSX.Element => {
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

const Footer = ({}: None): JSX.Element => {
  return (
    <>
      <footer>
        Footer
      </footer>
    </>
  );
};
