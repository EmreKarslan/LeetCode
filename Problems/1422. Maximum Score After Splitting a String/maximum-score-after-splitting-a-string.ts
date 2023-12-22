//Solution 1: 66ms 42.80 MB
function maxScore(s: string): number {
  let maxScore = 0;
  let countOfZeros = 0;
  let countOfOnes = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      countOfOnes += 1;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      countOfZeros += 1;
    } else {
      countOfOnes -= 1;
    }

    maxScore = Math.max(countOfZeros + countOfOnes, maxScore);
  }

  return maxScore;
}

//Solution 2: 61ms 42.80 MB
function maxScore(s: string): number {
  let maxScore = 0;
  let countOfOnes = s.split("1").length - 1;
  let countOfZeros = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      countOfZeros += 1;
    } else {
      countOfOnes -= 1;
    }
    maxScore = Math.max(countOfZeros + countOfOnes, maxScore);
  }

  return maxScore;
}

//Solution 3: 58ms 42.90 MB
function maxScore(s: string): number {
  let maxScore = 0;
  let countOfOnes = s.split("1").length - 1;
  let countOfZeros = 0;

  for (let i = 0; i < s.length - 1; i++) {
    countOfZeros += s[i] === "0" ? 1 : 0;
    countOfOnes -= s[i] === "1" ? 1 : 0;
    maxScore = Math.max(countOfZeros + countOfOnes, maxScore);
  }

  return maxScore;
}
