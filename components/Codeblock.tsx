import type React from "react";
import moduleCss from "./Codeblock.module.css";

interface IProps {
  inline?: boolean;
}

const Codeblock: React.FC<IProps> = ({ children, inline = false }) => {
  if (inline) {
    return <span className={moduleCss.codeblock}>{children}</span>;
  } else {
    return <div className={moduleCss.codeblock}>{children}</div>;
  }
};
export default Codeblock;
