import React from "react";
import First from "./components/basics/first";
import WithParameter from "./components/basics/with-props";
import Card from "./components/layout/card";
import Random from "./components/basics/random";
import "./app.css";
import Family from "./components/basics/family";
import FamilyMember from "./components/basics/family-member";
import ListStudents from "./components/repetition/list-students";
import TableProducts from "./components/repetition/table-products";
import EvenOrOdd from "./components/condition/even-or-odd";
import UserInfo from "./components/condition/user-info";
import DirectFather from "./components/comunication/direct-father";
import IndirectFather from "./components/comunication/indirect-father";
import Input from "./components/form/input";

// React Dom
//reactDom.render("Olá React", document.getElementById("root"))

// Component JSX
/* reactDom.render(
  <div>
    <strong>Olá React</strong>
  </div>,
  document.getElementById("root")
);
 */

/* reactDom.render(
  <div>
    <First></First>
    <WithParameter titulo="Segundo componente" aluno="Pedro Silva" nota={9.3} />
  </div>,
  document.getElementById("root")
); */

const App = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="#10 - Controlled component(Input)" color="#E45F56">
          <Input />
        </Card>
        <Card titulo="#09 - Indirect comunication" color="#59323C">
          <IndirectFather />
        </Card>
        <Card titulo="#08 - Direct comunication" color="#59323C">
          <DirectFather />
        </Card>
        <Card titulo="#07 - EvenOrOdd" color="#982395">
          <EvenOrOdd number={20} />
          <UserInfo usuario={{ nome: "Fernando" }}></UserInfo>
          <UserInfo></UserInfo>
        </Card>
        <Card titulo="#06 - TableProducts" color="#3A9AD9">
          <TableProducts />
        </Card>
        <Card titulo="#05 - ListStudents" color="#FF4C65">
          <ListStudents />
        </Card>
        <Card titulo="#04 - Family" color="#00C8F8">
          <Family sobrenome="Ferreira">
            <FamilyMember nome="Pedro" />
            <FamilyMember nome="Ana" />
            <FamilyMember nome="Gustavo" />
          </Family>
        </Card>
        <Card titulo="#03 - Random" color="#FA6900">
          <Random min={1} max={30} />
        </Card>
        <Card titulo="#02 - WithParameter" color="#E94C6F">
          <WithParameter
            titulo="Segundo componente"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>
        <Card titulo="#01 - First" color="#E8B71A">
          <First></First>
        </Card>
      </div>
    </div>
  );
};

export default App;
