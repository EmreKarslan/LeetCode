//Solution 1: 61ms 44.95 MB
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);

  const quadruplets: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = nums.length - 1; j > i + 2; j--) {
      if (j < nums.length - 1 && nums[j] === nums[j + 1]) {
        continue;
      }

      let left = i + 1;
      let right = j - 1;

      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right] + nums[j];

        if (currentSum === target) {
          quadruplets.push([nums[i], nums[left], nums[right], nums[j]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
}
