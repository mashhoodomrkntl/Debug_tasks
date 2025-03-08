import React, { useState } from "react";
import "./SearchList.css";
const SearchList = ({ searchList }) => {
  return (
    <div className="search-list-container">
      {searchList.length > 0 ? (
        searchList.map((data) => (
          <div className="search-items" key={data.id}>
            <img width={100} height={50} src={data.image} alt={data.name} />
            <p>{data.name}</p>
          </div>
        ))
      ) : (
        <p>No Movie Found</p>
      )}
    </div>
  );
};

export default SearchList;
