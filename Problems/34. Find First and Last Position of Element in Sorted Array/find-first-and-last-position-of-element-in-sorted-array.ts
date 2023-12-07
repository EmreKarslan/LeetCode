//Solution 1: 52ms 44.6 MB
function searchRange(nums: number[], target: number): number[] {
  const range: number[] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      range[0] = range[0] === -1 ? i : range[0];
      range[1] = i;
    }
  }

  return range.length > 0 ? range : [-1, -1];
}

//Solution 2: 50ms 44.6 MB
function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right && (nums[left] !== target || nums[right] !== target)) {
    if (nums[left] !== target) {
      left++;
    }
    if (nums[right] !== target) {
      right--;
    }
  }

  return nums[left] !== target ? [-1, -1] : [left, right];
}

//Solution 3: 40ms 44 MB
function searchRange(nums: number[], target: number): number[] {
  const range: number[] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      range[0] = range[0] === -1 ? i : range[0];
      range[1] = i;
    } else if (range[0] !== -1) {
      break;
    }
  }

  return range;
}
