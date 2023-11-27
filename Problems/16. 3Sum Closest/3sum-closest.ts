//Solution 1: 544ms 44.65 MB
function threeSumClosest(nums: number[], target: number): number {
  let minDiff = Number.POSITIVE_INFINITY;
  let minDiffSum = 0; // Initialize to a default value

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const diff = Math.abs(sum - target);
        if (diff === 0) {
          return target;
        } else if (minDiff > diff) {
          minDiff = diff;
          minDiffSum = sum;
        }
      }
    }
  }

  return minDiffSum;
}
