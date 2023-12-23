//Solution 1: 54ms 44.80 MB
function isPathCrossing(path: string): boolean {
  const visitedPositions = { x0y0: 1 };
  let currentX = 0;
  let currentY = 0;
  const moveDirections = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  for (const move of path) {
    const directionVector = moveDirections[move];
    currentX += directionVector[0];
    currentY += directionVector[1];
    const currentPositionKey = `x${currentX}y${currentY}`;

    if (visitedPositions[currentPositionKey]) {
      return true;
    } else {
      visitedPositions[currentPositionKey] = 1;
    }
  }

  return false;
}

//Solution 2: 53ms 44.30 MB
function isPathCrossing(path: string): boolean {
  const visitedPositions = { "0_0": 1 };
  let currentPos = [0, 0];

  const moveDirections = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  for (const move of path) {
    const directionVector = moveDirections[move];
    currentPos[0] += directionVector[0];
    currentPos[1] += directionVector[1];
    const currentPositionKey = `${currentPos[0]}_${currentPos[1]}`;

    if (visitedPositions[currentPositionKey]) {
      return true;
    } else {
      visitedPositions[currentPositionKey] = 1;
    }
  }

  return false;
}

//Solution 3: 50ms 44.88 MB
function isPathCrossing(path: string): boolean {
  const visitedPositions = new Set(["0,0"]);
  let currentPos = [0, 0];

  const moveDirections = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  for (const move of path) {
    const directionVector = moveDirections[move];
    currentPos[0] += directionVector[0];
    currentPos[1] += directionVector[1];
    const currentPositionKey = `${currentPos[0]},${currentPos[1]}`;

    if (visitedPositions.has(currentPositionKey)) {
      return true;
    } else {
      visitedPositions.add(currentPositionKey);
    }
  }

  return false;
}

//Solution 4: 45ms 44.26 MB
function isPathCrossing(path: string): boolean {
  const currentPos = [0, 0];
  const visitedPositions = new Set([currentPos.toString()]);

  const moveDirections = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  for (const move of path) {
    const moveDirection = moveDirections[move];
    currentPos[0] += moveDirection[0];
    currentPos[1] += moveDirection[1];

    if (visitedPositions.has(currentPos.toString())) {
      return true;
    }

    visitedPositions.add(currentPos.toString());
  }

  return false;
}
