import React from "react";
import CardItems from "./CardItems";
import "./Card.css";
import img1 from "../assets/images/img-9.jpg";

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
