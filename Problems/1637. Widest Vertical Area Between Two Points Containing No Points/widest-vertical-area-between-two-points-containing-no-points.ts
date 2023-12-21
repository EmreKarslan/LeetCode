//Solution 1: 134ms 73.10 MB
function maxWidthOfVerticalArea(points: number[][]): number {
  const xCoordinates = [];

  for (const point of points) {
    xCoordinates.push(point[0]);
  }
  xCoordinates.sort((a, b) => a - b);
  let maxWidth = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < xCoordinates.length; i++) {
    maxWidth = Math.max(xCoordinates[i] - xCoordinates[i - 1], maxWidth);
  }

  return maxWidth;
}

//Solution 2: 155ms 71.20 MB
function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let maxWidth = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < points.length; i++) {
    maxWidth = Math.max(points[i][0] - points[i - 1][0], maxWidth);
  }

  return maxWidth;
}
