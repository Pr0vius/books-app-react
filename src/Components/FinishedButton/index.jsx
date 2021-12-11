import React, { useContext, useState } from "react";
import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { bookshelveContext } from "../../context/bookshelves";
import { userContext } from "../../context/user";
import { addToBookshelve, removeFromBookshelve } from "../../services/fetch";
import "./style.css";

const FinishedButton = ({ id, isFinished }) => {
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(userContext);
  const { finished } = useContext(bookshelveContext);

  const addFinished = () => {
    addToBookshelve("FINISHED", id, user.accessToken).then(status => {
      status === 200 && finished.setData([...finished.data, id]);
    });
  };
  const removeFinished = () => {
    removeFromBookshelve("FINISHED", id, user.accessToken).then(status => {
      if (status === 200) {
        const filteredData = finished.data.filter(e => e !== id);
        finished.setData(filteredData);
      }
    });
  };
  return isFinished ? (
    <button
      className="finishedButton remove"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={removeFinished}
    >
      {hovered ? <BsFillXCircleFill /> : <BsCheckCircleFill />}
    </button>
  ) : (
    <button
      className="finishedButton"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addFinished}
    >
      {hovered ? <BsCheckCircleFill /> : <BsCheckCircle />}
    </button>
  );
};

export default FinishedButton;
