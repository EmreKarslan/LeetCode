//Solution 1: Time Limit Exceed
function* getPermutations(arr: string[]): Generator<string[]> {
  if (arr.length === 1) {
    yield arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      for (const p of getPermutations(rest)) {
        yield [arr[i], ...p];
      }
    }
  }
}

function generateConcatenatedCombinations(words: string[]): string[] {
  const allCombinations: string[] = [];

  const wordPermutations = getPermutations(words);

  for (const perm of wordPermutations) {
    allCombinations.push(perm.join(""));
  }

  return allCombinations;
}

function findAllSubstringIndices(
  mainString: string,
  substring: string
): number[] {
  const indices: number[] = [];
  let index = mainString.indexOf(substring);

  while (index !== -1) {
    indices.push(index);
    index = mainString.indexOf(substring, index + 1);
  }

  return indices;
}

function findSubstring(s: string, words: string[]): number[] {
  const concatenatedCombinations = generateConcatenatedCombinations(words);
  const concatenatedCombinationsIndices = new Set<number>();
  for (const concatenatedCombination of concatenatedCombinations) {
    const indices = findAllSubstringIndices(s, concatenatedCombination);
    indices.forEach((indice) => concatenatedCombinationsIndices.add(indice));
  }

  return Array.from(concatenatedCombinationsIndices);
}
