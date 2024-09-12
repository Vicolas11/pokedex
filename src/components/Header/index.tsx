import React from "react";
import styles from "./styles.module.scss";
import { Logo } from "../../assets";
import { BiMenu } from "react-icons/bi";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Pokemon Logo" />
      </div>
      <div className={styles.menu}>
        <BiMenu />
      </div>
    </header>
  );
};
