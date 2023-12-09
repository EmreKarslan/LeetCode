//Solution 1: 72ms 46.8 MB
function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length === 1) return s;

  const length = s.length;
  const itr = (numRows - 1) * 2;
  let answer = "";

  for (let row = 0; row < numRows; row++) {
    let currentIndex = row;
    let currentItr = itr;
    if (row != 0 && row != numRows - 1) {
      currentItr = itr - 2 * row;
    }
    while (currentIndex < length) {
      answer += s[currentIndex];

      currentIndex += currentItr;

      if (row != 0 && row != numRows - 1) {
        currentItr = Math.abs(itr - currentItr);
      }
    }
  }

  return answer;
}

//Solution 2: 63ms 47.6 MB
function convert(s: string, numRows: number): string {
  if (numRows <= 1 || s.length === 1) return s;

  const length = s.length;
  const itr = (numRows - 1) * 2;
  let answer = "";

  for (let row = 0; row < numRows; row++) {
    let currentIndex = row;
    let currentItr = row === 0 || row === numRows - 1 ? itr : itr - 2 * row;

    while (currentIndex < length) {
      answer += s[currentIndex];
      currentIndex += currentItr;

      if (row !== 0 && row !== numRows - 1) {
        currentItr = Math.abs(itr - currentItr);
      }
    }
  }

  return answer;
}
