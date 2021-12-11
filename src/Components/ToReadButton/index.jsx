import React, { useContext, useState } from "react";
import { BiListPlus, BiListCheck, BiListMinus } from "react-icons/bi";
import { bookshelveContext } from "../../context/bookshelves";
import { userContext } from "../../context/user";
import { addToBookshelve, removeFromBookshelve } from "../../services/fetch";
import "./style.css";

const ToReadButton = ({ id, isPending }) => {
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(userContext);
  const { toRead } = useContext(bookshelveContext);

  const addPending = () => {
    addToBookshelve("TOREAD", id, user.accessToken).then(status => {
      status === 200 && toRead.setData([...toRead.data, id]);
    });
  };
  const removePending = () => {
    removeFromBookshelve("TOREAD", id, user.accessToken).then(status => {
      if (status === 200) {
        const filteredData = toRead.data.filter(e => e !== id);
        toRead.setData(filteredData);
      }
    });
  };

  return isPending ? (
    <button
      className="pendingButton remove"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={removePending}
    >
      {hovered ? <BiListMinus /> : <BiListCheck />}
    </button>
  ) : (
    <button
      className="pendingButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addPending}
    >
      {hovered ? <BiListCheck /> : <BiListPlus />}
    </button>
  );
};

export default ToReadButton;
