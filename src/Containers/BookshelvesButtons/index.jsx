import React, { useContext } from "react";
import { bookshelveContext } from "../../context/bookshelves";
import FavoriteButton from "../../Components/FavoriteButton";
import ReadingButton from "../../Components/ReadingButton";
import FinishedButton from "../../Components/FinishedButton";
import ToReadButton from "../../Components/ToReadButton";
import "./style.css";
import { userContext } from "../../context/user";

const BookshelveButton = ({ id }) => {
  const { favorites, finished, reading, toRead } =
    useContext(bookshelveContext);
  const { user } = useContext(userContext);
  const isFavorite = favorites.data.includes(id);
  const isFinished = finished.data.includes(id);
  const isReading = reading.data.includes(id);
  const isPending = toRead.data.includes(id);

  return (
    user.auth && (
      <div className="bsBtnCont">
        <FavoriteButton id={id} isFavorite={isFavorite} />
        <ReadingButton id={id} isReading={isReading} />
        <ToReadButton id={id} isPending={isPending} />
        <FinishedButton id={id} isFinished={isFinished} />
      </div>
    )
  );
};

export default BookshelveButton;
