// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(nFloors) {
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    let currFloor =
      " ".repeat(nFloors - i) + "*".repeat(2 * i - 1) + " ".repeat(nFloors - i);
    result.push(currFloor);
  }
  return result;
}
