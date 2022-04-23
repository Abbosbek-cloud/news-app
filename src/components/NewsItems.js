import React from "react";
import HotImage from "../assets/hot.png";
import SportImage from "../assets/sport.jpg";
import WorldImage from "../assets/world.jpg";

function NewsItems({ name, description, category, onDelete }) {
  let classNames;
  let imageSrc;

  switch (category) {
    case "Hot news":
      classNames = "bg-danger bg-gradient";
      imageSrc = HotImage;
      break;
    case "Sport news":
      classNames = "bg-primary bg-gradient";
      imageSrc = SportImage;
      break;
    case "World news":
      classNames = "bg-success bg-gradient";
      imageSrc = WorldImage;
      break;
    default:
      classNames = "bg-info bg-gradient";
  }
  return (
    <li className={`my-card ${classNames}`}>
      <div className="body-content">
        <h3 className="">{name}</h3>
        <p className="">{description}</p>
      </div>
      <img
        className=""
        style={{ objectFit: "cover" }}
        src={imageSrc}
        alt="NewsImage"
      />
      <span
        className="
              translate-middle
              badge
              border
              rounded-pill
              bg-light
      "
      >
        <button
          onClick={() => {
            onDelete();
          }}
          type="button"
          className="btn-close"
          aria-label="Close"
        >
          x
        </button>
      </span>
    </li>
  );
}

export default NewsItems;
