import React from "react";
import "./Card.css";
const card = ({ name, email, id }) => {
  return (
    <div className="   tc  bg-light-green dib  br3 pa3  grow bw2 ma2 shadow-4">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}></img>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default card;
