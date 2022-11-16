import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <body className="bg-[#121214]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
