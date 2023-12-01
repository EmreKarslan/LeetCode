//Solution 1: 50ms 43 MB
function removeElement(nums: number[], val: number): number {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}

//Solution 2: 50ms 44.1 MB
function removeElement(nums: number[], val: number): number {
  const filteredNums = nums.filter((num) => num !== val);

  nums.length = 0;
  nums.push(...filteredNums);

  return nums.length;
}

//Solution 3: 49ms 44.2 MB
function removeElement(nums: number[], val: number): number {
  const copiedNums = nums.splice(0, nums.length);

  nums.push(...copiedNums.filter((num) => num !== val));

  return nums.length;
}
