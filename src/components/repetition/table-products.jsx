import React from "react";
import Products from "../../data/products";
import "./table-products.css";

const TableProducts = (props) => {
  const getLinhas = () => {
    return Products.map((product, i) => {
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={product.id}>
          <td>{product.id}</td>
          <td>{product.nome}</td>
          <td>R$ {product.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  };
  return (
    <div className="tableProducts">
      <table style={{ border: 1 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};

export default TableProducts;
