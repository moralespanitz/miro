import Head from "next/head";
import ThreeScene from "../components/ThreeScene";

export default function Home() {
  return (
    <>
      <Head>
        <title>Three.js with Next.js</title>
      </Head>
      <main>
        <ThreeScene />
      </main>
    </>
  );
}
