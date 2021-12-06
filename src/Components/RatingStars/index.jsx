import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./style.css";

const RatingStars = ({ rating }) => {
  let stars = [];
  for (let index = 0; index <= rating; index++) {
    index < rating ? stars.push(<FaStar />) : stars.push(<FaRegStar />);
  }
  return <div className="stars_container">{stars.map(star => star)}</div>;
};

export default RatingStars;
