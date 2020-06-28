import type React from "react";
import utilStyles from "../styles/utils.module.css";

const Layout: React.FC<{}> = ({ children }) => {
  console.log({ children });
  return (
    <>
      <header>
        <h1>Encrypt to me!</h1>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
