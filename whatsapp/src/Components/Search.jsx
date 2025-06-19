import React from "react";
import "../Styles/Search.css";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className="search-container">
      <input placeholder="Search or start new chat" className="searchbox" />
      <p className="search-icon">
        <IoSearchSharp />
      </p>
    </div>
  );
}

export default Search;
