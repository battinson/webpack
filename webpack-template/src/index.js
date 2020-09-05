// Styles
import "./styles/index.scss";

// React
import React from "react";
import { render } from "react-dom";
import { App } from "./react";

render(<App />, document.getElementById("root"));

class Point {
  x = 10;
  y = 10;
}

const p = new Point();
console.log(p);
