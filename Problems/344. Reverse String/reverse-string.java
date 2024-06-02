//Solution 1: 0ms 49.18 MB
class Solution {
  public void reverseString(char[] s) {
    int left = -1;
    int right = s.length;

    while (++left < --right) {
      char temp = s[left];
      s[left] = s[right];
      s[right] = temp;
    }
  }
}

//Solution 2: 0ms 45.22 MB
class Solution {
  public void reverseString(char[] s) {
    int left = 0;
    int right = s.length - 1;

    while (left < right) {
      char temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left++;
      right--;
    }
  }
}

//Solution 3: 0ms 45.24 MB
class Solution {
  public void reverseString(char[] s) {
    int mid = s.length / 2;
    int length = s.length;

    for (int left = 0; left < mid; left++) {
      char temp = s[left];
      s[left] = s[length - left - 1];
      s[length - left - 1] = temp;
    }
  }
}