import "../style/components/header.css";

import React, { useMemo } from "https://esm.sh/react";

import { INDEXES_ARRAY } from "../lib/pages.ts";

const Header = ({ pushRoute, currentPath }: Props): JSX.Element => {
  const menuElems = useMemo<Array<JSX.Element>>(() => {
    const elems = INDEXES_ARRAY.map(({ path, title }, idx) => (
      <button
        className={path === currentPath ? "current_path" : undefined}
        key={idx}
        onClick={() => {
          pushRoute(path);
        }}
      >
        {title} ( {path} )
      </button>
    ));

    return elems;
  }, [pushRoute, currentPath]);

  return (
    <>
      <header className={"header"}>
        <div className={"menu"}>{menuElems}</div>
      </header>
    </>
  );
};

type Props = {
  pushRoute: (path: string) => void;
  currentPath: string;
};

export default Header;
