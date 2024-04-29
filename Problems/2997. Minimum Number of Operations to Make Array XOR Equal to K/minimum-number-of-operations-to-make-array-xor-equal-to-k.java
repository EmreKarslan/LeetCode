//Solution 1: 1ms 56.74 MB
class Solution {
  public int minOperations(int[] nums, int k) {
    for (int num : nums) {
      k ^= num;
    }

    int minOperationCount = 0;
    while (k > 0) {
      minOperationCount += k & 1;
      k >>= 1;
    }

    return minOperationCount;
  }
}