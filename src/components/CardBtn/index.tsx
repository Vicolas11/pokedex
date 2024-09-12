import { CardBtnProps } from "../../interfaces/CartBtn.interface";
import styles from "./styles.module.scss";
import { FC } from "react";

export const CardBtn: FC<CardBtnProps> = ({ title, xtraStyle, ...rest }) => {
  return (
    <button className={`${styles.button} ${xtraStyle}`} {...rest}>
      {title}
    </button>
  );
};
