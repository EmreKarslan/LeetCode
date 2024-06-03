//Solution 1: 6ms 44.84 MB
class Solution {
  public int appendCharacters(String s, String t) {
    int tPointer = 0;
    int sPointer = 0;

    while (sPointer < s.length() && tPointer < t.length()) {
      if (s.charAt(sPointer) == t.charAt(tPointer)) {
        tPointer++;
      }

      sPointer++;
    }

    return t.length() - tPointer;
  }
}

//Solution 2: 4ms 45.06 MB
class Solution {
  public int appendCharacters(String s, String t) {
    int tPointer = 0;
    int sPointer = 0;
    int sLength = s.length();
    int tLength = t.length();

    while (sPointer < sLength && tPointer < tLength) {
      if (s.charAt(sPointer) == t.charAt(tPointer)) {
        tPointer++;
      }

      sPointer++;
    }

    return t.length() - tPointer;
  }
}

//Solution 3: 3ms 45.39 MB
class Solution {
  public int appendCharacters(String s, String t) {
    int tPointer = 0;
    int sPointer = 0;
    int sLength = s.length();
    int tLength = t.length();
    char[] sCharArray = s.toCharArray();
    char[] tCharArray = t.toCharArray();

    while (sPointer < sLength && tPointer < tLength) {
      if (sCharArray[sPointer] == tCharArray[tPointer]) {
        tPointer++;
      }

      sPointer++;
    }

    return tLength - tPointer;
  }
}

//Solution 4: 3ms 45.13 MB
class Solution {
  public int appendCharacters(String s, String t) {
    int tPointer = 0;
    int sLength = s.length();
    int tLength = t.length();

    char[] sCharArray = s.toCharArray();
    char[] tCharArray = t.toCharArray();

    for (int sPointer = 0; sPointer < sLength; sPointer++) {
      if (tPointer < tLength && sCharArray[sPointer] == tCharArray[tPointer]) {
        tPointer++;
      }
    }

    return tLength - tPointer;
  }
}

//Solution 5: 2ms 45.12 MB
class Solution {
  public int appendCharacters(String s, String t) {
    if (s.equals(t))
      return 0;

    int sPointer = -1;
    int tPointer = 0;
    int sLength = s.length();
    int tLength = t.length();

    char[] sCharArray = s.toCharArray();
    char[] tCharArray = t.toCharArray();

    while (++sPointer < sLength) {
      if (tCharArray[tPointer] == sCharArray[sPointer]) {
        if (++tPointer == tLength) {
          break;
        }
      }
    }

    return tLength - tPointer;
  }
}