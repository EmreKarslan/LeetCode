//Solution 1: 89ms 49.00 MB
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const commonValues = new Set(A);
  const res = new Array(A.length).fill(0);

  for (let i = A.length - 1; i >= 0; i--) {
    res[i] = commonValues.size;
    commonValues.delete(A[i]);
    commonValues.delete(B[i]);
  }

  return res;
}
