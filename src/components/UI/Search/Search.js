import SearchElement from "./SearchElement";
import SearchBar from "./SearchBar";
import styles from "./Search.module.scss";
import SearchProvider from "./SearchProvider";

const Search = () => {

  return (
    <SearchProvider>
      <div className={styles.wrapper}>
        <SearchBar />
        <SearchElement isBookmarked={true}/>
      </div>
    </SearchProvider>
  );
};

export default Search;
