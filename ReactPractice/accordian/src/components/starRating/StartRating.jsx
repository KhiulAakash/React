import React, { useState } from "react";
import "./style.css";

export default function StarRating() {
  const [checked, setChecked] = useState(null);
  const [rating, setRating] = useState(null);
  const [hovered, setHovered] = useState(null);

  function handleStarClick(index) {
    setChecked((prev) => (prev === index ? null : index));
    setRating(index + 1);
  }

  function handleStarHover(index) {
    setHovered(index + 1);
  }

  function handleStarLeave() {
    setHovered(null);
  }

  return (
    <div className="body">
      <div className="star">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value, index) => (
            <span
              key={index}
              onClick={() => handleStarClick(index)}
              onMouseMove={() => handleStarHover(index)}
              onMouseLeave={handleStarLeave}
              className={`fa fa-star ${
                (hovered !== null && index < hovered) ||
                (checked !== null && index <= checked)
                  ? "checked"
                  : ""
              }`}
            ></span>
          ))}
        </div>
        {checked !== null && <p>{rating} Rating</p>}
      </div>
    </div>
  );
}
