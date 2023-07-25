import React, { Component } from "react";
import Header from "./components/Header";
import Addition from "./generators/basicMath/addition";
import Multiplication from "./generators/basicMath/multiplication";
import Study from "./Study";
import EasySpeech from "easy-speech";
import Subtraction from "./generators/basicMath/subtraction";
import Division from "./generators/basicMath/division";
import BitwiseXOR from "./generators/unusual/bitwise-xor";
import Settings from "./Settings";
import DayOfTheWeek from "./generators/unusual/day-of-the-week";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        generators: [
          { generator: Addition, weight: 5 },
          { generator: Multiplication, weight: 5 },
          { generator: Subtraction, weight: 5 },
          { generator: Division, weight: 5 },
          { generator: BitwiseXOR, weight: 5 },
          { generator: DayOfTheWeek, weight: 5 },
        ],
        shouldRepeatQuestion: true,
        shouldRepeatAnswer: false,
        repeatQuestionDelay: 2,
        repeatAnswerDelay: 2,
        timeBetweenQuestions: 10,
        voice: window.speechSynthesis.getVoices().find((voice) => {
          return voice.name.startsWith("Daniel") && voice.lang == "en-GB";
        }),
      },
    };

    console.log(this.state.settings.voice);

    this.updateSetting = this.updateSetting.bind(this);
  }

  updateSetting(key, value) {
    let settings = { ...this.state.settings };
    settings[key] = value;

    this.setState({ settings: settings });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App baskerville pa3">
        <Header />
        <Settings
          settings={this.state.settings}
          updateSetting={this.updateSetting}
        />
        <Study settings={this.state.settings} />
      </div>
    );
  }
}

export default App;
