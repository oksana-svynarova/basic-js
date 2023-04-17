//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("").map(Number);
  let arrMax = Math.max(...arr.map((el, i) => {
    let elMax = arr.slice();
    elMax.splice(i, 1);
    return +elMax.join("");
  }));
  return arrMax;
}

module.exports = {
  deleteDigit
};
