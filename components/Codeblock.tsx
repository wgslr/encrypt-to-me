import type React from "react";
import moduleCss from "./Codeblock.module.css";

const Codeblock: React.FC = ({ children }) => {
  return <div className={moduleCss.codeblock}>{children}</div>;
};
export default Codeblock;
