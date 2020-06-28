import Head from "next/head";
import Link from "next/link";
import React from "react";
import Codeblock from "../components/Codeblock";
import Layout from "../components/Layout";
import commonCss from "../styles/common.module.css";
import moduleCss from "../styles/index.module.css";

const Home: React.FC<{}> = () => {
  const [pubkey, setPubkey] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(false);
  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValid(false);
    setPubkey(event.target.value ?? "");
  };

  React.useEffect(() => {
    isKeyValid(pubkey).then(setValid);
  }, [pubkey]);

  return (
    <Layout>
      <Head>
        <title>Encrypt to me!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={commonCss.narrow}>
        <p>
          Using this website, you can create an address for your{" "}
          <a href="https://github.com/FiloSottile/age">age encryption format</a>{" "}
          public key. <br />
          Like{" "}
          <Link
            href="/pubkey/[...pubkey]"
            as={`/pubkey/age102gnp7e5fxg4gqc94scp39pzd77neng2w83nwtsea4e0qut9yvdqtrtfyw`}
          >
            this one
          </Link>
          , with built-in tool to encrypt a message addressed to your key.
        </p>
      </section>
      <section className={commonCss.narrow}>
        <form>
          <label htmlFor="your-pubkey">Provide your public key:</label>
          <input
            name="your-pubkey"
            className={moduleCss["wide-input"]}
            onChange={handleKeyChange}
          />
          <Link href="/pubkey/[...pubkey]" as={`/pubkey/${pubkey}`}>
            <input
              type="submit"
              value="Go to your page"
              disabled={!valid}
              className={moduleCss["inline-input"]}
            />
          </Link>
          {pubkey && !valid && "This is not a key in a supported format"}
        </form>
      </section>
      <section className={commonCss.narrow}>
        <h2>How do I get a key?</h2>
        <p>
          Install <a href="https://github.com/FiloSottile/age">age</a> or{" "}
          <a href="https://github.com/str4d/rage/">rage</a> and use the commands{" "}
          <Codeblock inline={true}>age-keygen</Codeblock> or{" "}
          <Codeblock inline={true}>rage-keygen</Codeblock>.
        </p>
      </section>
    </Layout>
  );
};

const isKeyValid = async (key: string): Promise<boolean> => {
  const rage = await import("@wgslr/encrypt-to-me-rage");
  return rage.is_key_valid(key);
};

export default Home;
