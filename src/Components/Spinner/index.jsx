import React from "react";
import './style.css'
const Spinner = (props) => {
  return (
    <div {...props} className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;