import React from "react";
import { Navigate, useLocation } from "react-router";
import Search from "../../Components/Search";
import BookList from "../../Containers/BooksList";


const SearchPage = () => {
  let query = new URLSearchParams(useLocation().search)
  const title = query.get("q").split('%20').join("+");
  const queryString = title;
  
  return query.has("q") ? (
    <>
      <h1 className="page-title">Search</h1>
      <Search />
      <BookList bookshelve="SEARCH" query={queryString} />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default SearchPage;
