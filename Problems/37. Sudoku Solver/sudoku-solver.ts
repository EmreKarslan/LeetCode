//Solution 1: Time Limit Exceeded
function isValidMove(
  row: number,
  col: number,
  num: string,
  subBoxId: number,
  rows: Set<string>[],
  columns: Set<string>[],
  subBoxes: Set<string>[]
): boolean {
  return (
    !rows[row].has(num) &&
    !columns[col].has(num) &&
    !subBoxes[subBoxId].has(num)
  );
}

function solveSudoku(board: string[][]): void {
  const subBoxes: Set<string>[] = [];
  const columns: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  let emptyCellCount = 0;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const subBoxId = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      subBoxes[subBoxId] = subBoxes[subBoxId] || new Set();

      const cellValue = board[row][col];

      if (cellValue !== ".") {
        subBoxes[subBoxId].add(cellValue);
        columns[col].add(cellValue);
        rows[row].add(cellValue);
      } else {
        emptyCellCount++;
      }
    }
  }

  while (emptyCellCount > 0) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const cellValue = board[row][col];
        const validMoves = [];
        const subBoxId = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (cellValue === ".") {
          for (let i = 1; i < 10; i++) {
            const num = i.toString();
            if (isValidMove(row, col, num, subBoxId, rows, columns, subBoxes)) {
              validMoves.push(num);
            }
          }

          if (validMoves.length === 1) {
            board[row][col] = validMoves[0];
            emptyCellCount--;
            subBoxes[subBoxId].add(validMoves[0]);
            columns[col].add(validMoves[0]);
            rows[row].add(validMoves[0]);
          }
        }
      }
    }
  }
}

//Solution 2: 112ms 45.00 MB
function isValid(
  board: string[][],
  row: number,
  col: number,
  c: string
): boolean {
  for (let i = 0; i < 9; i++) {
    if (
      board[i][col] === c ||
      board[row][i] === c ||
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === c
    ) {
      return false;
    }
  }
  return true;
}

function solve(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let c = 1; c <= 9; c++) {
          const sudokuChar = c.toString();
          if (isValid(board, i, j, sudokuChar)) {
            board[i][j] = sudokuChar;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solveSudoku(board: string[][]): void {
  solve(board);
}
