//Solution 1: 58ms 46.00 MB
function getSubBoxId(row: number, column: number): string {
  return `subBoxId:${Math.floor(row / 3) + 1}-${Math.floor(column / 3) + 1}`;
}

function isValidSudoku(board: string[][]): boolean {
  const subBoxSets: { [key: string]: Set<string> } = {};

  for (let row = 0; row < 9; row++) {
    const tempRowSet = new Set();

    for (let col = 0; col < 9; col++) {
      const currentSubBoxId = getSubBoxId(row, col);

      if (col % 3 === 0 && row % 3 === 0) {
        subBoxSets[currentSubBoxId] = new Set();
      }

      const cellValue = board[row][col];

      if (cellValue !== ".") {
        if (
          tempRowSet.has(cellValue) ||
          subBoxSets[currentSubBoxId].has(cellValue)
        ) {
          return false;
        }

        subBoxSets[currentSubBoxId].add(cellValue);
        tempRowSet.add(cellValue);
      }
    }
  }

  for (let col = 0; col < 9; col++) {
    const tempColSet = new Set();

    for (let row = 0; row < 9; row++) {
      const cellValue = board[row][col];

      if (cellValue !== ".") {
        if (tempColSet.has(cellValue)) {
          return false;
        }

        tempColSet.add(cellValue);
      }
    }
  }

  return true;
}

//Solution 2: 55ms 46.20MB
function isValidSudoku(board: string[][]): boolean {
  const subBoxes = [];
  const columns = [];

  for (let row = 0; row < 9; row++) {
    const tempRowSet = new Set();

    for (let col = 0; col < 9; col++) {
      const subBoxId = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      subBoxes[subBoxId] = subBoxes[subBoxId] || new Set();
      columns[col] = columns[col] || new Set();

      const cellValue = board[row][col];

      if (cellValue !== ".") {
        if (tempRowSet.has(cellValue) || subBoxes[subBoxId].has(cellValue) || columns[col].has(cellValue)) {
          return false;
        }

        subBoxes[subBoxId].add(cellValue);
        columns[col].add(cellValue);
        tempRowSet.add(cellValue);
      }
    }
  }

  return true;
}

//Solution 3: 50ms 44.98MB
function isValidSudoku(board: string[][]): boolean {
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    const rowSet = new Set<string>();
    for (let col = 0; col < cols; col++) {
      const cell = board[row][col];
      if (cell !== ".") {
        if (rowSet.has(cell)) {
          return false;
        } else {
          rowSet.add(cell);
        }
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    const colSet = new Set<string>();
    for (let row = 0; row < rows; row++) {
      const cell = board[row][col];
      if (cell !== ".") {
        if (colSet.has(cell)) {
          return false;
        } else {
          colSet.add(cell);
        }
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const subBoxSet = new Set<string>();
    const rowStart = Math.floor(i / 3) * 3;
    const colStart = (i % 3) * 3;
    for (let j = 0; j < 9; j++) {
      const row = rowStart + Math.floor(j / 3);
      const col = colStart + (j % 3);
      const cell = board[row][col];
      if (cell !== ".") {
        if (subBoxSet.has(cell)) {
          return false;
        } else {
          subBoxSet.add(cell);
        }
      }
    }
  }