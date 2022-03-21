import React from "react";
import IndirectSon from "./indirect-son";

const IndirectFather = () => {
  const [nome, setNome] = React.useState("?");
  const [idade, setIdade] = React.useState(0);
  const [nerd, setNerd] = React.useState(false);

  const provideInformation = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  };

  return (
    <div>
      <div>
        {nome} - {idade} - {nerd ? "Verdadeiro" : "Falso"}
      </div>
      <IndirectSon onClick={provideInformation} />
    </div>
  );
};

export default IndirectFather;
