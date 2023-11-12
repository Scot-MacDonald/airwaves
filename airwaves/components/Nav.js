import Link from "next/link";
import styles from "@/styles/nav.module.css";
export default function Nav() {
  return (
    <>
      <ul className={styles.nav}>
        <li>
          <Link href="mixes/time-is-away-the-colour-of-pomegranates">
            LATEST
          </Link>
        </li>
        <li>
          <Link href="/mixes">MIXES</Link>
        </li>
        <li>
          <Link href="/mixes">ABOUT</Link>
        </li>
        <li>
          <Link href="/mixes">EVENTS</Link>
        </li>
        <li>
          <Link href="/mixes">NEWS</Link>
        </li>
      </ul>
    </>
  );
}
