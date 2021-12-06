import React from "react";
import Search from "../../Components/Search";
import BookList from "../../Containers/BooksList";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Home</h1>
      <Search />
      <BookList
        bookshelve="RECOMENDATIONS"
        listName="Recomendations"
        noDataMsg={false}
      />
      <BookList
        bookshelve="RECENTS"
        listName="Recently Viewed"
        noDataMsg={false}
      />
    </>
  );
};

export default Home;
