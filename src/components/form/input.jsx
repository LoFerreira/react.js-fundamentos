import React from "react";
import "./input.css";

const Input = () => {
  const [value, setValue] = React.useState("Inicial");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input">
      <h2>Teste: {value}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={value} onChange={onChange} />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};

export default Input;
