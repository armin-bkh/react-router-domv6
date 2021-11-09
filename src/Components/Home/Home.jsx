import { Outlet, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <h1>home page</h1>
      {/* <Routes>
        <Route path="explain" element={<p>this is RRD-v6</p>} />
      </Routes> */}
      <Outlet />
      <Link className={styles.homeBtn} to="explain">
        click me!
      </Link>
      <Link className={styles.homeBtn} to="hi">
        click me!
      </Link>
      <Outlet />

    </main>
  );
};

export default Home;
