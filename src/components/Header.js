import React from "react";
import logo from "../logo.jpg";
import "./Header.css";

export default () => (
  <header className="pa1 flex bb container cf helvetica align-center">
    <h1 className="f2 f1-l title fw1 baskerville">SumChum</h1>
    <div className="pl3 flex">
      <div className="ma2">Answer</div>
      <div className="ma2">Settings</div>
    </div>
  </header>
);
