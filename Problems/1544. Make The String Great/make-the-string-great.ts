//Solution 1: 58ms 52.10 MB
function makeGood(s: string): string {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const prevChar = stack[stack.length - 1];

    if (s[i].toUpperCase() === prevChar && s[i] === s[i].toLowerCase()) {
      stack.pop();
      continue;
    }

    if (s[i].toLowerCase() === prevChar && s[i] === s[i].toUpperCase()) {
      stack.pop();
      continue;
    }

    stack.push(s[i]);
  }

  return stack.join("");
}
