//Solution 1: 60ms 62.00 MB
function minOperations(nums: number[], k: number): number {
  let xorSum = k;
  for (const num of nums) {
    xorSum ^= num;
  }

  let minOperationCount = 0;
  while (xorSum > 0) {
    minOperationCount += xorSum & 1;
    xorSum >>= 1;
  }
  return minOperationCount;
}
