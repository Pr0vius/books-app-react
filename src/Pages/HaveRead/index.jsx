import React from "react";
import BookList from "../../Containers/BooksList";

const HaveRead = () => {
  return (
    <>
      <h1 className="page-title">Have Read</h1>
      <BookList bookshelve="FINISHED" />
    </>
  );
};

export default HaveRead;
