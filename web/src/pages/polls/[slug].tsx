import Head from "next/head";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

export default function PollDetails() {
  return (
    <>
      <Head>
        <title>NLW Copa | Bolões</title>
        <meta name="bolões" content="noindex" />
      </Head>
      <div className="w-full mx-auto my-x max-w-[1120px] text-white">
        <Header />
        <Navbar />
      </div>
    </>
  );
}
