import React from "react";
import CardItems from "./CardItems";
import "./Card.css";
import img1 from "../assets/images/img-9.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-8.jpg";

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
            <CardItems
              src={img2}
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxary"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src={img4}
              text="Experience Football on the Top of the Himalayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItems
              src={img5}
              text="Ride through the Sahara Desert on a guided canel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
