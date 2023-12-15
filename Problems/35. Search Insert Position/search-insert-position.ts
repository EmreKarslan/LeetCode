//Solution 1: 45ms 44.35 MB
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return nums.length;
}
//Solution 2: 46ms 44.35 MB
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < target) {
      left++;
    } else if (nums[left] > target) {
      return left;
    } else {
      return left;
    }

    if (nums[right] > target) {
      right--;
    } else if (nums[right] < target) {
      return ++right;
    } else {
      return right;
    }
  }

  return left;
}

//Solution 3: 42ms 44.20 MB
function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}
