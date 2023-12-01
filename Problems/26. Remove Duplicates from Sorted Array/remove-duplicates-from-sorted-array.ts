//Solution 1: 54ms 45.5 MB
function removeDuplicates(nums: number[]): number {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}

//Solution 2: 55ms 44.7 MB
function removeDuplicates(nums: number[]): number {
  const filteredNums = nums.filter(
    (value, index) => index === 0 || value !== nums[index - 1]
  );

  nums.length = 0;
  nums.push(...filteredNums);

  return nums.length;
}
