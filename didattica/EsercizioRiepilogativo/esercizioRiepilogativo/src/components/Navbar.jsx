import { Link } from "react-router";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/chi-siamo">
            Chi Siamo
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contatti">
            Contatti
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;