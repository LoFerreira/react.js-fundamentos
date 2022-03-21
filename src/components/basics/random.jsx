const Random = (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor aleatório:</h2>
      <p>
        <strong>Valor mínimo: {min}</strong>
      </p>
      <p>
        <strong>Valor máximo: {max}</strong>
      </p>
      <p>
        <strong>Valor escolhido: {random}</strong>
      </p>
    </div>
  );
};

export default Random;
