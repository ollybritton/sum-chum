export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomChoice(xs) {
  return xs[randomInt(0, xs.length - 1)];
}

export function weightedRandomChoice(xs, getWeight) {
  let pairs = xs.map((x) => [x, getWeight(x)]);

  let total = pairs.reduce((acc, x) => {
    return acc + x[1];
  }, 0);

  let runningTotal = 0;
  let random = Math.random();

  for (let i = 0; i < pairs.length; i++) {
    if (random <= pairs[i][1] / total + runningTotal) {
      return pairs[i][0];
    } else {
      runningTotal += pairs[i][1] / total;
    }
  }
}

export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
