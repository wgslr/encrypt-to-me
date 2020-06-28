import Link from "next/link";
import type React from "react";
import commonCss from "../styles/common.module.css";
import moduleStyles from "./Layout.module.css";

const Layout: React.FC<{}> = ({ children }) => {
  console.log({ children });
  return (
    <>
      <div className={moduleStyles["content-wrapper"]}>
        <header className={commonCss.narrow}>
          <h1>
            <Link href="/">age encryption in your browser</Link>
          </h1>
        </header>
        <main>{children}</main>

        <footer className={commonCss.narrow}>
          <h2>Attribution</h2>
          <p>
            Age encryption format and reference implementation were created by{" "}
            <a href="https://twitter.com/FiloSottile">@FiloSottile</a>.
          </p>
          <p>
            This website runs the Rust implementation of age:{" "}
            <a href="https://github.com/str4d/rage/">rage</a> by str4d.
          </p>
          <p>
            This website was built by{" "}
            <a href="https://twitter.com/ciechosz">@ciechosz</a>/
            <a href="https://github.com/wgslr/">wgslr</a>. See the source code
            on <a href="https://github.com/wgslr/encrypt-to-me">GitHub</a>.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
