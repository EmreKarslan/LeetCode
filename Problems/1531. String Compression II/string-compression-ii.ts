//Solution: Not works for mixed strings
function charFrequencies(str: string): Record<string, number> {
  return Array.from(str).reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {} as Record<string, number>);
}

function getLengthOfOptimalCompression(s: string, k: number): number {
  const frequencies = charFrequencies(s);
  let result = "";

  Object.keys(frequencies)
    .sort((a, b) => frequencies[a] - frequencies[b])
    .forEach((char) => {
      const freq = frequencies[char];
      const toRemove = Math.min(freq, k);

      if (freq - toRemove === 0) {
        frequencies[char] = 0;
        k -= toRemove;
      } else if (freq > 10 && freq - 10 <= k) {
        frequencies[char] -= freq - 9;
        k -= freq - 9;
      }

      if (frequencies[char] > 1) {
        result += `${char}${frequencies[char]}`;
      } else if (frequencies[char] === 1) {
        result += `${char}`;
      }
    });

  return result.length;
}

//Solution 2: 258ms 46.83 MB
function getLength(count: number): number {
  if (count === 1) return 1;
  else {
    if (count < 10) return 2;
    else {
      if (count < 100) return 3;
      else return 4;
    }
  }
}

function getLengthOfOptimalCompression(s: string, k: number): number {
  const n = s.length;
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(k + 1).fill(0));

  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= k; j++) {
      if (i === n) {
        dp[n][j] = 0;
        continue;
      }

      dp[i][j] = j > 0 ? dp[i + 1][j - 1] : Number.MAX_SAFE_INTEGER;

      let possible_del = j;
      let count = 0;

      for (let end = i; end < n && possible_del >= 0; end++) {
        if (s[end] === s[i]) {
          count++;
          dp[i][j] = Math.min(
            dp[i][j],
            getLength(count) + dp[end + 1][possible_del]
          );
        } else {
          possible_del--;
        }
      }
    }
  }

  return dp[0][k];
}
