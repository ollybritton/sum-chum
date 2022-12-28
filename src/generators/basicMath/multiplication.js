import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(1, args.maxOperand);
  let b = randomInt(1, args.maxOperand);
  let c = a * b;

  return new Exercise(
    `What is $${a} \\times ${b}$?`,
    `What is ${a} times ${b}?`,
    `$${c}$`,
    `${c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Multiplication",
  "Practice multiplying two numbers together.",
  generator,
  [
    new Argument("maxOperand", "Max Operand", 1, 100, 20),
    new Argument("answerSaidDelay", "Time beafore saying answer", 0, 120, 10),
  ]
);
