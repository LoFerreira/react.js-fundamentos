import React from "react";

const FamilyMember = (props) => {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
};

export default FamilyMember;
