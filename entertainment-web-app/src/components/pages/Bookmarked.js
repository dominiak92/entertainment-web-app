import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";

const Bookmarked = () => {
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <>
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
    </>
  );
};

export default Bookmarked;
