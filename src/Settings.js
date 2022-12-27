import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import EasySpeech from "easy-speech";
import { React, Component, cloneElement } from "react";

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
  }

  updateShouldRepeatQuestion() {
    this.props.updateSetting(
      "shouldRepeatQuestion",
      !this.props.settings.shouldRepeatQuestion
    );
  }

  updateRepeatQuestionDelay(e) {
    console.log(e);
    this.props.updateSetting("repeatQuestionDelay", e.target.value);
  }

  updateShouldRepeatAnswer() {
    this.props.updateSetting(
      "shouldRepeatAnswer",
      !this.props.settings.shouldRepeatAnswer
    );
  }

  updateRepeatAnswerDelay(e) {
    console.log(e);
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

  render() {
    let voiceOptions = this.state.voices.map((voice) => {
      return (
        <option value={voice.voiceURI}>
          {voice.name} ({voice.lang})
        </option>
      );
    });

    return (
      <div className="Settings">
        <h1>Settings</h1>

        <input
          type="checkbox"
          checked={this.props.settings.shouldRepeatQuestion}
          onChange={this.updateShouldRepeatQuestion}
          id="Settings-shouldRepeatQuestion"
        />
        <label htmlFor="Settings-shouldRepeatQuestion">
          Should repeat question:{" "}
          {this.props.settings.shouldRepeatQuestion ? "yes" : "no"}
        </label>

        <br />

        <input
          type="range"
          min="0"
          max="10"
          value={this.props.settings.repeatQuestionDelay}
          onChange={this.updateRepeatQuestionDelay}
          id="Settings-repeatQuestionDelay"
          disabled={!this.props.settings.shouldRepeatQuestion}
        />
        <label htmlFor="Settings-repeatQuestionDelay">
          Repeat question after: {this.props.settings.repeatQuestionDelay}s
        </label>

        <br />

        <input
          type="checkbox"
          checked={this.props.settings.shouldRepeatAnswer}
          onChange={this.updateShouldRepeatAnswer}
          id="Settings-shouldRepeatAnswer"
        />
        <label htmlFor="Settings-shouldRepeatAnswer">
          Should repeat answer:{" "}
          {this.props.settings.updateShouldRepeatAnswer ? "yes" : "no"}
        </label>

        <br />

        <input
          type="range"
          min="0"
          max="10"
          value={this.props.settings.repeatAnswerDelay}
          onChange={this.updateRepeatAnswerDelay}
          id="Settings-repeatAnswerDelay"
          disabled={!this.props.settings.shouldRepeatAnswer}
        />
        <label htmlFor="Settings-repeatAnswerDelay">
          Repeat answer after: {this.props.settings.repeatAnswerDelay}s
        </label>

        <br />

        <input
          type="range"
          min="0"
          max="180"
          value={this.props.settings.timeBetweenQuestions}
          onChange={this.updateTimeBetweenQuestions}
          id="Settings-timeBetweenQuestions"
          disabled={!this.props.settings.timeBetweenQuestions}
        />
        <label htmlFor="Settings-timeBetweenQuestions">
          Time between questions: {this.props.settings.timeBetweenQuestions}s
        </label>

        <br />

        <label htmlFor="Settings-voice">Voice:</label>
        <select id="Settings-voice" onChange={this.updateVoice}>
          {voiceOptions}
        </select>
      </div>
    );
  }
}
