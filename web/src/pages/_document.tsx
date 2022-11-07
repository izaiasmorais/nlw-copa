import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <body className="bg-[#121214] bg-app bg-no-repeat bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
