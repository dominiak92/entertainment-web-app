import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";
import { useSpring, animated } from "react-spring";

const Movies = () => {

  const { searchText, setSearchText, movieLength } = useContext(SearchContext);

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <animated.div style={fadePage}>
      <SearchBar title="Search for movies" />
      {searchText !== "" ? (
        <SearchElement length={movieLength} type={["Movie"]} location={'movies'} />
      ) : (
      <DataCards type={["Movie"]} title={"Movies"} noData={"Movies"} />)}
    </animated.div>
  );
};

export default Movies;
