import Addition from "./generators/basicMath/addition.js";
import Division from "./generators/basicMath/division";
import Multiplication from "./generators/basicMath/multiplication";
import Subtraction from "./generators/basicMath/subtraction";

import BitwiseXor from "./generators/unusual/bitwise-xor";
import DayOfTheWeek from "./generators/unusual/day-of-the-week.js";

export default {
  "Basic Math": [Addition, Subtraction, Multiplication, Division],
  Unusual: [BitwiseXor, DayOfTheWeek],
};
