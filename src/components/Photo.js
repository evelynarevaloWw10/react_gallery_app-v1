
import React from "react";

//creates each photo
const Photo = (props) => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  )
};

export default Photo;

//https://teamtreehouse.com/library/displaying-the-data