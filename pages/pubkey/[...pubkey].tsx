import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { pubkey } = params;

//   return { props: { pubkey: (pubkey as string[]).join("/") } };
// };

export const getServerSideProps = async ({ params }) => {
  const { pubkey } = params;

  console.log({ pubkey });
  return { props: { pubkey: (pubkey as string[]).join("/") } };
};

export default function Page({ pubkey }) {
  // initial render has empty pubkey because of static generation

  console.log("function", { pubkey });
  const [input, setInput] = React.useState("");
  const [encrypted, setEncrypted] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  React.useEffect(() => {
    if (pubkey) {
      encrypt(input, pubkey)
        .then(setEncrypted)
        .catch((e) => {
          console.log(e);
          setError(e);
        });
    }
  }, [input, pubkey]);
  return (
    <Layout>
      {/* <Head>
        <title>{pubkey}</title>
      </Head> */}
      <div>Encrypting to {pubkey}</div>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        // style={{ width: "60em", height: "20em" }}
      ></textarea>
      <textarea
        disabled
        value={encrypted}
        // style={{ width: "60em", height: "20em" }}
      ></textarea>
      {(error && <div>{error.toString()}</div>) || ""}
    </Layout>
  );
}

async function encrypt(text: string, pubkey: string): Promise<string> {
  const rage = await import("@wgslr/encrypt-to-me-rage");
  return rage.encrypt_to_pubkey(text, pubkey);
}
