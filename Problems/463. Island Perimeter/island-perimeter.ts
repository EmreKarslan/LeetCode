//Solution 1: 124ms 59.31 MB
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        let currentPerimeter = 4;
        if (row > 0 && grid[row - 1][col]) currentPerimeter--;
        if (row < grid.length - 1 && grid[row + 1][col]) currentPerimeter--;
        if (col > 0 && grid[row][col - 1]) currentPerimeter--;
        if (col < grid[0].length - 1 && grid[row][col + 1]) currentPerimeter--;

        perimeter += currentPerimeter;
      }
    }
  }

  return perimeter;
}

//Solution 2: 121ms 59.73 MB
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  function isWater(row: number, col: number): number {
    if (row < 0 || row >= grid.length) return 1;
    if (col < 0 || col >= grid[0].length) return 1;
    if (grid[row][col] === 0) return 1;
    return 0;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += isWater(i - 1, j); // top
        perimeter += isWater(i + 1, j); // bottom
        perimeter += isWater(i, j - 1); // left
        perimeter += isWater(i, j + 1); // right
      }
    }
  }

  return perimeter;
}

//Solution 3: 115ms 58.75 MB
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        if (i === grid.length - 1 || grid[i + 1][j] === 0) perimeter++;
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        if (j === grid[0].length - 1 || grid[i][j + 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
}

//Solution 4: 110ms 58.65 MB
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
        if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
      }
    }
  }

  return perimeter;
}
