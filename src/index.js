import reactDom from "react-dom";
import App from "./app";
import "./index.css";

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

reactDom.render(<App />, document.getElementById("root"));
