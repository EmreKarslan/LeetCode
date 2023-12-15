//Solution 1: 53ms 45.50 MB
function destCity(paths: string[][]): string {
  const pathsMap = {};

  for (const [source, destination] of paths) {
    pathsMap[source] = destination;
  }

  let currentCity = paths[0][0];

  while (true) {
    if (pathsMap[currentCity]) {
      currentCity = pathsMap[currentCity];
    } else {
      return currentCity;
    }
  }
}

//Solution 2: 56ms 45.50 MB
function destCity(paths: string[][]): string {
  const pathsMap = {};

  for (const [source, destination] of paths) {
    pathsMap[source] = destination;
  }

  let currentCity = paths[0][0];

  while (pathsMap[currentCity]) {
    currentCity = pathsMap[currentCity];
  }

  return currentCity;
}

//Solution 3: 53ms 46.1 MB
function destCity(paths: string[][]): string {
  const unusedPathsMap = {};
  let currentCity = paths[0][0];

  for (const [source, destination] of paths) {
    if (currentCity === source) {
      currentCity = destination;
    } else {
      unusedPathsMap[source] = destination;
    }
  }

  while (unusedPathsMap[currentCity]) {
    currentCity = unusedPathsMap[currentCity];
  }

  return currentCity;
}

//Solution 4: 53ms 46.1 MB
function destCity(paths: string[][]): string {
  const pathMap = {};
  const unvisitedCities = new Set();
  let currentCity = paths[0][0];

  for (const [source, destination] of paths) {
    if (currentCity === source) {
      currentCity = destination;
    } else {
      unvisitedCities.add(source);
      pathMap[source] = destination;
    }
  }

  while (unvisitedCities.has(currentCity)) {
    currentCity = pathMap[currentCity];
  }

  return currentCity;
}

//Solution 5: 44ms 45.50 MB
function destCity(paths: string[][]): string {
  const pathsMap = {};
  let currentCity = paths[0][1];

  for (const [source, destination] of paths) {
    pathsMap[source] = destination;
  }

  while (pathsMap[currentCity]) {
    currentCity = pathsMap[currentCity];
  }

  return currentCity;
}
