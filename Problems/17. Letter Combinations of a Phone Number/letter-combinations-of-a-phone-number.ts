//Solution 1: 52ms 44.30 MB
const letters = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

function letterCombinations(digits: string): string[] {
  if (digits === "") return [];

  const result: string[] = [];

  function generateCombinations(current: string, index: number) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const digit = parseInt(digits[index]);
    const possibleLetters = letters[digit - 2];

    for (const letter of possibleLetters) {
      generateCombinations(current + letter, index + 1);
    }
  }

  generateCombinations("", 0);

  return result;
}

//Solution 2: 50ms 43 MB
const mapping: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits === "") return [];

  const result: string[] = [];

  function generateCombinations(current: string, index: number) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const possibleLetters = mapping[digits[index]];

    for (const letter of possibleLetters) {
      generateCombinations(current + letter, index + 1);
    }
  }

  generateCombinations("", 0);

  return result;
}

//Solution 3: 44ms 43 MB
const mapping: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits === "") return [];

  const combinations: Set<string> = new Set();

  function generateCombinations(current: string, index: number) {
    if (index === digits.length) {
      combinations.add(current);
      return;
    }

    const possibleLetters = mapping[digits[index]];

    for (const letter of possibleLetters) {
      generateCombinations(current + letter, index + 1);
    }
  }

  generateCombinations("", 0);

  return Array.from(combinations);
}
