import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(0, args.maxOperand);
  let b = randomInt(0, args.maxOperand);
  let c = a - b;

  return new Exercise(
    `What is $${a} - ${b}$?`,
    `What is ${a} minus ${b}?`,
    `$${c}$`,
    c >= 0 ? `${c}` : `minus ${-c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Subtraction",
  "Practice subtracting two numbers.",
  generator,
  [
    new Argument("maxOperand", "Max Operand", 1, 10_000, 200),
    new Argument("answerSaidDelay", "Time before saying answer", 0, 120, 10),
  ]
);
