import React, {
  useEffect,
  useState,
} from "https://esm.sh/react@0.0.0-experimental-27659559e";

import marked from "https://esm.sh/marked";
import dompurify from "https://esm.sh/dompurify";

export type Props = {
  raw: string;
};

const Markdown = ({ raw }: Props): JSX.Element => {
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

export default Markdown;
