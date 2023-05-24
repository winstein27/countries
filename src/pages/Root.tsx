import { Outlet } from "react-router-dom";

import styles from "./Root.module.css";

import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
