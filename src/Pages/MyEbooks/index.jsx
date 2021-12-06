import React from "react";
import BookList from "../../Containers/BooksList";

const EBooks = () => {
  return (
    <>
      <h1 className="page-title">My eBooks</h1>
      <BookList bookshelve="EBOOKS"/>
    </>
  );
};

export default EBooks;
