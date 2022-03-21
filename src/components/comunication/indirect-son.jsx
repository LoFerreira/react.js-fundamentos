import React from "react";

const IndirectSon = (props) => {
  const min = 50;
  const max = 70;
  const randomAge = () => parseInt(Math.random() * (max - min) + min);
  const randomNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => {
          props.onClick("João", randomAge, randomNerd);
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};

export default IndirectSon;
