import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(0, args.maxOperand);
  let b = randomInt(0, args.maxOperand);
  let c = a ^ b;

  return new Exercise(
    `What is $${a} \\oplus ${b}$?`,
    `What is the nimber addition of ${a} plus ${b}?`,
    `$${c}$`,
    `${c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Nimber Addition",
  "The addition of nimbers, which are special in combinatorial game theory. To find the result, XOR both numbers together.",
  generator,
  [
    new Argument("maxOperand", "Max Addend", 0, 100, 15),
    new Argument("answerSaidDelay", "Time before saying answer", 0, 120, 20),
  ]
);
