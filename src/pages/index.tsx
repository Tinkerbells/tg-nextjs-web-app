"use client";
import { useTelgeram } from "@/hooks/useTelegram";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const telgeram = useTelgeram();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
        <p className="text-telegram-black">Hello {}</p>
        <button
          onClick={() => telgeram?.close()}
          className="h-10 w-10 bg-red-600"
        >
          Close
        </button>
      </main>
    </>
  );
};

export default Home;
