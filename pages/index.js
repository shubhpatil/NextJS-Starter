import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next JS</h1>
      <Link href="/posts">
        <a>All Posts</a>
      </Link>
    </div>
  );
}
