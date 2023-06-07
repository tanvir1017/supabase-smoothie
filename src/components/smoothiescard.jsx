import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const SmoothiesCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <AiFillEdit />
        </Link>
      </div>
    </div>
  );
};

export default SmoothiesCard;
