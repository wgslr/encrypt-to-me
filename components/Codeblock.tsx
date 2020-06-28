import type React from "react";
import moduleCss from "./Codeblock.module.css";

const Codeblock: React.FC<{ value?: string }> = ({ value = "" }) => {
  return <div className={moduleCss.codeblock}>{value}</div>;
};
export default Codeblock;
