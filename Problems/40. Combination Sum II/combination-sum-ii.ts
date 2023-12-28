//Solution 1: Time Limit Exceed
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const uniqSolutions = new Set();
  candidates.sort((a, b) => a - b);
  function backtrack(
    currentCombination: number[],
    currentSum: number,
    startIndex: number
  ) {
    if (currentSum > target) {
      return;
    }

    if (currentSum === target) {
      const key = `${currentCombination.toString()}`;

      if (!uniqSolutions.has(key)) {
        uniqSolutions.add(key);
        result.push([...currentCombination]);
      }
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      currentSum += candidates[i];
      backtrack(currentCombination, currentSum, i + 1);
      currentCombination.pop();
      currentSum -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return result;
}

//Solution 2: 70ms 45.48 MB
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (
    startIndex: number,
    currentCombination: number[],
    currentSum: number
  ) => {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (startIndex < i && candidates[i] === candidates[i - 1]) {
        continue; // Skip duplicates at the same level
      }

      if (currentSum + candidates[i] > target) {
        break; // No need to proceed if sum exceeds target
      }

      currentCombination.push(candidates[i]);
      currentSum += candidates[i];
      backtrack(i + 1, currentCombination, currentSum); // Allow duplicates at different levels
      currentCombination.pop();
      currentSum -= candidates[i];
    }
  };

  backtrack(0, [], 0);

  return result;
}

//Solution 3: 47ms 44.90 MB
function combinationSum2(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];
  const stack: number[] = [];
  const backtrack = (startIndex: number = 0, currentSum: number = 0) => {
    if (currentSum === target) {
      answer.push([...stack]);
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates at the same level
      }

      if (currentSum + nums[i] > target) {
        break; // No need to proceed if sum exceeds target
      }

      stack.push(nums[i]);
      backtrack(i + 1, currentSum + nums[i]);
      stack.pop();
    }
  };

  backtrack();

  return answer;
}
