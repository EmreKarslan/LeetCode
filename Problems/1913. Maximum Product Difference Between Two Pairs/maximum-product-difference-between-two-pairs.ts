//Solution 1: 76ms 46.2 MB
function maxProductDifference(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
}

//Solution 2: 58ms 45.7 MB
function maxProductDifference(nums: number[]): number {
  let [lowestNum, highestNum] = [nums[0], nums[0]];
  let [secondLowestNum, secondHighestNum] = [
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > highestNum) {
      secondHighestNum = highestNum;
      highestNum = nums[i];
      continue;
    }

    if (nums[i] > secondHighestNum) {
      secondHighestNum = nums[i];
    }

    if (nums[i] < lowestNum) {
      secondLowestNum = lowestNum;
      lowestNum = nums[i];
      continue;
    }

    if (nums[i] < secondLowestNum) {
      secondLowestNum = nums[i];
    }
  }

  return highestNum * secondHighestNum - lowestNum * secondLowestNum;
}

//Solution 3: 51ms 45.09 MB
function maxProductDifference(nums: number[]): number {
  let [min1, min2] = [nums[0], Number.POSITIVE_INFINITY];
  let [max1, max2] = [nums[0], Number.NEGATIVE_INFINITY];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
      continue;
    }

    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
      continue;
    }

    if (nums[i] > max2) {
      max2 = nums[i];
    }

    if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  return max1 * max2 - min1 * min2;
}
