import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="bolões" content="noindex" />
      </Head>

      <div className="w-full px-4 mx-auto my-x max-w-[1240px] text-white">
        <Header />
        <Navbar />
        {children}
      </div>
    </>
  );
}
