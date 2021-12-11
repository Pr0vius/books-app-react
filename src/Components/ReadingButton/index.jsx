import React, { useContext, useState } from "react";
import {
  BsBookmark,
  BsBookmarkCheckFill,
  BsBookmarkXFill,
} from "react-icons/bs";
import { bookshelveContext } from "../../context/bookshelves";
import { userContext } from "../../context/user";
import { addToBookshelve, removeFromBookshelve } from "../../services/fetch";
import "./style.css";

const ReadingButton = ({ id, isReading }) => {
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(userContext);
  const { reading } = useContext(bookshelveContext);

  const addReading = () => {
    addToBookshelve("READING", id, user.accessToken).then(status => {
      status === 200 && reading.setData([...reading.data, id]);
    });
  };
  const removeReading = () => {
    removeFromBookshelve("READING", id, user.accessToken).then(status => {
      if (status === 200) {
        const filteredData = reading.data.filter(e => e !== id);
        reading.setData(filteredData);
      }
    });
  };

  return isReading ? (
    <button
      className="readingButton remove"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={removeReading}
    >
      {hovered ? <BsBookmarkXFill /> : <BsBookmarkCheckFill />}
    </button>
  ) : (
    <button
      className="readingButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addReading}
    >
      {hovered ? <BsBookmarkCheckFill /> : <BsBookmark />}
    </button>
  );
};

export default ReadingButton;
