import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNProgress color="#F7DD43" />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
