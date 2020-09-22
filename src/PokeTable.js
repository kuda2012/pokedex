import React from "react";
import "./PokeTable.css";
import PokeCard from "./PokeCard";
import PokeDex from "./PokeDex";

const PokeTable = () => {
  return (
    <div className="PokeTable">
      {PokeDex.map((pokemon) => (
        <PokeCard key={pokemon.id} features={pokemon} />
      ))}
    </div>
  );
};

export default PokeTable;
