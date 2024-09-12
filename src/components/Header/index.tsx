import React from "react";
import styles from "./styles.module.scss";
import { Logo } from "../../assets";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={Logo} alt="Pokemon Logo" />
      </div>
      <div className={styles.menu}>
        <BiMenu />
      </div>
    </header>
  );
};
