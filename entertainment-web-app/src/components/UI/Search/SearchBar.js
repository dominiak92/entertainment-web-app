import React from "react";
import searchIco from "../../../assets/icon-search.svg"
import styles from "./SearchBar.module.scss";
import { useContext } from "react"
import { SearchContext } from "./SearchContext";

const SearchBar = (props) => {

  const { setSearchText } = useContext(SearchContext);

  const handleSearchTextChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    if (newValue === "") {
      setSearchText("");
    } else {
      setSearchText(newValue);
    }
  };


  return (
    <form
      className={styles["search-bar"]}
    >
    <button className={styles.searchButton} type="submit">
        <img src={searchIco} alt="search" />
      </button>
      <input
      onChange={handleSearchTextChange}
        className={styles.input}
        type="search"
        placeholder={props.title}
        
      />
    </form>
  );
}


export default SearchBar