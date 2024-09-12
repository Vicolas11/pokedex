import { CardButtonProps } from "../../interfaces/CardButton.interface";
import styles from "./styles.module.scss";
import { FC } from "react";

export const CardButton: FC<CardButtonProps> = ({ title, xtraStyle, ...rest }) => {
  return (
    <button className={`${styles.button} ${xtraStyle}`} {...rest}>
      {title}
    </button>
  );
};
