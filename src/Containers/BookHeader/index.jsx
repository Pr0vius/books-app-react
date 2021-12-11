import React from "react";
import BookImg from "../../Components/BookImg";
import RatingStars from "../../Components/RatingStars";
import BookshelveButton from "../BookshelvesButtons";
import "./style.css";

const BookHeader = ({
  id,
  title,
  image,
  author,
  pages,
  rating,
  categories,
}) => {
  return (
    <header className="book__header">
      <div className="tn-cont">
        <BookImg img={image} alt={title} />
        <BookshelveButton id={id} />
      </div>
      <div className="book__header-info">
        <h2 className="book__header-title">{title}</h2>
        <RatingStars rating={rating} />
        <ul className="book__header-ul">
          <li className="book__header-li author">by: {author}</li>
          <li className="book__header-li">{pages} Pages</li>
          {categories && (
            <li className="book__header-li">
              Categories:
              {categories.map(e => (
                <>
                  <br />&nbsp;&nbsp;&nbsp;{e}
                </>
              ))}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default BookHeader;
