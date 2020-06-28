import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Encryptor from "../../components/Encryptor";
import Codeblock from "../../components/Codeblock";

interface IProps {
  pubkey: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pubkey } = params ?? { pubkey: [""] };
  return { props: { pubkey: (pubkey as string[]).join("/") } };
};

const Page: React.FC<IProps> = ({ pubkey }) => {
  return (
    <Layout>
      {/* <Head>
        <title>{pubkey}</title>
      </Head> */}
      <div>
        Encrypting to
        <Codeblock value={pubkey} />
      </div>
      <Encryptor pubkey={pubkey} />
    </Layout>
  );
};

export default Page;
