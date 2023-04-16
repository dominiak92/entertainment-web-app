import DataCards from "./elements/DataCards";
import SearchBar from "../UI/Search/SearchBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../UI/Search/SearchContext";
import SearchElement from "../UI/Search/SearchElement";

const Tvseries = () => {

  const { searchText, setSearchText, tvSeriesLength } = useContext(SearchContext);

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <>
      <SearchBar title="Search for TV series" />
      {searchText !== "" ? (
        <SearchElement length={tvSeriesLength} type={["TV Series"]} location={'tvseries'} />
      ) : (
      <DataCards type={["TV Series"]} title={"TV Series"} noData={"TV Series"} />)}
    </>
  );
};

export default Tvseries;
