import Link from "next/link";
import React, { SyntheticEvent } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

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

      <main>
        <form>
          <label htmlFor="your-pubkey">Your pubkey:</label>
          <input name="your-pubkey" onChange={handleKeyChange} />
          <Link href="/pubkey/[...pubkey]" as={`pubkey/${pubkey}`}>
            <input type="submit" value="Go to your page" disabled={!valid} />
          </Link>
        </form>
        Valid: {valid ? "true" : "false"}
      </main>
    </Layout>
  );
};

const isKeyValid = async (key: string): Promise<boolean> => {
  const rage = await import("@wgslr/encrypt-to-me-rage");
  return rage.is_key_valid(key);
};

export default Home;
