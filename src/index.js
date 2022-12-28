import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import EasySpeech from "easy-speech";

EasySpeech.init({ maxTimeout: 5000, interval: 250 })
  .then(() => console.debug("Speech synthesis loaded."))
  .catch((e) => console.error(e));

EasySpeech.defaults({
  voice: EasySpeech.voices().find((voice) => voice.lang.startsWith("en")),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
