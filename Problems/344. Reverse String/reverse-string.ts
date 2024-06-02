//Solution 1: 68ms 57.69 MB
function reverseString(s: string[]): void {
  s.reverse();
}

//Solution 2: 83ms 57.13 MB
function reverseString(s: string[]): void {
  let left = 0;
  for (var i = 0; i < s.length / 2; i++) {
    const right = s.length - 1 - i;
    const temp = s[left];

    s[left] = s[right];
    s[right] = temp;
    left++;
  }
}

//Solution 3: 81ms 57.26 MB
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

//Solution 4: 82ms 57.16 MB
function reverseString(s: string[]): void {
  let left = -1;
  let right = s.length;

  while (++left < --right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
  }
}

//Solution 5: 68ms 57.45 MB
function reverseString(s: string[]): void {
  let left = -1;
  let right = s.length;

  while (++left < --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
}

//Solution 6: 73ms 56.77 MB
function reverseString(s: string[]): void {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
}

//Solution 7: 71ms 58.08 MB
function reverseString(s: string[]): void {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
}
