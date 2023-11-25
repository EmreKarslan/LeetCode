//Solution 1: 59ms 51.5 MB
function maxArea(height: number[]): number {
  let maxArea = 0;
  let startIndex = 0;
  let endIndex = height.length - 1;

  while (startIndex < endIndex) {
    const containerHeight = Math.min(height[startIndex], height[endIndex]);
    const containerLength = endIndex - startIndex;
    maxArea = Math.max(maxArea, containerHeight * containerLength);

    if (height[startIndex] > height[endIndex]) {
      endIndex--;
    } else {
      startIndex++;
    }
  }

  return maxArea;
}
