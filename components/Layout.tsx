import type React from "react";
import utilStyles from "../styles/utils.module.css";
import moduleStyles from "./Layout.module.css";
import commonCss from "../styles/common.module.css";

const Layout: React.FC<{}> = ({ children }) => {
  console.log({ children });
  return (
    <>
      <div className={moduleStyles["content-wrapper"]}>
        <header className={commonCss.narrow}>
          <h1>age encryption in your browser</h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
