//Solution 1: 58ms 44.90 MB
function countAndSay(n: number): string {
  if (n === 1) return "1";

  const previousOutput = countAndSay(n - 1);
  let currentOutput = "";
  let count = 1;

  for (let i = 0; i < previousOutput.length; i++) {
    if (previousOutput[i] === previousOutput[i + 1]) {
      count++;
    } else {
      currentOutput += `${count}${previousOutput[i]}`;
      count = 1;
    }
  }

  return currentOutput;
}
