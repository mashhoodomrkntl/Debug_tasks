import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput/SearchInput";
import SearchList from "./SearchList/SearchList";
import axios from "axios";

const Search = () => {
  //fetch api - filter loacally
  const API_URL = "https://jsonfakery.com/movies/paginated";
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]); //default api data
  const [filteredList, setfilteredList] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    const filteredItems = searchList.filter((data) => {
      return data.original_title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setfilteredList(filteredItems);
  };
  const clearSearchResults = () => {
    setSearchInputValue("");
    setfilteredList(searchList);
  };
  const fetchMoviList = async () => {
    const response = await axios.get(API_URL);
    setSearchList(response.data.data);
    setfilteredList(response.data.data);
  };

  useEffect(() => {
    fetchMoviList();
  }, []);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img src="" alt="" />
        <h1>Looking for a movie ?</h1>
      </div>
      <SearchInput
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearchResults={clearSearchResults}
      />
      <SearchList filteredList={filteredList} />
    </div>
  );
};

export default Search;
