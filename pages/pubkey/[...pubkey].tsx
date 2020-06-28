import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import Codeblock from "../../components/Codeblock";
import Encryptor from "../../components/Encryptor";
import Layout from "../../components/Layout";
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
          This website will help you encrypt a message using{" "}
          <a href="https://github.com/FiloSottile/age">age encryption format</a>
          .
        </p>
        Your message will be encryped using the following public key:
        <Codeblock>{pubkey}</Codeblock>
        Only the person having access to corresponding private key will be able
        to read it.
      </section>
      <section>
        <Encryptor pubkey={pubkey} />
      </section>
      <section className={commonCss.narrow}>
        <h2>Is it secure?</h2>
        <p>
          The encryption process happens entirely in your browser. Our servers
          do not receive your message, either before or after encryption. You
          can verify it by checking for requests in your browser's developer
          tools (F12).
        </p>
        <p>
          Therefore this process is <b>as secure as your browser</b>. Be mindful
          of browser extensions, some of which may send everything you type to
          their servers.
        </p>
        <p>
          For maximum security, do not use this website and perform the
          encryption in your console instead. Install{" "}
          <a href="https://github.com/FiloSottile/age">age</a> or{" "}
          <a href="https://github.com/str4d/rage/">rage</a> and use the command:
          <Codeblock>age -a -r {pubkey}</Codeblock>
        </p>
      </section>
      <section className={commonCss.narrow}>
        <h2>How to publish my public key?</h2>
        Go to <Link href="/">the front page</Link> and follow the instructions.
      </section>
    </Layout>
  );
};

export default Page;
