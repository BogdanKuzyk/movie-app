import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  //Events
  const onSearch = (e) => {
    const condition = e.target.value;
    setSearchTerm(condition);
  };

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default Search;
