//Solution 1: 6ms 59.49 MB
class Solution {
  private int nr;
  private int nc;

  private void clearFarmland(
      int row, int col, int[][] land, int[] rightBottom) {
    if (row < 0 || row >= nr || col < 0 || col >= nc || land[row][col] == 0)
      return;

    land[row][col] = 0;
    rightBottom[0] = Math.max(rightBottom[0], row);
    rightBottom[1] = Math.max(rightBottom[1], col);

    clearFarmland(row + 1, col, land, rightBottom);
    clearFarmland(row, col + 1, land, rightBottom);
  }

  public int[][] findFarmland(int[][] land) {
    nr = land.length;
    nc = land[0].length;
    ArrayList<int[]> farmlandsList = new ArrayList<>();

    for (int i = 0; i < nr; i++) {
      for (int j = 0; j < nc; j++) {
        if (land[i][j] == 1) {
          int[] rightBottom = new int[2];
          rightBottom[0] = i;
          rightBottom[1] = j;
          clearFarmland(i, j, land, rightBottom);
          farmlandsList.add(new int[] {i, j, rightBottom[0], rightBottom[1]});
        }
      }
    }

    int[][] farmlands = new int[farmlandsList.size()][];
    for (int i = 0; i < farmlandsList.size(); i++) {
      farmlands[i] = farmlandsList.get(i);
    }

    return farmlands;
  }
}

//Solution 2: 5ms 59.91 MB
class Solution {
  private int nr;
  private int nc;

  private int rbr;
  private int rbc;

  private void clearFarmland(int row, int col, int[][] land) {
    if (row < 0 || row >= nr || col < 0 || col >= nc || land[row][col] == 0) return;

    land[row][col] = 0;
    rbr = Math.max(rbr, row);
    rbc = Math.max(rbc, col);

    clearFarmland(row + 1, col, land);
    clearFarmland(row, col + 1, land);
  }

  public int[][] findFarmland(int[][] land) {
    nr = land.length;
    nc = land[0].length;
    ArrayList<int[]> farmlandsList = new ArrayList<>();

    for (int i = 0; i < nr; i++) {
      for (int j = 0; j < nc; j++) {
        if (land[i][j] == 1) {
          rbr = i;
          rbc = j;
          clearFarmland(i, j, land);
          farmlandsList.add(new int[] {i, j, rbr, rbc});
        }
      }
    }

    int[][] farmlands = new int[farmlandsList.size()][];
    for (int i = 0; i < farmlandsList.size(); i++) {
      farmlands[i] = farmlandsList.get(i);
    }

    return farmlands;
  }
}

//Solution 3: 4ms 59.73 MB
class Solution {
  private int nr;
  private int nc;

  private int rbr;
  private int rbc;

  private void clearFarmland(int row, int col, int[][] land) {
    if (row >= nr || col >= nc || land[row][col] == 0) return;

    land[row][col] = 0;
    rbr = Math.max(rbr, row);
    rbc = Math.max(rbc, col);

    clearFarmland(row + 1, col, land);
    clearFarmland(row, col + 1, land);
  }

  public int[][] findFarmland(int[][] land) {
    nr = land.length;
    nc = land[0].length;
    ArrayList<int[]> farmlandsList = new ArrayList<>();

    for (int i = 0; i < nr; i++) {
      for (int j = 0; j < nc; j++) {
        if (land[i][j] == 1) {
          rbr = i;
          rbc = j;
          clearFarmland(i, j, land);
          farmlandsList.add(new int[] {i, j, rbr, rbc});
        }
      }
    }

    int[][] farmlands = new int[farmlandsList.size()][];
    for (int i = 0; i < farmlandsList.size(); i++) {
      farmlands[i] = farmlandsList.get(i);
    }

    return farmlands;
  }
}

//Solution 4: 3ms 60.42 MB
class Solution {
  private int nr;
  private int nc;

  private int[] findFarmlandCoordinates(int row, int col, int[][] land) {
    int[] coordinates = new int[4];
    coordinates[0] = row;
    coordinates[1] = col;
    int rbr = row;
    int rbc = col;

    while (rbr < nr && land[rbr][col] == 1) rbr++;
    while (rbc < nc && land[row][rbc] == 1) rbc++;

    coordinates[2] = rbr - 1;
    coordinates[3] = rbc - 1;

    for (int i = row; i < rbr; i++) {
      for (int j = col; j < rbc; j++) {
        land[i][j] = 0;
      }
    }

    return coordinates;
  }

  public int[][] findFarmland(int[][] land) {
    nr = land.length;
    nc = land[0].length;
    ArrayList<int[]> farmlandsList = new ArrayList<>();

    for (int i = 0; i < nr; i++) {
      for (int j = 0; j < nc; j++) {
        if (land[i][j] == 1) {
          farmlandsList.add(findFarmlandCoordinates(i, j, land));
        }
      }
    }

    int[][] farmlands = new int[farmlandsList.size()][];
    for (int i = 0; i < farmlandsList.size(); i++) {
      farmlands[i] = farmlandsList.get(i);
    }

    return farmlands;
  }
}
