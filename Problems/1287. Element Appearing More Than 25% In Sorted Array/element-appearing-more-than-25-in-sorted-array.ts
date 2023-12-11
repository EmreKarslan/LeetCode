//Solution 1: 42ms 45.4 MB
function findSpecialInteger(arr: number[]): number {
  const minCount = arr.length / 4;
  const freq = {};

  for (const num of arr) {
    freq[num] = (freq[num] ?? 0) + 1;
    if (freq[num] > minCount) {
      return num;
    }
  }

  return -1;
}

//Solution 2:
function findSpecialInteger(arr: number[]): number {
  const minCount = arr.length / 4;

  for (let i = 0; i < arr.length - minCount; i++) {
    if (arr[i] === arr[i + Math.floor(minCount)]) {
      return arr[i];
    }
  }

  return -1;
}
