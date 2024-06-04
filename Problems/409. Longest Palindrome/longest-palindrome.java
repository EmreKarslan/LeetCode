//Solution 1: 8ms 41.36 MB
class Solution {
  public int longestPalindrome(String s) {
    Map<Character, Integer> freqMap = new HashMap<>();

    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
    }

    int length = 0;
    boolean hasOddCount = false;

    for (int value : freqMap.values()) {
      if (value % 2 == 0) {
        length += value;
      } else {
        length += value - 1;
        hasOddCount = true;
      }
    }

    return length + (hasOddCount ? 1 : 0);
  }
}

//Solution 2: 6ms 42.14 MB
class Solution {
  public int longestPalindrome(String s) {
    Set<Character> hashSet = new HashSet<>();

    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      if (hashSet.contains(ch)) {
        hashSet.remove(ch);
      } else {
        hashSet.add(ch);
      }
    }

    if (hashSet.size() > 1) {
      return s.length() - hashSet.size() + 1;
    }

    return s.length();
  }
}

//Solution 3: 2ms 41.32 MB
class Solution {
  public int longestPalindrome(String s) {
    int freqs[] = new int[58];

    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      freqs[ch - 'A'] += 1;
    }

    int length = 0;
    boolean hasOddCount = false;

    for (int freq : freqs) {
      if (freq % 2 == 0) {
        length += freq;
      } else {
        length += freq - 1;
        hasOddCount = true;
      }
    }

    return length + (hasOddCount ? 1 : 0);
  }
}

//Solution 4: 1ms 41.52 MB
class Solution {
  public int longestPalindrome(String s) {
    int[] freqs = new int[58];
    int sLength = s.length();
    char[] sCharArray = s.toCharArray();

    for (int i = 0; i < sLength; i++) {
      char ch = sCharArray[i];
      freqs[ch - 'A'] += 1;
    }

    int length = 0;
    boolean hasOddCount = false;

    for (int freq : freqs) {
      if (freq % 2 == 0) {
        length += freq;
      } else {
        length += freq - 1;
        hasOddCount = true;
      }
    }

    return length + (hasOddCount ? 1 : 0);
  }
}

//Solution 5: 1ms 41.24 MB
class Solution {
  public int longestPalindrome(String s) {
    int freqs[] = new int[58];

    for (char ch : s.toCharArray()) {
      freqs[ch - 'A'] += 1;
    }

    int length = 0;
    boolean hasOddCount = false;

    for (int freq : freqs) {
      if (freq % 2 == 0) {
        length += freq;
      } else {
        length += freq - 1;
        hasOddCount = true;
      }
    }

    return length + (hasOddCount ? 1 : 0);
  }
}