//Solution 1: 4ms 49.48 MB
class Solution {
  private static final int[][] DIRECTIONS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

  private void clearIsland(int row, int col, char[][] grid) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length
        || grid[row][col] == '0') {
      return;
    }

    grid[row][col] = '0';

    for (int[] direction : DIRECTIONS) {
      clearIsland(row + direction[0], col + direction[1], grid);
    }
  }

  public int numIslands(char[][] grid) {
    int islandCount = 0;

    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == '1') {
          clearIsland(i, j, grid);
          islandCount++;
        }
      }
    }

    return islandCount;
  }
}

//Solution 2: 3ms 49.02 MB
class Solution {
  public void clearIsland(char[][] grid, int row, int col) {
    if (row < 0 || row == grid.length || col < 0 || col == grid[0].length
        || grid[row][col] == '0')
      return;

    grid[row][col] = '0';
    clearIsland(grid, row - 1, col); // top
    clearIsland(grid, row, col - 1); // left
    clearIsland(grid, row + 1, col); // bottom
    clearIsland(grid, row, col + 1); // right

    return;
  }

  public int numIslands(char[][] grid) {
    int islandCount = 0;

    for (int row = 0; row < grid.length; row++) {
      for (int col = 0; col < grid[0].length; col++) {
        if (grid[row][col] == '1') {
          clearIsland(grid, row, col);
          islandCount++;
        }
      }
    }

    return islandCount;
  }
}

//Solution 3: 2ms 49.38 MB
class Solution {
  int nr = 0;
  int nc = 0;

  public void clearIsland(char[][] grid, int row, int col) {
    if (row < 0 || row == nr || col < 0 || col == nc || grid[row][col] == '0')
      return;

    grid[row][col] = '0';
    clearIsland(grid, row - 1, col); // top
    clearIsland(grid, row, col - 1); // left
    clearIsland(grid, row + 1, col); // bottom
    clearIsland(grid, row, col + 1); // right

    return;
  }

  public int numIslands(char[][] grid) {
    int islandCount = 0;
    nr = grid.length;
    nc = grid[0].length;

    for (int row = 0; row < nr; row++) {
      for (int col = 0; col < nc; col++) {
        if (grid[row][col] == '1') {
          clearIsland(grid, row, col);
          islandCount++;
        }
      }
    }

    return islandCount;
  }
}