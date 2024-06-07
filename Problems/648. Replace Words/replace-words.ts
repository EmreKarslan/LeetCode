//Solution 1: Time Limit Exceed
function replaceWords(dictionary: string[], sentence: string): string {
  const dictionarySet = new Set(dictionary);
  const words = sentence.split(" ");
  let result = "";

  for (const word of words) {
    let prefix = "";
    for (let i = 0; i < word.length; i++) {
      prefix += word[i];
      if (dictionarySet.has(prefix)) {
        result += prefix + " ";
        prefix = "";
        break;
      }
    }

    if (prefix !== "") {
      result += word + " ";
    }
  }

  return result.trimEnd();
}

//Solution 2: 110ms 75.91 MB
class TrieNode {
  children: TrieNode[] = Array(26);
  isEndOfWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[index]) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
  }

  findPrefix(word: string): string {
    let node = this.root;
    let prefix = "";
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[index]) break;
      node = node.children[index];
      prefix += char;
      if (node.isEndOfWord) return prefix;
    }
    return "";
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }

  return sentence
    .split(" ")
    .map((word) => {
      const prefix = trie.findPrefix(word);
      return prefix || word;
    })
    .join(" ");
}

//Solution 3: 95ms 70.96 MB
class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  findPrefix(word: string): string {
    let node = this.root;
    let prefix = "";
    for (const char of word) {
      if (!node.children[char]) break;
      node = node.children[char];
      prefix += char;
      if (node.isEndOfWord) return prefix;
    }
    return "";
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }

  return sentence
    .split(" ")
    .map((word) => {
      const prefix = trie.findPrefix(word);
      return prefix || word;
    })
    .join(" ");
}
