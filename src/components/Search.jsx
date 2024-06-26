import React from "react";

const Search = (props) => {
  return (
    <div className="task-area">
      <input
        className="inputArea"
        type="text"
        placeholder="Search Keyword"
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default Search;
