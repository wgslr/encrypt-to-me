import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Encryptor from "../../components/Encryptor";

export const getServerSideProps = async ({ params }) => {
  const { pubkey } = params;

  console.log({ pubkey });
  return { props: { pubkey: (pubkey as string[]).join("/") } };
};

export default function Page({ pubkey }) {
  return (
    <Layout>
      {/* <Head>
        <title>{pubkey}</title>
      </Head> */}
      <div>Encrypting to {pubkey}</div>
      <Encryptor pubkey={pubkey} />
    </Layout>
  );
}
