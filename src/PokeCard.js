import React from "react";
import "./PokeCard.css";

const PokeCard = ({ features }) => {
  return (
    <div className="PokeCard" key={features.id}>
      <h6>Name: {features.name}</h6>
      <img src={features.source} alt="PokemonPic" />
      <div>Type: {features.type}</div>
      <div className="PokeCard-experience">
        Experience: {features.base_experience}
      </div>
    </div>
  );
};

export default PokeCard;
