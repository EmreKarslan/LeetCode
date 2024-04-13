//Solution 1: 127ms 53.12 MB
function maximalRectangle(matrix: string[][]): number {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const heights: number[] = new Array(matrix[0].length).fill(0);
  let maxArea = 0;

  for (const row of matrix) {
    for (let col = 0; col < matrix[0].length; col++) {
      heights[col] = row[col] === "0" ? 0 : heights[col] + 1;
    }

    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let currentMin = heights[i];
    for (let j = i; j < heights.length; j++) {
      currentMin = Math.min(currentMin, heights[j]);
      maxArea = Math.max(maxArea, currentMin * (j - i + 1));
    }
  }

  return maxArea;
}

//Solution 2: 94ms 53.20 MB
function maximalRectangle(matrix: string[][]): number {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const heights: number[] = new Array(matrix[0].length).fill(0);
  let maxArea = 0;

  for (const row of matrix) {
    for (let col = 0; col < matrix[0].length; col++) {
      heights[col] = row[col] === "0" ? 0 : heights[col] + 1;
    }

    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let currentMin = heights[i];
    for (let j = i; j < heights.length; j++) {
      if (heights[j] == 0) {
        break;
      }

      currentMin = Math.min(currentMin, heights[j]);
      maxArea = Math.max(maxArea, currentMin * (j - i + 1));
    }
  }

  return maxArea;
}

//Solution 3: 86ms 53.57 MB
function maximalRectangle(matrix: string[][]): number {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const heights: number[] = new Array(matrix[0].length).fill(0);
  let maxArea = 0;

  for (const row of matrix) {
    for (let col = 0; col < matrix[0].length; col++) {
      heights[col] = row[col] === "0" ? 0 : heights[col] + 1;
    }

    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] == 0) continue;
    let currentMin = heights[i];
    for (let j = i; j < heights.length; j++) {
      if (heights[j] == 0) {
        break;
      }

      currentMin = Math.min(currentMin, heights[j]);
      maxArea = Math.max(maxArea, currentMin * (j - i + 1));
    }
  }

  return maxArea;
}

//Solution 4: 73ms 53.92 MB
function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const heightArray = Array.from({ length: matrix[0].length }, () => 0);
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "0") {
        heightArray[col] = 0;
      } else {
        heightArray[col] += 1;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heightArray));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack: number[] = [];

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack.length > 0 &&
      (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      const height = heights[stack.pop()!];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
}
