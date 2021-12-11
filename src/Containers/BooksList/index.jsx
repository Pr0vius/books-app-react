import React from "react";
import BookCard from "../../Components/BookCard";
import ScreenMessage from "../../Components/ScreenMessage";
import Spinner from "../../Components/Spinner";
import useFetch from "../../hooks/useFetch";
import "./style.css";

const BookList = ({ bookshelve, listName, noDataMsg = true, query }) => {
  const { books, isLoading } = useFetch(bookshelve, query);

  const noDataMessage = {
    FAVORITES: "You haven't favorite books",
    PURCHASED: "You haven't purchased books",
    TOREAD: "You haven't pending books",
    READING: "You haven't current reading books",
    FINISHED: "You haven't purchased books",
    REVIEWED: "You haven't reviewed books",
    RECENTS: "You haven't recent viewed books",
    EBOOKS: "You haven't purchased e-books",
    RECOMENDATIONS: "",
    SEARCH: `No results for ${query}`,
  };

  return isLoading ? (
    <div style={{ display: "flex", justifyContent: "center",alignItems:'center', height: '100%'}}>
      <Spinner />
    </div>
  ) : books.length > 0 ? (
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
    <ScreenMessage message={noDataMessage[bookshelve]} />
  ) : null;
};

export default BookList;
