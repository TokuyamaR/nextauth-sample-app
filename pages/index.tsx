import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create NextAuth App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-6xl font-bold">Start NextAuth Sample App !</p>
      </main>
    </div>
  );
};

export default Home;
