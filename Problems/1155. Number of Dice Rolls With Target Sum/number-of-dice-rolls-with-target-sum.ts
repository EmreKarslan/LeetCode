//Solution 1: 222ms 56.74MB
function numRollsToTarget(n: number, k: number, target: number): number {
  const memo: Record<string, number> = {};

  function backtrack(remainingDice: number, currentSum: number): number {
    if (remainingDice === 0) {
      return currentSum === target ? 1 : 0;
    }

    const memoKey = `${remainingDice}-${currentSum}`;
    if (memo[memoKey] !== undefined) {
      return memo[memoKey];
    }

    let totalWays = 0;

    for (let i = 1; i <= k; i++) {
      totalWays =
        (totalWays + backtrack(remainingDice - 1, currentSum + i)) %
        (10 ** 9 + 7);
    }

    memo[memoKey] = totalWays;

    return totalWays;
  }

  return backtrack(n, 0);
}

//Solution 2: 208ms 52.56 MB
function numRollsToTarget(n: number, k: number, target: number): number {
  const memo: Record<string, number> = {};

  function backtrack(remainingDice: number, currentSum: number): number {
    if (currentSum > target) {
      return 0;
    }

    if (remainingDice === 0) {
      return currentSum === target ? 1 : 0;
    }

    const memoKey = `${remainingDice}-${currentSum}`;
    if (memo[memoKey] !== undefined) {
      return memo[memoKey];
    }

    let totalWays = 0;

    for (let i = 1; i <= k; i++) {
      totalWays =
        (totalWays + backtrack(remainingDice - 1, currentSum + i)) %
        (10 ** 9 + 7);
    }

    memo[memoKey] = totalWays;

    return totalWays;
  }

  return backtrack(n, 0);
}
