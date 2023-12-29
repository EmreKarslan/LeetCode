//Solution 1: 92ms 49.60 MB
function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) return -1;

  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(d + 1).fill(0));

  // Initialize the maximum difficulty for each subarray
  const maxDifficulty: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    let maxD = jobDifficulty[i];
    for (let j = i; j < n; j++) {
      maxD = Math.max(maxD, jobDifficulty[j]);
      maxDifficulty[i][j] = maxD;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 1; j <= d; j++) {
      if (n - i < j) {
        dp[i][j] = -1;
        continue;
      }

      if (j === 1) {
        dp[i][j] = maxDifficulty[i][n - 1];
        continue;
      }

      dp[i][j] = Number.MAX_SAFE_INTEGER;
      for (let end = i; end <= n - j; end++) {
        dp[i][j] = Math.min(
          dp[i][j],
          maxDifficulty[i][end] + dp[end + 1][j - 1]
        );
      }
    }
  }

  return dp[0][d];
}

//Solution 2: 127ms 45.70 MB
function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) return -1;

  const dp: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(d + 1).fill(Number.MAX_SAFE_INTEGER));

  dp[n - 1][d] = jobDifficulty[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    dp[i][d] = Math.max(dp[i + 1][d], jobDifficulty[i]);
  }

  for (let day = d - 1; day > 0; day--) {
    // we need to leave enough tasks for the remaining days
    for (let i = day - 1; i < n - (d - day); i++) {
      let hardest = 0;
      for (let j = i; j < n - (d - day); j++) {
        hardest = Math.max(hardest, jobDifficulty[j]);
        dp[i][day] = Math.min(dp[i][day], hardest + dp[j + 1][day + 1]);
      }
    }
  }

  return dp[0][1];
}

//Solution 3: 75ms 44.5 MB
function minDifficulty(jobDifficulty: number[], d: number): number {
  if (jobDifficulty.length < d) {
    return -1;
  }

  const len = jobDifficulty.length;
  let sum = 0;

  for (let i = 0; i < jobDifficulty.length; i++) {
    sum += jobDifficulty[i];
  }

  if (sum === 0) {
    return 0;
  }

  const memo: number[][] = new Array(d + 1)
    .fill(0)
    .map(() => new Array(len).fill(0));

  function helper(jd: number[], daysLeft: number, idx: number): void {
    if (memo[daysLeft][idx] !== 0) {
      return;
    }

    if (daysLeft === 1) {
      let num = 0;
      for (let i = idx; i < len; i++) {
        num = Math.max(num, jd[i]);
      }
      memo[daysLeft][idx] = num;
      return;
    }

    let max = jd[idx];
    daysLeft--;
    const stop = len - idx - daysLeft + 1;

    let res = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < stop; i++) {
      max = Math.max(max, jd[idx + i - 1]);
      let other = memo[daysLeft][idx + i];

      if (other === 0) {
        helper(jd, daysLeft, idx + i);
        other = memo[daysLeft][idx + i];
      }

      res = Math.min(res, other + max);
    }

    memo[daysLeft + 1][idx] = res;
  }

  helper(jobDifficulty, d, 0);

  return memo[d][0];
}
