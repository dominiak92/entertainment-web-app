import Trending from "./elements/Trending";
import styles from "./Home.module.scss";
import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import SearchElement from "../UI/Search/SearchElement";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import "swiper/css";

const Home = () => {
  const { searchText, setSearchText, filteredData } = useContext(SearchContext);


  useEffect(() => {
    setSearchText('')
  }, [setSearchText])

  return (
    <div className={styles.wrapper}>
      <SearchBar title="Search for movies or TV series" />
      {searchText !== "" ? (
        <SearchElement length={filteredData.length} type={["TV Series", "Movie"]} location={'home'} />
      ) : (
        <>
          <Trending />
          <DataCards
            type={["TV Series", "Movie"]}
            title={"Recommended"}
            noData={"Recommended"}
            isTrending={true}

          />
        </>
      )}
    </div>
  );
};

export default Home;
