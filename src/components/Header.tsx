import { MdOutlineDarkMode } from "react-icons/md";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Where in the world?</h2>
        <button className={styles.button}>
          <MdOutlineDarkMode />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
