import React from "react";
import styles from "./styles.module.scss";
import { Logo } from "../../assets";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={Logo} alt="Pokemon Logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <BiMenu />
      </div>
    </header>
  );
};
