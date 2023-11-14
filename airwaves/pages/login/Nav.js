import Link from "next/link";
import styles from "@/styles/login.module.css";

export default function Nav() {
  return (
    <ul className={styles.login}>
      <li>
        <Link href="mixes/time-is-away-the-colour-of-pomegranates">
          Sign In
        </Link>
      </li>
      <li>
        <Link href="/mixes">Sign Up</Link>
      </li>
    </ul>
  );
}
