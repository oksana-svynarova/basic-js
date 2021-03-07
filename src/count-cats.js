const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;
    matrix.forEach(col => col.forEach( el => {
    el === '^^'
      ? countCats = countCats + 1
      : true
  } ));

  return countCats;
};
