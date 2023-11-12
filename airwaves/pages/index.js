import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import TrackList from "@/components/trackList";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ``
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="mixes/time-is-away-the-colour-of-pomegranates">
                time-is-away-the-colour-of-pomegranates
              </Link>
            </li>
            <li>
              <Link href="/volumes/the-two-towers">The Two Towers</Link>
            </li>
          </ul>

          <h1>main</h1>
        </div>
      </main>
    </>
  );
}
