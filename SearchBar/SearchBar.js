import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Recherche par titre/ville/pays..."
        type="text"
        value={filter}
        onChange={onChange}
      />
      <button className="button" onClick={() => console.log("Search clicked")}>
      Search
      </button>
    </div>
  );
};

export default SearchBar;
