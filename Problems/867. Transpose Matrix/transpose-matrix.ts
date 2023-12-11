//Solution 1: 61ms 45.3 MB
function transpose(matrix: number[][]): number[][] {
  const result: number[][] = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const tempRow = [];

    for (let row = 0; row < matrix.length; row++) {
      tempRow.push(matrix[row][col]);
    }

    result.push(tempRow);
  }

  return result;
}

//Solution 2: 52ms 45.57 MB
function transpose(matrix: number[][]): number[][] {
  const result: number[][] = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const tempRow = matrix.map((row) => row[col]);
    result.push(tempRow);
  }

  return result;
}
