//Solution 1: 63ms 44.12 MB
function rotate(matrix: number[][]): void {
  const rotatedMatrix: number[][] = [];

  for (let col = 0; col < matrix.length; col++) {
    rotatedMatrix.push([]);
    for (let row = matrix.length - 1; row >= 0; row--) {
      rotatedMatrix[col].push(matrix[row][col]);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      matrix[row][col] = rotatedMatrix[row][col];
    }
  }
}

//Solution 2: 35ms 44.84 MB
function rotate(matrix: number[][]): void {
  const matrixSize = matrix.length;

  for (
    let currentLayer = 0;
    currentLayer < Math.floor(matrixSize / 2);
    currentLayer++
  ) {
    const lastInLayer = matrixSize - 1 - currentLayer;

    for (let i = currentLayer; i < lastInLayer; i++) {
      const offset = i - currentLayer;
      const topValue = matrix[currentLayer][i];

      matrix[currentLayer][i] = matrix[lastInLayer - offset][currentLayer];
      matrix[lastInLayer - offset][currentLayer] =
        matrix[lastInLayer][lastInLayer - offset];
      matrix[lastInLayer][lastInLayer - offset] = matrix[i][lastInLayer];
      matrix[i][lastInLayer] = topValue;
    }
  }
}
