//Solution 1: 65ms 45.60 MB
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(
    currentCombination: number[],
    currentSum: number,
    startIndex: number
  ) {
    if (currentSum > target) {
      return;
    }

    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      currentSum += candidates[i];
      backtrack(currentCombination, currentSum, i);
      currentCombination.pop();
      currentSum -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return result;
}
