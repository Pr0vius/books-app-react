import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./style.css";

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputStr = evt.target.input.value;
    if (!inputStr) {
      return;
    }
    navigate(`/search?q=${inputStr}`);
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search__container">
        <input
          type="text"
          name="input"
          className="search__input"
          placeholder="Search"
        />
        <button type="submit" className="search__submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
