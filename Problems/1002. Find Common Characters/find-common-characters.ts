//Solution 1: 54ms 53.30 MB
const charCodeIndexMap: Map<string, number> = new Map<string, number>([
  ["a", 0],
  ["b", 1],
  ["c", 2],
  ["d", 3],
  ["e", 4],
  ["f", 5],
  ["g", 6],
  ["h", 7],
  ["i", 8],
  ["j", 9],
  ["k", 10],
  ["l", 11],
  ["m", 12],
  ["n", 13],
  ["o", 14],
  ["p", 15],
  ["q", 16],
  ["r", 17],
  ["s", 18],
  ["t", 19],
  ["u", 20],
  ["v", 21],
  ["w", 22],
  ["x", 23],
  ["y", 24],
  ["z", 25],
]);

function getCharFreqs(word: string): number[] {
  const freqs = Array(26).fill(0);

  for (const char of word) {
    const charIndex = charCodeIndexMap.get(char);
    freqs[charIndex]++;
  }

  return freqs;
}

function commonChars(words: string[]): string[] {
  let mostCommonCharFreqs = getCharFreqs(words[0]);

  for (let i = 1; i < words.length; i++) {
    const currentCharFreqs = getCharFreqs(words[i]);

    for (let j = 0; j < 26; j++) {
      mostCommonCharFreqs[j] = Math.min(
        mostCommonCharFreqs[j],
        currentCharFreqs[j]
      );
    }
  }

  const commonChars = [];

  for (let i = 0; i < 26; i++) {
    const currentChar = String.fromCharCode(97 + i);
    for (let j = 0; j < mostCommonCharFreqs[i]; j++) {
      commonChars.push(currentChar);
    }
  }

  return commonChars;
}

//Solution 2: 68ms 53.70 MB
function getCharFreqs(word: string): number[] {
  const freqs = Array(26).fill(0);

  for (const char of word) {
    const charIndex = char.charCodeAt(0) - 97;
    freqs[charIndex]++;
  }

  return freqs;
}

function commonChars(words: string[]): string[] {
  let mostCommonCharFreqs = getCharFreqs(words[0]);

  for (let i = 1; i < words.length; i++) {
    const currentCharFreqs = getCharFreqs(words[i]);

    for (let j = 0; j < 26; j++) {
      mostCommonCharFreqs[j] = Math.min(
        mostCommonCharFreqs[j],
        currentCharFreqs[j]
      );
    }
  }

  const commonChars = [];

  for (let i = 0; i < 26; i++) {
    const currentChar = String.fromCharCode(97 + i);
    for (let j = 0; j < mostCommonCharFreqs[i]; j++) {
      commonChars.push(currentChar);
    }
  }

  return commonChars;
}

//Solution 3: 53ms 51.91 MB
function commonChars(words: string[]) {
  const array = [];
  for (const letter of words[0]) {
    if (words.every((word) => word.includes(letter))) {
      array.push(letter);
      words = words.map((word) => word.replace(letter, ""));
    }
  }

  return array;
}
