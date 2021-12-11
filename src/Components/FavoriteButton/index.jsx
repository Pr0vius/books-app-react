import React, { useContext, useState } from "react";
import { FaHeart, FaHeartBroken, FaRegHeart } from "react-icons/fa";
import { bookshelveContext } from "../../context/bookshelves";
import { userContext } from "../../context/user";
import { addToBookshelve, removeFromBookshelve } from "../../services/fetch";
import "./style.css";

const FavoriteButton = ({ isFavorite, id }) => {
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(userContext);
  const { favorites } = useContext(bookshelveContext);

  const addFavorite = () => {
    addToBookshelve("FAVORITE", id, user.accessToken).then(status => {
      status === 200 && favorites.setData([...favorites.data, id]);
    });
  };
  const removeFavorite = () => {
    removeFromBookshelve("FAVORITE", id, user.accessToken).then(status => {
      if (status === 200) {
        const filteredData = favorites.data.filter(e => e !== id);
        favorites.setData(filteredData);
      }
    });
  };

  return isFavorite ? (
    <button
      className="favButton remove"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={removeFavorite}
    >
      {hovered ? <FaHeartBroken /> : <FaHeart />}
    </button>
  ) : (
    <button
      className="favButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addFavorite}
    >
      {hovered ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
