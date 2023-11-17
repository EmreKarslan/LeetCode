//Solution: 40ms 44.84 MB
function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) {
    return [];
  }

  const numberIndicesMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const complement = target - currentNumber;

    if (numberIndicesMap[complement] !== undefined) {
      return [numberIndicesMap[complement], i];
    }

    numberIndicesMap[currentNumber] = i;
  }

  return [];
}
