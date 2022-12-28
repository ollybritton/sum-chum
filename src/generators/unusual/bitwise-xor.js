import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(0, args.maxOperand);
  let b = randomInt(0, args.maxOperand);
  let c = a ^ b;

  return new Exercise(
    `What is $${a} \\oplus ${b}$?`,
    `What is ${a} X or ${b}?`,
    `$${c}$`,
    `${c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Bitwise XOR",
  "Practice finding the bitwise XOR of two numbers. Useful if you're playing Nim.",
  generator,
  [
    new Argument("maxOperand", "Max Addend", 0, 100, 31),
    new Argument("answerSaidDelay", "Time before saying answer", 0, 120, 20),
  ]
);
