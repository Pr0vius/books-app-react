import React from "react";
import BookCard from "../../Components/BookCard";
import useFetch from "../../hooks/useFetch";
import "./style.css";

const BookList = ({ bookshelve, listName, noDataMsg = true, query }) => {
  const { books } = useFetch(bookshelve, query);
  
  const noDataMessage = {
    FAVORITES: "No results",
    PURCHASED: "No results",
    TOREAD: "No results",
    READING: "No results",
    FINISHED: "No results",
    REVIEWED: "No results",
    RECENTS: "No results",
    EBOOKS: "No results",
    RECOMENDATIONS: "",
    SEARCH: "No results for",
  };

  return books.length > 0 ? (
    <>
      {listName ? <h2 className="booklist_title">{listName}</h2> : null}
      <div className="booklist">
        {books.map(e => (
          <BookCard
            id={e.id}
            title={e.volumeInfo.title}
            key={e.id}
            thumbnail={
              e.volumeInfo.imageLinks
                ? e.volumeInfo.imageLinks.thumbnail
                : undefined
            }
          />
        ))}
      </div>
    </>
  ) : noDataMsg ? (
    noDataMessage[bookshelve]
  ) : null;
};

export default BookList;
