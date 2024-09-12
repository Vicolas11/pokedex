import { BiSearch } from "react-icons/bi";
import styles from "./styles.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="search eg, ditto or pikachu" />
      <button>
        <BiSearch />
      </button>
    </div>
  );
}
