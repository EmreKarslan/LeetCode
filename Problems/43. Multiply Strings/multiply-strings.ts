//Solution 1: BigInt Error
function multiply(num1: string, num2: string): string {
  return (Number(num1) * Number(num2)).toString();
}

//Solution 2: 49ms 44.50 MB
function multiply(num1: string, num2: string): string {
  return (BigInt(num1) * BigInt(num2)).toString();
}
