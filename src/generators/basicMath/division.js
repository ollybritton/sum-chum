import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function generator(args) {
  let a = randomInt(1, args.maxNumerator);
  let b = randomInt(1, args.maxDenominator);
  let c =
    Math.round((a / b) * 10 ** args.decimalPlaces) / 10 ** args.decimalPlaces;

  let plural =
    args.decimalPlaces == 0 || Math.abs(args.decimalPlaces) > 1 ? "s" : "";

  return new Exercise(
    `What is $${a} \\div ${b}$ to ${args.decimalPlaces} decimal place${plural}?`,
    `What is ${a} divided by ${b} to ${args.decimalPlaces} decimal place${plural}?`,
    `$${c}$`,
    `${c}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Division",
  "Practice dividing two numbers to an specified number of decimal places.",
  generator,
  [
    new Argument("maxNumerator", "Max Numerator", 1, 1_000, 200),
    new Argument("maxDenominator", "Max Denominator", 1, 1_000, 100),
    new Argument("decimalPlaces", "Decimal Places", 1, 5, 1),
    new Argument("answerSaidDelay", "Time beafore saying answer", 0, 120, 15),
  ]
);
