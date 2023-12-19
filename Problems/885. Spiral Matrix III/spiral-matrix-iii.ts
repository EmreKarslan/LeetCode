//Solution 1: 83ms 50.70 MB
function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number
): number[][] {
  let direction = "R";
  const answer = [];
  let steps = 1;
  let turnCount = 0;
  let stepLength = 1;

  while (answer.length !== rows * cols) {
    if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
      answer.push([rStart, cStart]);
    }

    switch (direction) {
      case "R":
        cStart += 1;
        break;
      case "D":
        rStart += 1;
        break;
      case "L":
        cStart -= 1;
        break;
      case "U":
        rStart -= 1;
        break;
    }

    steps--;
    if (steps === 0) {
      turnCount++;
      switch (direction) {
        case "R":
          direction = "D";
          break;
        case "D":
          direction = "L";
          break;
        case "L":
          direction = "U";
          break;
        case "U":
          direction = "R";
          break;
      }

      if (turnCount === 2) {
        stepLength++;
        turnCount = 0;
      }

      steps = stepLength;
    }
  }
  return answer;
}

//Solution 2: 80ms 50.13 MB
function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number
): number[][] {
  const answer: number[][] = [];
  let direction: "R" | "D" | "L" | "U" = "R";
  let steps = 1;
  let stepLength = 1;

  while (answer.length !== rows * cols) {
    if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
      answer.push([rStart, cStart]);
    }
    switch (direction) {
      case "R":
        cStart += 1;
        break;
      case "D":
        rStart += 1;
        break;
      case "L":
        cStart -= 1;
        break;
      case "U":
        rStart -= 1;
        break;
    }
    steps--;

    if (steps === 0) {
      switch (direction) {
        case "R":
          direction = "D";
          break;
        case "D":
          stepLength++;
          direction = "L";
          break;
        case "L":
          direction = "U";
          break;
        case "U":
          stepLength++;
          direction = "R";
          break;
      }
      steps = stepLength;
    }
  }

  return answer;
}

//Solution 3: 85ms 50.29 MB
function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number
): number[][] {
  const answer: number[][] = [];
  const nextDirection: Record<string, string> = {
    R: "D",
    D: "L",
    L: "U",
    U: "R",
  };
  let direction = "R";
  let stepLength = 1;

  while (answer.length !== rows * cols) {
    for (let step = 0; step < stepLength * 2; step++) {
      if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
        answer.push([rStart, cStart]);
      }

      if (step === stepLength) {
        direction = nextDirection[direction];
      }

      switch (direction) {
        case "R":
          cStart++;
          break;
        case "D":
          rStart++;
          break;
        case "L":
          cStart--;
          break;
        case "U":
          rStart--;
          break;
      }
    }
    stepLength++;
    direction = nextDirection[direction];
  }
  return answer;
}
