import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa1 ba b--lightest-blue bg-lightest-blue"
        type="search"
        placeholder="Search robots by name..."
        size='45'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
