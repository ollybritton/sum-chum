import React, { Component } from "react";
import { weightedRandomChoice, sleep } from "./utils";
import EasySpeech from "easy-speech";

export default class Study extends Component {
  constructor(props) {
    super(props);

    this.state = { shouldLoop: false };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  async ask() {
    EasySpeech.defaults({ voice: this.props.settings.voice });

    let generator = weightedRandomChoice(
      this.props.settings.generators,
      (x) => x.weight
    ).generator;
    let args = Object.assign(
      {},
      ...generator.args.map((x) => ({ [x.name]: x.default }))
    );
    let exercise = generator.generator(args);

    await EasySpeech.speak({ text: exercise.questionSaid });

    if (this.props.settings.shouldRepeatQuestion) {
      await sleep(this.props.settings.repeatQuestionDelay * 1000);
      await EasySpeech.speak({ text: exercise.questionSaid });
    }

    await sleep(exercise.answerSaidDelay * 1000);
    await EasySpeech.speak({ text: exercise.answerSaid });

    if (this.props.settings.shouldRepeatAnswer) {
      await sleep(this.props.settings.repeatAnswerDelay * 1000);
      await EasySpeech.speak({ text: exercise.answerSaid });
    }
  }

  async loop() {
    while (this.state.shouldLoop) {
      await this.ask();
      await sleep(this.props.settings.timeBetweenQuestions * 1000);
    }
  }

  start() {
    this.setState({ shouldLoop: true }, this.loop);
  }

  stop() {
    this.setState({ shouldLoop: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <hr />
        <p>Looping: {this.state.shouldLoop ? "yes" : "no"}</p>
      </div>
    );
  }
}
