import React from "react";

const WithParameter = (props) => {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota <strong>{props.nota} </strong>e está <strong>{status}!</strong>
      </p>
    </div>
  );
};

export default WithParameter;
