import React from "react";
import "./SearchInput.css";
const SearchInput = ({ searchInputValue, handleChange,clearSearchResults }) => {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="Search here...." onChange={handleChange} value={searchInputValue} />
      {searchInputValue&&<button onClick={clearSearchResults} >clr</button>}
      
    </div>
  );    
};

export default SearchInput;
