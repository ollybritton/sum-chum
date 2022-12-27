import React, { Component } from "react";
import Header from "./components/Header";
import Addition from "./generators/basicMath/addition";
import Multiplication from "./generators/basicMath/multiplication";
import Study from "./Study";
import EasySpeech from "easy-speech";
import Subtraction from "./generators/basicMath/subtraction";
import Division from "./generators/basicMath/division";
import NimberAddition from "./generators/unusual/nimber-addition";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: [
        { generator: Addition, weight: 5 },
        { generator: Multiplication, weight: 5 },
        { generator: Subtraction, weight: 5 },
        { generator: Division, weight: 5 },
        { generator: NimberAddition, weight: 5 },
      ],
    };
  }

  componentDidMount() {
    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
      .then(() => console.debug("Speech synthesis loaded."))
      .catch((e) => console.error(e));

    EasySpeech.defaults({
      voice: EasySpeech.voices().find((voice) => voice.lang.startsWith("en")),
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Study config={this.state.config} />
      </div>
    );
  }
}

export default App;
