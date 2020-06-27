import React from "react";
import moduleCss from "./Encryptor.module.css";

interface IProps {
  pubkey: string;
}

const Encryptor: React.FC<IProps> = ({ pubkey }) => {
  const [input, setInput] = React.useState("");
  const [encrypted, setEncrypted] = React.useState<string>("");
  const [error, setError] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    if (!input) {
      setEncrypted("");
    } else if (pubkey) {
      console.log("encrypting");
      encrypt(input, pubkey)
        .then(setEncrypted)
        .catch((e) => {
          console.log(e);
          setError(e);
        });
    }
  }, [input, pubkey]);

  return (
    <section className={moduleCss.container}>
      <textarea
        className={moduleCss.textarea}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></textarea>
      <textarea
        className={`${moduleCss.textarea} ${(error && moduleCss.error) || ""}`}
        readOnly
        value={error ? error : encrypted}
        // style={{ width: "60em", height: "20em" }}
      ></textarea>
    </section>
  );
};
export default Encryptor;

async function encrypt(text: string, pubkey: string): Promise<string> {
  const rage = await import("@wgslr/encrypt-to-me-rage");
  return rage.encrypt_to_pubkey(text, pubkey);
}
