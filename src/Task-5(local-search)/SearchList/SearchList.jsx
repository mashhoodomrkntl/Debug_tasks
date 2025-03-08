import React, { useState } from "react";
import "./SearchList.css";
const SearchList = ({ filteredList }) => {
  return (
    <div className="search-list-container">
      {filteredList.length > 0 ? (
        filteredList.map((data) => (
          <div className="search-items" key={data.id}>
            <img
              width={100}
              height={50}
              src={data.poster_path}
              alt={data.original_title}
            />
            <p>{data.original_title}</p>
          </div>
        ))
      ) : (
        <p>No Movie Found</p>
      )}
    </div>
  );
};

export default SearchList;
