import React from "react";
import searchIco from "../../assets/icon-search.svg";
import styles from "./SearchBar.module.scss";

export default function App() {
 
  return (
    <form
      className={styles["search-bar"]}
    >
      <button className={styles.searchButton} type="submit">
        <img src={searchIco} alt="search" />
      </button>
      <input
        className={styles.input}
        type="search"
        placeholder="Search TV Shows"
        
      />
    </form>
  );
}
