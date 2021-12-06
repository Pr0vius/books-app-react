import React from "react";
import BookList from "../../Containers/BooksList";

const Reviewed = () => {
  return (
    <>
      <h1 className="page-title">Reviewed</h1>
      <BookList bookshelve="REVIEWED"/>
    </>
  );
};

export default Reviewed;
