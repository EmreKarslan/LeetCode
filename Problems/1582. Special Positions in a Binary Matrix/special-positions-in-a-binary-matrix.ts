//Solution 1: 56ms 45.4 MB
function numSpecial(mat: number[][]): number {
  const rowCount = new Array(mat.length).fill(0);
  const colCount = new Array(mat[0].length).fill(0);
  let count = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 1) {
        rowCount[row]++;
        colCount[col]++;
      }
    }
  }

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 1 && rowCount[row] === 1 && colCount[col] === 1) {
        count++;
      }
    }
  }

  return count;
}
