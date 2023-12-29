//Solution 1: 65ms 45.40 MB
function trap(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = height[leftPointer];
  let rightMax = height[rightPointer];
  let waterTrapped = 0;

  while (leftPointer < rightPointer) {
    if (leftMax < rightMax) {
      leftPointer++;
      const currentHeight = height[leftPointer];
      if (leftMax < currentHeight) {
        leftMax = currentHeight;
      } else {
        waterTrapped += leftMax - currentHeight;
      }
    } else {
      rightPointer--;
      const currentHeight = height[rightPointer];
      if (rightMax < currentHeight) {
        rightMax = currentHeight;
      } else {
        waterTrapped += rightMax - currentHeight;
      }
    }
  }

  return waterTrapped;
}
