import Head from "next/head";
import { Game } from "../components/Game";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export default function Polls() {
  return (
    <>
      <Head>
        <title>NLW Copa | Bolões</title>
        <meta name="bolões" content="noindex" />
      </Head>

      <div className="w-full mx-auto my-x max-w-[1120px] text-white">
        <Header />
        <Navbar />
        <div className="grid grid-cols-4 gap-8 mt-12">
          <Game />
          <Game />
          <Game />
        </div>
      </div>
    </>
  );
}
