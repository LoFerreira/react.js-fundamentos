import React from "react";

const DirectSon = (props) => {
  return (
    <div>
      <span>{props.nome} - </span>
      <span>{props.idade} anos - </span>
      <span>{props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
};

export default DirectSon;
