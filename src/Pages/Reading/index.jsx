import React from "react";
import BookList from "../../Containers/BooksList";

const Reading = () => {
  return (
    <>
      <h1 className="page-title">Reading Now</h1>
      <BookList bookshelve="READING"/>
    </>
  );
};

export default Reading;
