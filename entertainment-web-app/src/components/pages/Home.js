import Trending from "./elements/Trending";
import styles from "./Home.module.scss";
import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import SearchElement from "../UI/Search/SearchElement";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import { useSpring, animated } from "react-spring";
import "swiper/css";

const Home = () => {
  const { searchText, setSearchText, filteredData } = useContext(SearchContext);

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    setSearchText('')
  }, [setSearchText])

  return (
    <animated.div style={fadePage} className={styles.wrapper}>
      <SearchBar title="Search for movies or TV series" />
      {searchText !== "" ? (
        <SearchElement length={filteredData.length} type={["TV Series", "Movie"]} location={'home'} />
      ) : (
        <>
          <Trending />
          <DataCards
            type={["TV Series", "Movie"]}
            title={"Recommended for you"}
            noData={"Recommended for you"}
            isTrending={true}

          />
        </>
      )}
    </animated.div>
  );
};

export default Home;
