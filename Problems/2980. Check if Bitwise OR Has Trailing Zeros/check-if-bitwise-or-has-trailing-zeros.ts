//Solution 1: 59ms 44.58 MB
function hasTrailingZeros(nums: number[]): boolean {
  let evenCount = 0;

  for (const num of nums) {
    if (num % 2 === 0 && ++evenCount === 2) return true;
  }

  return false;
}
