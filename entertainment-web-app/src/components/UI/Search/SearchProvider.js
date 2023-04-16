import { useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import axios from "axios";

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [movieLength, setMovieLength] = useState(0);
  const [tvSeriesLength, setTvSeriesLength] = useState(0);
  const [filteredData, setFilteredData] = useState([])

  const onSearch = async () => {
    
    try {
      const response = await axios.get(
        `https://entertainment-api.herokuapp.com/data?title_like=.*${searchText}.*`
      );
      const result = response.data
      const movies = result.filter(element => element.category === "Movie");
      const tvSeries = result.filter(element => element.category === "TV Series");
      setMovieLength(movies.length)
      setTvSeriesLength(tvSeries.length)
      setFilteredData(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onSearch();
  }, [searchText]);

  return (
    <>
      <SearchContext.Provider value={{ searchText, setSearchText, onSearch, filteredData, movieLength, tvSeriesLength }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
