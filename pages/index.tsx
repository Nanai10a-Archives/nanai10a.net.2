import React from "https://esm.sh/react@17.0.2";
import { useRouter } from "https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts";

const Page = ({}: None): JSX.Element => {
  const router = useRouter();

  return (
    <body>
      <Header />
      <Main route={router.routePath} />
      <Footer />
    </body>
  );
};

export default Page;

const PAGES = {
  "/": "https://example.com",
};

type MainProps = {
  route: string;
};

const Main = ({ route: _r }: MainProps): JSX.Element => {
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
