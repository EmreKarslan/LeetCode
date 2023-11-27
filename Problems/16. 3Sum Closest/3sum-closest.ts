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

//Solution 2: 63ms 44.39 MB
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
