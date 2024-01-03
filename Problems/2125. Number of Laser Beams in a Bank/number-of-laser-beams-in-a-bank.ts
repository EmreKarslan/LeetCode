//Solution 1: 94ms 51.36 MB
function numberOfBeams(bank: string[]): number {
  let totalBeams = 0;
  let previousRowCount = 0;

  for (const row of bank) {
    let currentRowCount = 0;

    for (const item of row) {
      if (item === "1") {
        currentRowCount++;
      }
    }

    if (currentRowCount > 0) {
      totalBeams += previousRowCount * currentRowCount;
      previousRowCount = currentRowCount;
    }
  }

  return totalBeams;
}
