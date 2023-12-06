import React from "react";
import styles from "./NavBar.module.css";

interface props {
  title: String;
}

const NavBar = ({ title }: props): React.ReactElement => {
  const logo = require('../../assets/GDDLogo.png');
  return (
    <div className={styles.navBar}>
      <div className={styles.logoHolder}>
        <img src={logo} className={styles.logo}/>
      </div>
      <div className={styles.holder}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default NavBar;
