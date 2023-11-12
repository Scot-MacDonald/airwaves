import styles from "../styles/header.module.css";
import Nav from "./Nav";
export default function Header() {
  return (
    <>
      <header className={`${styles.header}`}>
        <Nav />
      </header>
    </>
  );
}
