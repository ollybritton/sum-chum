import { Generator, Argument, Exercise } from "../../generator";
import { randomInt } from "../../utils";

function formatDate(date) {
  const days = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDate() - 1];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

function dayOfWeek(date) {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return names[date.getDay()];
}

function generator(args) {
  let startDate = new Date(args.minYear, 0);
  let endDate = new Date(args.maxYear, 0);

  let randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  let formatted = formatDate(randomDate);
  let answer = dayOfWeek(randomDate);

  return new Exercise(
    `What day of the week was ${formatted}?`, // E.g. 21st July, 2000.
    `What day of the week was ${formatted}?`,
    `${answer}`,
    `${formatted} was a ${answer}`,
    args.answerSaidDelay
  );
}

export default new Generator(
  "Determine the day of the week",
  "Practice finding the day of the week corresponding to a given date.",
  generator,
  [
    new Argument("minYear", "Minimum year", 1, 300, 1800),
    new Argument("maxYear", "Maximum year", 1, 300, new Date().getFullYear()),
    new Argument("answerSaidDelay", "Time before saying answer", 0, 120, 20),
  ]
);
