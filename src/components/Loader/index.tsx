import { PropagateLoader } from "react-spinners";
import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <h2>Loading Pokemon data. Please wait...</h2>
      <PropagateLoader color="#18425D" size={10} />
    </div>
  );
}
