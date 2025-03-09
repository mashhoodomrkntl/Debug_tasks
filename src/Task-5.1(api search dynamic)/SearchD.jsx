import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput/SearchInput";
import SearchList from "./SearchList/SearchList";
import axios from "axios";

const SearchD = () => {
  //fetch api - filter loacally
  const API_URL = "https://rickandmortyapi.com/api/character/";
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]); //default api data

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
    // fetchMoviList(event.target.value);
  };
  const clearSearchResults = () => {
    setSearchInputValue("");
    setSearchList([]);
  };
  const fetchMoviList = async (query) => {
    try {
      const response = await axios.get(API_URL, {
        // params: { name: query }, //params same name aanengil object il key maathram madhi
        params: { name: searchInputValue },
      });

      setSearchList(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  //   we can call two metho one is usign useEffect anothe is onchange il fn call cheydhit (best way is use useEffect this is for better when use filter or sort by products or another things )
  useEffect(() => {
    console.log("mount");
    const timeout = setTimeout(() => {
      if (searchInputValue) {
        fetchMoviList();
        console.log("timout");
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
      console.log("unmount");
    };
  }, [searchInputValue]);
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
      <SearchList searchList={searchList} />
    </div>
  );
};

export default SearchD;
  