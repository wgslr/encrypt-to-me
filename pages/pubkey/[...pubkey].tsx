import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pubkey } = params;

  console.log({ pubkey });
  return { props: { pubkey: (pubkey as string[]).join("/") } };
};

export default function Page({ pubkey }) {
  const [input, setInput] = React.useState("");
  const [encrypted, setEncrypted] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  React.useEffect(() => {
    encrypt(input, pubkey).then(setEncrypted).catch(setError);
  }, [input]);
  return (
    <>
      <Head>
        <title>{pubkey}</title>
      </Head>
      <div>Encrypting to {pubkey}</div>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        style={{ width: "60em", height: "20em" }}
      ></textarea>
      <textarea
        disabled
        value={encrypted}
        style={{ width: "60em", height: "20em" }}
      ></textarea>
      {error && <div>{error}</div>}
    </>
  );
}

async function encrypt(text: string, pubkey: string): Promise<string> {
  const rage = await import("@wgslr/encrypt-to-me-rage");
  return rage.encrypt_to_pubkey(text, pubkey);
}
