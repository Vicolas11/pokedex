import { setHasFetched, setSearchTerm } from "../../store/slice/pokemon.slice";
import { SearchBarProps } from "../../interfaces/SearchBar.interface";
import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import { useAppDispatch } from "../../hooks/store.hook";
import { BiSearch } from "react-icons/bi";
import styles from "./styles.module.scss";

export const SearchBar: FC<SearchBarProps> = ({ setIsSearch }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();

  const onChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputText(evt.target.value);
  };

  const handleOnSearch = () => {
    setIsSearch(true);
    dispatch(setHasFetched(true));
    dispatch(setSearchTerm(inputText));
    setInputText("");
  };

  const handleOnKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      handleOnSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search eg, ditto or pikachu"
        value={inputText}
        onChange={onChangeInput}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleOnSearch} disabled={inputText === ""}>
        <BiSearch />
      </button>
    </div>
  );
};
