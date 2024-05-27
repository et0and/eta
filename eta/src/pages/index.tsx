import { Inter } from "next/font/google";
import CountdownTimer from "./components/CountdownTimer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Estimated time of</title>
        <meta property="og:title" content="Estimated time of" key="title" />
        <meta property="twitter:title" content="Estimated time of" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta property="description" content="It's about time" />
        <meta property="og:description" content="It's about time" />
        <meta property="twitter:description" content="It's about time" />
        <meta property="og:url" content="https://work.tom.so/eta" />
        <meta property="og:image" content="/eta/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/eta/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/eta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/eta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/eta/favicon-16x16.png"
        />
        <link rel="manifest" href="/eta/site.webmanifest" />
      </Head>
      <main
        className={`flex min-h-screen md:p-12 p-10 bg-white dark:bg-black text-black dark:text-white ${inter.className}`}
      >
        <CountdownTimer />
      </main>
    </>
  );
}
