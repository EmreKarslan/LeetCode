//Solution 1: 110ms 53.30 MB
function firstMissingPositive(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let currentPositive = 1;
  for (const num of nums) {
    if (num === currentPositive) {
      currentPositive++;
    }
  }
  return currentPositive;
}

//Solution 2: 80ms 61.4 MB
function firstMissingPositive(nums: number[]): number {
  const uniquePositives = new Set<number>();
  for (const num of nums) {
    if (num > 0) {
      uniquePositives.add(num);
    }
  }

  const sortedPositives = Array.from(uniquePositives).sort((a, b) => a - b);

  let currentPositive = 1;

  for (const num of sortedPositives) {
    if (num === currentPositive) {
      currentPositive++;
    }
  }

  return currentPositive;
}

//Solution 3: 51ms 49.60 MB
function firstMissingPositive(nums: number[]): number {
  let i = 0;

  while (i < nums.length) {
    const target = nums[i] - 1;

    if (target >= 0 && target < nums.length && nums[i] !== nums[target]) {
      [nums[i], nums[target]] = [nums[target], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    const target = i + 1;
    if (target !== nums[i]) {
      return target;
    }
  }

  return nums.length + 1;
}
