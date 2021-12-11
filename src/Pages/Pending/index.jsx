import React from "react";
import BookList from "../../Containers/BooksList";

const Pending = () => {
  return (
    <>
      <h1 className="page-title">Pending</h1>
      <BookList bookshelve="TOREAD" />
    </>
  );
};

export default Pending;
