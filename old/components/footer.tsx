import React from "https://esm.sh/react";

import { None } from "../lib/util.ts";

import "../style/components/footer.css";

const Footer = ({}: None): JSX.Element => {
  return (
    <>
      <footer className="footer">
        2021,
        <span className="my_name_highlight">Nanai10a</span>
      </footer>
    </>
  );
};

export default Footer;
