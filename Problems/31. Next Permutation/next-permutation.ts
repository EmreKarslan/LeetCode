//Solution 1: 52ms 45.3 MB
function nextPermutation(arr: number[]): void {
  let i = arr.length - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) i--;

  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  arr
    .splice(i + 1)
    .reverse()
    .forEach((val, index) => (arr[i + 1 + index] = val));
}
