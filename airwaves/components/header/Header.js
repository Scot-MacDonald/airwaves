import { Inter } from "next/font/google";
import styles from "./header.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Header</h1>
      </header>
    </>
  );
}
