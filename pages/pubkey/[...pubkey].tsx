import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Encryptor from "../../components/Encryptor";
import Codeblock from "../../components/Codeblock";
import commonCss from "../../styles/common.module.css";

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
      <section className={commonCss.narrow}>
        <p>
          This website will help you encrypt text using{" "}
          <a href="https://github.com/FiloSottile/age">age encryption format</a>
          .
        </p>
        Your message will be encryped using the following public key:
        <Codeblock value={pubkey} />
        Only the person having access to corresponding private key will be able
        to read it.
      </section>
      <section>
        <Encryptor pubkey={pubkey} />
      </section>
    </Layout>
  );
};

export default Page;
