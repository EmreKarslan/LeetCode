//Solution 1: 285ms 149.4 MB
class Solution {
  String getPartAfterChar(String inputString, String char) {
    return inputString.contains(char) ? inputString.split(char).last + char : inputString + char;
  }
  
  int lengthOfLongestSubstring(String s) {
    if (s.isEmpty) {
      return 0;
    }

    int longestSubstring = 1;
    String currentSubstring = s[0];

    for (int i = 1; i < s.length; i++) {
      currentSubstring = getPartAfterChar(currentSubstring, s[i]);
      longestSubstring = max(longestSubstring,currentSubstring.length);
    }

    return longestSubstring;
  }
}

//Solution 2: 260ms 142.6 MB
class Solution {
  int lengthOfLongestSubstring(String s) {
    int maxSubstringLength = 0;
    List<String> currentSubstring = [];

    for (int i = 0; i < s.length; i++) {
      int indexOfChar = currentSubstring.indexOf(s[i]);
      
      if (indexOfChar != -1) {
        currentSubstring.removeRange(0, indexOfChar + 1);
      }
      
      currentSubstring.add(s[i]);
      maxSubstringLength = max(maxSubstringLength, currentSubstring.length);
    }

    return maxSubstringLength;
  }
}