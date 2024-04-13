//Solution 1: 16ms 47.68 MB
class Solution {
  public int maximalRectangle(char[][] matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return 0;
    }

    int[] heights = new int[matrix[0].length];
    int maxArea = 0;

    for (char[] row : matrix) {
      for (int col = 0; col < matrix[0].length; col++) {
        heights[col] = row[col] == '0' ? 0 : heights[col] + 1;
      }

      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
  }

  public int largestRectangleArea(int[] heights) {
    int maxArea = 0;

    for (int i = 0; i < heights.length; i++) {
      int currentMin = heights[i];
      for (int j = i; j < heights.length; j++) {
        currentMin = Math.min(currentMin, heights[j]);
        maxArea = Math.max(maxArea, currentMin * (j - i + 1));
      }
    }

    return maxArea;
  }
}

//Solution 2: 8ms 47.17 MB
class Solution {
  public int maximalRectangle(char[][] matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return 0;
    }

    int[] heights = new int[matrix[0].length];
    int maxArea = 0;

    for (char[] row : matrix) {
      for (int col = 0; col < matrix[0].length; col++) {
        heights[col] = row[col] == '0' ? 0 : heights[col] + 1;
      }

      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
  }

  public int largestRectangleArea(int[] heights) {
    int maxArea = 0;

    for (int i = 0; i < heights.length; i++) {
      int currentMin = heights[i];
      for (int j = i; j < heights.length; j++) {
        if (heights[j] == 0) {
          break;
        } else {
          currentMin = Math.min(currentMin, heights[j]);
        }
        maxArea = Math.max(maxArea, currentMin * (j - i + 1));
      }
    }

    return maxArea;
  }
}

//Solution 3: 7ms 47.26 MB
class Solution {
  public int maximalRectangle(char[][] matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return 0;
    }

    int[] heights = new int[matrix[0].length];
    int maxArea = 0;

    for (char[] row : matrix) {
      for (int col = 0; col < matrix[0].length; col++) {
        heights[col] = row[col] == '0' ? 0 : heights[col] + 1;
      }

      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
  }

  public int largestRectangleArea(int[] heights) {
    int maxArea = 0;

    for (int i = 0; i < heights.length; i++) {
      if (heights[i] == 0) {
        continue;
      }

      int currentMin = heights[i];
      for (int j = i; j < heights.length; j++) {
        if (heights[j] == 0) {
          break;
        } else {
          currentMin = Math.min(currentMin, heights[j]);
        }
        maxArea = Math.max(maxArea, currentMin * (j - i + 1));
      }
    }

    return maxArea;
  }
}

