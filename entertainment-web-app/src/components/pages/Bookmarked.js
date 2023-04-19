import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";
import { useSpring, animated } from "react-spring";

const Bookmarked = () => {
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={fadePage}>
      <SearchBar title="Search for bookmarked shows" />
      {searchText !== "" ? (
        <SearchElement type={["TV Series", "Movie"]} location={"bookmarked"} />
      ) : (
        <>
          <DataCards
            type={"Movie"}
            title={"Bookmarked Movies"}
            noData={"Sorry, you haven't bookmarked anything"}
            isBookmarked={true}
          />
          <DataCards
            type={"TV Series"}
            title={"Bookmarked TV Series"}
            noData={""}
            isBookmarked={true}
          />
        </>
      )}
    </animated.div>
  );
};

export default Bookmarked;
