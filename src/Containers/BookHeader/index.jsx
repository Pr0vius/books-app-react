import React from "react";
import BookImg from "../../Components/BookImg";
import RatingStars from "../../Components/RatingStars";
import "./style.css";

const BookHeader = ({ title, image, author, pages, rating }) => {
  return (
    <header className="book__header">
      <BookImg img={image} alt={title} />
      <div className="book__header-info">
        <h2 className="book__header-title">{title}</h2>
        <RatingStars rating={rating} />
        <ul className="book__header-ul">
          <li className="book__header-li author">by: {author}</li>
          <li className="book__header-li">{pages} Pages</li>
        </ul>
      </div>
    </header>
  );
};

export default BookHeader;
