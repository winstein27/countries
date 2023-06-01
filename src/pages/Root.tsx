import { useState } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Root.module.css";

import Header from "../components/Header";

const Root = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} darkModeHandler={changeTheme} />
      <div className={styles[theme]}>
        <main className={styles.main}>
          <Outlet context={{ theme }} />
        </main>
      </div>
    </>
  );
};

export default Root;
