import Link from "next/link";
import React, { SyntheticEvent } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: React.FC<{}> = () => {
  const [pubkey, setPubkey] = React.useState<string>("");
  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ event });
    console.log({ target: event.target });
    setPubkey(event.target.value ?? "");
  };

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
            <input type="submit" value="Go to your page" />
          </Link>
        </form>
      </main>
    </Layout>
  );
};

export default Home;
