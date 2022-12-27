export class Argument {
  constructor(name, displayName, min, max, defaultVal) {
    this.name = name;
    this.displayName = displayName;
    this.min = min;
    this.max = max;
    this.default = defaultVal;
  }
}

export class Generator {
  constructor(title, description, generator, args) {
    this.title = title;
    this.description = description;
    this.generator = generator;
    this.args = args;
  }
}

export class Exercise {
  constructor(
    questionDisplayed,
    questionSaid,
    answerDisplayed,
    answerSaid,
    answerSaidDelay
  ) {
    this.questionDisplayed = questionDisplayed;
    this.questionSaid = questionSaid;
    this.answerDisplayed = answerDisplayed;
    this.answerSaid = answerSaid;
    this.answerSaidDelay = answerSaidDelay;
  }
}
