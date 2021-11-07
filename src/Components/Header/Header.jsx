import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
