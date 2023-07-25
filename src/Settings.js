import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import EasySpeech from "easy-speech";
import { React, Component, cloneElement } from "react";
import optionsData from "./options.js";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voices: EasySpeech.voices(),
    };

    this.updateShouldRepeatQuestion =
      this.updateShouldRepeatQuestion.bind(this);
    this.updateRepeatQuestionDelay = this.updateRepeatQuestionDelay.bind(this);
    this.updateShouldRepeatAnswer = this.updateShouldRepeatAnswer.bind(this);
    this.updateRepeatAnswerDelay = this.updateRepeatAnswerDelay.bind(this);
    this.updateTimeBetweenQuestions =
      this.updateTimeBetweenQuestions.bind(this);
    this.updateVoice = this.updateVoice.bind(this);

    this.removeGenerator = this.removeGenerator.bind(this);
  }

  updateShouldRepeatQuestion() {
    this.props.updateSetting(
      "shouldRepeatQuestion",
      !this.props.settings.shouldRepeatQuestion
    );
  }

  updateRepeatQuestionDelay(e) {
    this.props.updateSetting("repeatQuestionDelay", e.target.value);
  }

  updateShouldRepeatAnswer() {
    this.props.updateSetting(
      "shouldRepeatAnswer",
      !this.props.settings.shouldRepeatAnswer
    );
  }

  updateRepeatAnswerDelay(e) {
    this.props.updateSetting("repeatAnswerDelay", e.target.value);
  }

  updateTimeBetweenQuestions(e) {
    this.props.updateSetting("timeBetweenQuestions", e.target.value);
  }

  updateVoice(e) {
    this.props.updateSetting(
      "voice",
      this.state.voices.find((voice) => voice.voiceURI == e.target.value)
    );
  }

  removeGenerator(index) {
    let func = (e) => {
      this.props.updateSetting(
        "generators",
        this.props.settings.generators.filter((_, i) => i != index)
      );
    };

    func.bind(this);

    return func;
  }

  addGenerator(generator) {
    let i = this.props.settings.generators.findIndex(
      (g) => g.generator.title == generator.title
    );

    if (i >= 0) {
      // this.props.settings.generators[i].weight += 5;
    } else {
      this.props.updateSetting(
        "generators",
        this.props.settings.generators.concat({
          generator: generator,
          weight: 5,
        })
      );
    }
  }

  render() {
    let voiceOptions = this.state.voices.map((voice) => {
      return (
        <option
          value={voice.voiceURI}
          selected={voice.voiceURI == this.props.settings.voice.voiceURI}
        >
          {voice.name} ({voice.lang})
        </option>
      );
    });

    let generatorOptions = [];

    for (let key in optionsData) {
      let category = optionsData[key];
      let categoryEl = [];

      for (let i in category) {
        let generator = category[i];
        categoryEl.push(
          <div className="ba container pa2 mb2">
            <h5 className="mt0" key={`${key}${generator.title}`}>
              {generator.title}
            </h5>
            <p>{generator.description}</p>
            <button onClick={(e) => this.addGenerator(generator)}>Add</button>
          </div>
        );
      }

      generatorOptions.push(
        <div key={key}>
          <h4>{key}</h4>
          {categoryEl}
        </div>
      );
    }

    let currentOptions = [];

    for (let i = 0; i < this.props.settings.generators.length; i++) {
      let generator = this.props.settings.generators[i].generator;
      let weight = this.props.settings.generators[i].weight;

      currentOptions.push(
        <div
          className="ba pa2 mb2"
          key={this.props.settings.generators[i].title}
        >
          <strong>{generator.title}</strong>, weight {weight}
          <br />
          <button onClick={this.removeGenerator(i)}>Remove</button>
        </div>
      );
    }

    return (
      <div className="Settings">
        <h1>Settings ⚙️</h1>

        <input
          type="checkbox"
          checked={this.props.settings.shouldRepeatQuestion}
          onChange={this.updateShouldRepeatQuestion}
          id="Settings-shouldRepeatQuestion"
        />
        <label className="di" htmlFor="Settings-shouldRepeatQuestion">
          {" "}
          Should repeat question:{" "}
          {this.props.settings.shouldRepeatQuestion ? "yes" : "no"}
        </label>

        <label className="db" htmlFor="Settings-repeatQuestionDelay">
          Repeat question after: {this.props.settings.repeatQuestionDelay}s
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={this.props.settings.repeatQuestionDelay}
          onChange={this.updateRepeatQuestionDelay}
          id="Settings-repeatQuestionDelay"
          disabled={!this.props.settings.shouldRepeatQuestion}
        />

        <br />
        <br />

        <input
          type="checkbox"
          checked={this.props.settings.shouldRepeatAnswer}
          onChange={this.updateShouldRepeatAnswer}
          id="Settings-shouldRepeatAnswer"
        />
        <label className="di" htmlFor="Settings-shouldRepeatAnswer">
          {" "}
          Should repeat answer:{" "}
          {this.props.settings.updateShouldRepeatAnswer ? "yes" : "no"}
        </label>

        <label className="db" htmlFor="Settings-repeatAnswerDelay">
          Repeat answer after: {this.props.settings.repeatAnswerDelay}s
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={this.props.settings.repeatAnswerDelay}
          onChange={this.updateRepeatAnswerDelay}
          id="Settings-repeatAnswerDelay"
          disabled={!this.props.settings.shouldRepeatAnswer}
        />

        <br />
        <br />

        <label className="db" htmlFor="Settings-timeBetweenQuestions">
          Time between questions: {this.props.settings.timeBetweenQuestions}s
        </label>
        <input
          type="range"
          min="0"
          max="180"
          value={this.props.settings.timeBetweenQuestions}
          onChange={this.updateTimeBetweenQuestions}
          id="Settings-timeBetweenQuestions"
          disabled={!this.props.settings.timeBetweenQuestions}
        />

        <br />
        <br />

        <label htmlFor="Settings-voice">Voice: </label>
        <select id="Settings-voice" onChange={this.updateVoice}>
          {voiceOptions}
        </select>

        <h1>Generators 🤖</h1>
        <h2>Current</h2>
        {currentOptions}

        <h2>Options</h2>
        {generatorOptions}
      </div>
    );
  }
}
