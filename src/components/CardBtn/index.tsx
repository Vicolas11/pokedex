import { CardBtnProps } from "../../interfaces/CartBtn.interface";
import styles from "./styles.module.scss";

export default function CardBtn({ title, xtraStyle, ...rest }: CardBtnProps) {
  return (
    <button className={`${styles.button} ${xtraStyle}`} {...rest}>
      {title}
    </button>
  );
}
