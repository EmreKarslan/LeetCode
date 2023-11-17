/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//Solution: 52ms 47 MB
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  let result = "";
  let currentRow = 0;
  const iteration = (numRows - 1) * 2;
  let currentIteration = iteration;
  let currentIndex = 0;

  while (currentRow < numRows) {
    result += s[currentIndex];
    currentIndex += currentIteration;

    if (currentIndex >= s.length) {
      currentRow++;

      if (currentRow > 0 && currentRow < numRows - 1) {
        currentIteration = iteration - currentRow * 2;
      } else {
        currentIteration = iteration;
      }

      currentIndex = currentRow;
    } else {
      if (currentRow > 0 && currentRow < numRows - 1) {
        currentIteration = Math.abs(iteration - currentIteration);
      }
    }
  }

  return result;
};
