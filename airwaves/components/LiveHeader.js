import styles from "@/styles/LiveHeader.module.css";

export default function LiveHeader() {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.main}>
          <span className={styles.span}>1</span>Play Buttin Live 1
        </div>
        <div className={styles.sidebarfirst}>Live now</div>
        <div className={styles.sidebarsecond}>
          <span className={styles.span}>2</span>Play Buttin Live{" "}
        </div>
      </header>
    </>
  );
}
