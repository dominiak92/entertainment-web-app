import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";

const Movies = () => {

  const { searchText, setSearchText, movieLength } = useContext(SearchContext);


  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <>
      <SearchBar title="Search for movies" />
      {searchText !== "" ? (
        <SearchElement length={movieLength} type={["Movie"]} location={'movies'} />
      ) : (
      <DataCards type={["Movie"]} title={"Movies"} noData={"Movies"} />)}
    </>
  );
};

export default Movies;
