import React from "react";
import BookList from "../../Containers/BooksList";

const Purchased = () => {
  return (
    <>
      <h1 className="page-title">Purchased</h1>
      <BookList bookshelve="PURCHASED" /> 
    </>
  );
};

export default Purchased;
