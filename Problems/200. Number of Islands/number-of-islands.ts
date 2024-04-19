//Solution 1: 71ms 53.14 MB
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function clearIsland(x: number, y: number, grid: string[][]): void {
  const xSize = grid.length;
  const ySize = grid[0].length;

  if (x >= xSize || x < 0 || y >= ySize || y < 0 || grid[x][y] === "0") {
    return;
  }

  grid[x][y] = "0"; // Mark current cell as visited

  for (const direction of directions) {
    clearIsland(x + direction[0], y + direction[1], grid);
  }
}

function numIslands(grid: string[][]): number {
  const xSize = grid.length;
  const ySize = grid[0].length;

  let islands = 0;

  for (let i = 0; i < xSize; i++) {
    for (let j = 0; j < ySize; j++) {
      if (grid[i][j] === "1") {
        clearIsland(i, j, grid);
        islands++;
      }
    }
  }

  return islands;
}

//Solution 2: 65ms 53.46 MB
function numIslands(grid: string[][]): number {
  const xSize = grid.length;
  const ySize = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let islands = 0;

  function clearIsland(x: number, y: number): void {
    if (x < 0 || x >= xSize || y < 0 || y >= ySize || grid[x][y] === "0") {
      return;
    }

    grid[x][y] = "0";

    for (const direction of directions) {
      clearIsland(x + direction[0], y + direction[1]);
    }
  }

  for (let i = 0; i < xSize; i++) {
    for (let j = 0; j < ySize; j++) {
      if (grid[i][j] === "1") {
        clearIsland(i, j);
        islands++;
      }
    }
  }

  return islands;
}

//Solution 3: 55ms 52.88 MB
function numIslands(grid: string[][]): number {
  const xSize = grid.length;
  const ySize = grid[0].length;

  let islands = 0;

  function clearIsland(x: number, y: number): void {
    if (x < 0 || x >= xSize || y < 0 || y >= ySize || grid[x][y] === "0") {
      return;
    }

    grid[x][y] = "0";

    clearIsland(x + 1, y);
    clearIsland(x - 1, y);
    clearIsland(x, y + 1);
    clearIsland(x, y - 1);
  }

  for (let i = 0; i < xSize; i++) {
    for (let j = 0; j < ySize; j++) {
      if (grid[i][j] === "1") {
        clearIsland(i, j);
        islands++;
      }
    }
  }

  return islands;
}
