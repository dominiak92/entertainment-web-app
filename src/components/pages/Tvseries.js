import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";
import { useSpring, animated } from "react-spring";

const Tvseries = () => {

  const { searchText, setSearchText, tvSeriesLength } = useContext(SearchContext);

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <animated.div style={fadePage}>
      <SearchBar title="Search for TV series" />
      {searchText !== "" ? (
        <SearchElement length={tvSeriesLength} type={["TV Series"]} location={'tvseries'} />
      ) : (
      <DataCards type={["TV Series"]} title={"TV Series"} noData={"TV Series"} />)}
    </animated.div>
  );
};

export default Tvseries;
