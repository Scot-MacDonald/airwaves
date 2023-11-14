import Link from "next/link";
import styles from "@/styles/login.module.css";
import Nav from "./nav.js";
export default function Login() {
  return (
    <>
      <div className={styles.forms}>
        <h1 className={styles.h1}>waves</h1>
        <Nav />
        <span class="input">
          <input type="text" class="input__field" id="input-4" />
          <label for="input-4" class="input__label">
            <span class="input__label-content">Email Address</span>
          </label>
        </span>
      </div>
      <ul></ul>
    </>
  );
}
