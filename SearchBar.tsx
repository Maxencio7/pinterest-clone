import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import "/home/king888/Pintii-clone/src/App.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Your search logic here
    }
  };
  <input
    type="search"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search"
    className="form-control"
    style={{ padding: "10px", borderRadius: "10px" }}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch(e);
      }
    }}
  />;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="d-flex justify-content-center mx-auto p-4"
      style={{ width: "100%" }}
    >
      <div className="input-group" style={{ width: "100%" }}>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="form-control"
          style={{ padding: "10px", borderRadius: "10px", width: "100%" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
        <span
          className="input-group-text"
          style={{
            padding: "10px",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <HiSearch className="text-gray-500" size={25} />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
