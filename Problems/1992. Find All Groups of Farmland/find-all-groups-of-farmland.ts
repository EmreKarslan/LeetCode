//Solution 1: 253ms 84.70 MB
function findFarmland(land: number[][]): number[][] {
  const landRowLength = land.length;
  const landColLength = land[0].length;
  let topLeft: [number, number] = [-1, -1];
  let bottomRight: [number, number] = [-1, -1];
  function clearFarmland(row: number, col: number) {
    if (row >= landRowLength || col >= landColLength || land[row][col] === 0)
      return;
    bottomRight[0] = Math.max(bottomRight[0], row);
    bottomRight[1] = Math.max(bottomRight[1], col);
    land[row][col] = 0;
    clearFarmland(row + 1, col);
    clearFarmland(row, col + 1);
  }

  const answer = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 1) {
        topLeft[0] = i;
        topLeft[1] = j;
        bottomRight[0] = i;
        bottomRight[1] = j;
        clearFarmland(i, j);
        answer.push([...topLeft, ...bottomRight]);
      }
    }
  }

  return answer;
}

//Solution 2: 230ms 86.04 MB
let nr: number = 0;
let nc: number = 0;

function findFarmlandCoordinates(
  row: number,
  col: number,
  land: number[][]
): number[] {
  let coordinates: number[] = [row, col];
  let rbr: number = row;
  let rbc: number = col;

  while (rbr < nr && land[rbr][col] === 1) rbr++;
  while (rbc < nc && land[row][rbc] === 1) rbc++;

  coordinates[2] = rbr - 1;
  coordinates[3] = rbc - 1;

  for (let i = row; i < rbr; i++) {
    for (let j = col; j < rbc; j++) {
      land[i][j] = 0;
    }
  }

  return coordinates;
}

function findFarmland(land: number[][]): number[][] {
  nr = land.length;
  nc = land[0].length;
  let farmlandsList: number[][] = [];

  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (land[i][j] === 1) {
        farmlandsList.push(findFarmlandCoordinates(i, j, land));
      }
    }
  }

  return farmlandsList;
}

//Solution 3: 183ms 75.02 MB
function findFarmland(land: number[][]): number[][] {
  const rows = land.length;
  const cols = land[0].length;
  let bottomRightX = -1;
  let bottomRightY = -1;

  function clearFarmland(row: number, col: number) {
    if (row >= rows || col >= cols || land[row][col] === 0) return;
    bottomRightX = Math.max(bottomRightX, row);
    bottomRightY = Math.max(bottomRightY, col);
    land[row][col] = 0;
    clearFarmland(row + 1, col);
    clearFarmland(row, col + 1);
  }

  const farmlands: number[][] = [];
  for (let topLeftX = 0; topLeftX < rows; topLeftX++) {
    for (let topLeftY = 0; topLeftY < cols; topLeftY++) {
      if (land[topLeftX][topLeftY] === 1) {
        bottomRightX = topLeftX;
        bottomRightY = topLeftY;
        clearFarmland(topLeftX, topLeftY);
        farmlands.push([topLeftX, topLeftY, bottomRightX, bottomRightY]);
      }
    }
  }

  return farmlands;
}
