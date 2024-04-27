//Solution 1: Time Limit Exceeded
function findRotateSteps(ring: string, key: string): number {
  const keyMap: Map<string, number[]> = new Map();

  for (let i = 0; i < ring.length; i++) {
    if (keyMap.has(ring[i])) {
      let indexes = keyMap.get(ring[i]);
      indexes.push(i);
      keyMap.set(ring[i], indexes);
    } else {
      keyMap.set(ring[i], [i]);
    }
  }

  let minCost = Number.POSITIVE_INFINITY;

  function findMinStep(
    currentRingIndex: number,
    currentKeyIndex: number,
    stepCount: number
  ) {
    if (currentKeyIndex === key.length) {
      minCost = Math.min(minCost, stepCount);
      return;
    }

    const currentStepKey = key[currentKeyIndex];
    const indexes = keyMap.get(currentStepKey);
    for (let i = 0; i < indexes.length; i++) {
      const shortCost = Math.abs(indexes[i] - currentRingIndex);
      const longCost =
        currentRingIndex < indexes[i]
          ? Math.abs(indexes[i] - (currentRingIndex + ring.length))
          : Math.abs(currentRingIndex - (indexes[i] + ring.length));

      findMinStep(indexes[i], currentKeyIndex + 1, stepCount + shortCost + 1);
      findMinStep(indexes[i], currentKeyIndex + 1, stepCount + longCost + 1);
    }
  }

  findMinStep(0, 0, 0);
  return minCost;
}

//Solution 2: 80ms 58.13 MB
function findRotateSteps(ring: string, key: string): number {
  const keyMap: Map<string, number[]> = new Map();
  for (let i = 0; i < ring.length; i++) {
    if (keyMap.has(ring[i])) {
      let indexes = keyMap.get(ring[i]);
      indexes.push(i);
      keyMap.set(ring[i], indexes);
    } else {
      keyMap.set(ring[i], [i]);
    }
  }

  const memo: number[][] = new Array(ring.length)
    .fill(0)
    .map(() => new Array(key.length).fill(0));

  function findMinStep(
    currentRingIndex: number,
    currentKeyIndex: number
  ): number {
    if (currentKeyIndex === key.length) {
      return 0;
    }

    if (memo[currentRingIndex][currentKeyIndex] !== 0) {
      return memo[currentRingIndex][currentKeyIndex];
    }

    const currentStepKey = key[currentKeyIndex];
    const indexes = keyMap.get(currentStepKey);
    let minCost = Number.POSITIVE_INFINITY;
    for (let i = 0; i < indexes.length; i++) {
      const innerCost = Math.abs(indexes[i] - currentRingIndex);
      const outerCost =
        currentRingIndex < indexes[i]
          ? Math.abs(indexes[i] - (currentRingIndex + ring.length))
          : Math.abs(currentRingIndex - (indexes[i] + ring.length));

      const cost =
        Math.min(innerCost, outerCost) +
        1 +
        findMinStep(indexes[i], currentKeyIndex + 1);
      minCost = Math.min(minCost, cost);
    }

    memo[currentRingIndex][currentKeyIndex] = minCost;
    return minCost;
  }

  return findMinStep(0, 0);
}
