import React from "react";
import styles from "./NavBar.module.css";

interface props {
  title: String;
}

const NavBar = ({ title }: props): React.ReactElement => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default NavBar;
