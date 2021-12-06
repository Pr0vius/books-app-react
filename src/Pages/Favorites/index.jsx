import React from "react";
import BookList from "../../Containers/BooksList";

const Favorites = () => {
  return (
    <>
      <h1 className="page-title">Favorites</h1>
      <BookList bookshelve="FAVORITES" />
    </>
  );
};

export default Favorites;
