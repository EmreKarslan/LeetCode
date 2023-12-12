//Solution 1: 57ms 44.5 MB
function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
}

//Solution 2: 45ms 44.1 MB
function maxProduct(nums: number[]): number {
  let [largest, secondLargest] =
    nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] >= largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return (largest - 1) * (secondLargest - 1);
}
