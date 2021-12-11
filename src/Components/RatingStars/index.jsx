import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./style.css";

const RatingStars = ({ rating }) => {
  let stars = [];
  for (let index = 1; index <= 5; index++) {
    index <= rating
      ? stars.push(<FaStar key={index} />)
      : stars.push(<FaRegStar key={index} />);
  }
  return <div className="stars_container">{stars.map(star => star)}</div>;
};

export default RatingStars;
