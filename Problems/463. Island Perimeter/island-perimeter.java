//Solution 1: 6ms 45.59 MB
class Solution {
  public int islandPerimeter(int[][] grid) {
    int perimeter = 0;

    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          perimeter += isWater(grid, i - 1, j); // top
          perimeter += isWater(grid, i + 1, j); // bottom
          perimeter += isWater(grid, i, j - 1); // left
          perimeter += isWater(grid, i, j + 1); // right
        }
      }
    }

    return perimeter;
  }

  public int isWater(int[][] grid, int row, int col) {
    if (row < 0 || row >= grid.length)
      return 1;
    if (col < 0 || col >= grid[0].length)
      return 1;
    if (grid[row][col] == 0)
      return 1;

    return 0;
  }
}

//Solution 2: 5ms 45.96 MB
class Solution {
  public int islandPerimeter(int[][] grid) {
    int perimeter = 0;
    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          if (i == 0 || grid[i - 1][j] == 0) perimeter++;
          if (i == grid.length - 1 || grid[i + 1][j] == 0) perimeter++;
          if (j == 0 || grid[i][j - 1] == 0) perimeter++;
          if (j == grid[0].length - 1 || grid[i][j + 1] == 0) perimeter++;
        }
      }
    }

    return perimeter;
  }
}

//Solution 3: 4ms 46.01 MB
class Solution {
    public int islandPerimeter(int[][] grid) {
        int perimeter = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;
                    if (i > 0 && grid[i - 1][j] == 1) perimeter -= 2;
                    if (j > 0 && grid[i][j - 1] == 1) perimeter -= 2;
                }
            }
        }

        return perimeter;
    }
}
