import React from "react";
import { Link } from "react-router-dom";
import BookImg from "../BookImg";
import "./style.css";

const BookCard = ({ title, thumbnail, id }) => {
  return (
    <Link to={`/book/${id}`} className="book-card">
      <BookImg img={thumbnail} alt={title} />
      <h5 className="book-card__title">{title}</h5>
    </Link>
  );
};

export default BookCard;
