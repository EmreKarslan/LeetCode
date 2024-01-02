//Solution: 75ms 46.62 MB
function findMatrix(nums: number[]): number[][] {
  const resultMatrix: number[][] = [];

  for (const num of nums) {
    let assigned = false;

    for (const row of resultMatrix) {
      if (!row.includes(num)) {
        row.push(num);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      resultMatrix.push([num]);
    }
  }

  return resultMatrix;
}
