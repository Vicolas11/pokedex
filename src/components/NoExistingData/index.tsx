import { Header } from "../Header";
import styles from "./styles.module.scss";

export const NoExistingData = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>No existing Pokomen</h2>
      </div>
    </>
  );
};
