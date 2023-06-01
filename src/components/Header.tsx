import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

import styles from "./Header.module.css";

interface Props {
  theme: "light" | "dark";
  darkModeHandler: () => void;
}

const Header = (props: Props) => {
  return (
    <header className={`${styles.container} ${styles[props.theme]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Where in the world?</h2>
        <button className={styles.button} onClick={props.darkModeHandler}>
          {props.theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
