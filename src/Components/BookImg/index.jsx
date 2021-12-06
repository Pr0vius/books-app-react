import React, { useState } from "react";
import Spinner from "../Spinner";
import "./style.css";

const BookImg = ({ img, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="image-container">
      {img ? (
        <>
          <Spinner style={loading ? {} : { display: "none" }} />
          <img
            src={img}
            alt={alt}
            className="book-card__image"
            onLoad={() => setLoading(false)}
            style={loading ? { display: "none" } : {}}
          />
        </>
      ) : (
        <span>No image available</span>
      )}
    </div>
  );
};

export default BookImg;
