import React, {
  useEffect,
  useState,
} from "https://esm.sh/react@0.0.0-experimental-27659559e";
import { useRouter } from "https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts";

import marked from "https://esm.sh/marked";
import dompurify from "https://esm.sh/dompurify";

const Page = ({}: None): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Main route={router.pathname} />
      <Footer />
    </>
  );
};

export default Page;

const PAGES: Record<string, string | undefined> = {
  "/": "https://example.com",
};

type MainProps = {
  route: string;
};

const Main = ({ route }: MainProps): JSX.Element => {
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

type MarkdownProps = {
  raw: string;
};

const Markdown = ({ raw }: MarkdownProps): JSX.Element => {
  const [compiled, setCompiled] = useState<string | null>(null);

  useEffect(() => {
    const markdown = marked(raw, { sanitizer: dompurify.sanitize });

    setCompiled(markdown);

    return () => {
      setCompiled(null);
    };
  }, [raw]);

  if (compiled === null) {
    return <>compiling...</>;
  } else {
    return <section dangerouslySetInnerHTML={{ __html: compiled }} />;
  }
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
