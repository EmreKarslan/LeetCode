//Solution 1: 16ms 55.34 MB
class Solution {
  class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord = false;
  }

  class Trie {
    TrieNode root = new TrieNode();

    public void insert(String word) {
      TrieNode node = root;
      for (char c : word.toCharArray()) {
        if (!node.children.containsKey(c)) {
          node.children.put(c, new TrieNode());
        }
        node = node.children.get(c);
      }
      node.isEndOfWord = true;
    }

    public String findPrefix(String word) {
      TrieNode node = root;
      StringBuilder prefix = new StringBuilder();

      for (char c : word.toCharArray()) {
        if (!node.children.containsKey(c)) {
          break;
        }
        node = node.children.get(c);
        prefix.append(c);
        if (node.isEndOfWord) {
          return prefix.toString();
        }
      }

      return "";
    }
  }

  public String replaceWords(List<String> dictionary, String sentence) {
    Trie trie = new Trie();

    for (String word : dictionary) {
      trie.insert(word);
    }

    String[] words = sentence.split(" ");
    StringBuilder result = new StringBuilder();

    for (String word : words) {
      String prefix = trie.findPrefix(word);
      if (!prefix.isEmpty()) {
        result.append(prefix).append(" ");
      } else {
        result.append(word).append(" ");
      }
    }

    return result.toString().trim();
  }
}

//Solution 2: 10ms 55.40 MB
class Solution {
  class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
  }

  class Trie {
    TrieNode root = new TrieNode();

    public void insert(String word) {
      TrieNode node = root;
      for (char c : word.toCharArray()) {
        int key = c - 'a';
        if (node.children[key] == null) {
          node.children[key] = new TrieNode();
        }
        node = node.children[key];
      }
      node.isEndOfWord = true;
    }

    public String findPrefix(String word) {
      TrieNode node = root;
      StringBuilder prefix = new StringBuilder();

      for (char c : word.toCharArray()) {
        int key = c - 'a';
        if (node.children[key] == null) {
          break;
        }
        node = node.children[key];
        prefix.append(c);
        if (node.isEndOfWord) {
          return prefix.toString();
        }
      }

      return "";
    }
  }

  public String replaceWords(List<String> dictionary, String sentence) {
    Trie trie = new Trie();

    for (String word : dictionary) {
      trie.insert(word);
    }

    String[] words = sentence.split(" ");
    StringBuilder result = new StringBuilder();

    for (String word : words) {
      String prefix = trie.findPrefix(word);
      if (!prefix.isEmpty()) {
        result.append(prefix).append(" ");
      } else {
        result.append(word).append(" ");
      }
    }

    return result.toString().trim();
  }
}