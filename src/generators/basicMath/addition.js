import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(0, args.maxOperand);
  let b = randomInt(0, args.maxOperand);
  let c = a + b;

  return new Exercise(
    `What is $${a} + ${b}$?`,
    `What is ${a} plus ${b}?`,
    `$${c}$`,
    `${c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Addition",
  "Practice adding two numbers together.",
  generator,
  [
    new Argument("maxOperand", "Max Addend", 0, 10_000, 500),
    new Argument("answerSaidDelay", "Time before saying answer", 0, 120, 15),
  ]
);
