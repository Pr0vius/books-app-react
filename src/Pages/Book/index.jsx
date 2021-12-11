import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import BookHeader from "../../Containers/BookHeader";
import Spinner from "../../Components/Spinner";
import { userContext } from "../../context/user";
import { searchById } from "../../services/fetch";
import "./style.css";

const Book = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchById(id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }).then(e => {
      setBook(e);
      setLoading(false);
    });
  }, [id, user]);
  console.log(book)
  return (
    <>
      {loading ? (
        <div className="loadScreen">
          <Spinner />
        </div>
      ) : (
        <>
          <BookHeader
            title={book.volumeInfo.title}
            image={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            author={book.volumeInfo.authors[0]}
            rating={book.volumeInfo.averageRating}
            pages={book.volumeInfo.pageCount}
            id={id}
            categories={book.volumeInfo.categories}
          />

          <div>
            <h3>Description</h3>
            <div className="book_description-container">
              <p
                dangerouslySetInnerHTML={{
                  __html: book.volumeInfo.description || `No Description Available`,
                }}
                className="book_description-p"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Book;
