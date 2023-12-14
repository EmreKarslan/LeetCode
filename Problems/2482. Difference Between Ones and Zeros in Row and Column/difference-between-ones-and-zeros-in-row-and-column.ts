//Solution 1: 365ms 147.87 MB
function getDifferenceSum(arr: number[]): number {
  const sumOnes = arr.filter((num) => num === 1).length;
  return sumOnes - (arr.length - sumOnes);
}

function onesMinusZeros(grid: number[][]): number[][] {
  const rowCount = grid.length;
  const columnCount = grid[0].length;
  const columnValuesMap: { [key: number]: number } = {};
  const difference: number[][] = [];

  for (let i = 0; i < rowCount; i++) {
    const rowValues = getDifferenceSum(grid[i]);
    const tempRow: number[] = [];

    for (let j = 0; j < columnCount; j++) {
      if (!columnValuesMap[j]) {
        columnValuesMap[j] = getDifferenceSum(grid.map((row) => row[j]));
      }

      tempRow.push(rowValues + columnValuesMap[j]);
    }

    difference.push(tempRow);
  }

  return difference;
}

//Solution 2: 341ms 148.39 MB;
function getDifferenceSum(arr: number[]): number {
  return arr.reduce((difference, num) => difference + (num === 1 ? 1 : -1), 0);
}

function onesMinusZeros(grid: number[][]): number[][] {
  const rowCount = grid.length;
  const columnCount = grid[0].length;
  const columnValuesArray: number[] = new Array(columnCount).fill(
    Number.NEGATIVE_INFINITY
  );
  const difference: number[][] = [];

  for (let i = 0; i < rowCount; i++) {
    const rowValues = getDifferenceSum(grid[i]);
    const tempRow: number[] = [];

    for (let j = 0; j < columnCount; j++) {
      if (columnValuesArray[j] === Number.NEGATIVE_INFINITY) {
        columnValuesArray[j] = getDifferenceSum(grid.map((row) => row[j]));
      }

      tempRow.push(rowValues + columnValuesArray[j]);
    }

    difference.push(tempRow);
  }

  return difference;
}

//Solution 3: 270ms 99.00 MB
function onesMinusZeros(grid: number[][]): number[][] {
  const rowCount = grid.length;
  const columnCount = grid[0].length;

  const rowValues: number[] = new Array(rowCount).fill(0);
  const columnValues: number[] = new Array(columnCount).fill(0);

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      const valueOfCell = grid[i][j] === 1 ? 1 : -1;
      rowValues[i] += valueOfCell;
      columnValues[j] += valueOfCell;
    }
  }

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      grid[i][j] = rowValues[i] + columnValues[j];
    }
  }

  return grid;
}
