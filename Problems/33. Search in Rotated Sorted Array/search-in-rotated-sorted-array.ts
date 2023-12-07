//Solution 1: 41ms 44.96 MB
function search(nums: number[], target: number): number {
  if (nums[0] === target) return 0;

  let isDirectionToRight = nums[0] < target;
  let currentIndex = isDirectionToRight ? 0 : nums.length - 1;

  while (
    (isDirectionToRight && nums[currentIndex] < target) ||
    (!isDirectionToRight && nums[currentIndex] > target)
  ) {
    currentIndex += isDirectionToRight ? 1 : -1;
  }

  return nums[currentIndex] === target ? currentIndex : -1;
}
