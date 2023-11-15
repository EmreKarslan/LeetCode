//Solution: 238ms 143.10 MB
class Solution {
  int myAtoi(String s) {
    s = s.trim();
    if (s.isEmpty) {
      return 0;
    }

    int result = 0;
    int sign = 1;
    int i = 0;

    // Handle sign
    if (s[i] == '-' || s[i] == '+') {
      sign = (s[i++] == '-') ? -1 : 1;
    }

    // Process digits
    while (i < s.length && s[i].compareTo('0') >= 0 && s[i].compareTo('9') <= 0) {
      int digit = int.parse(s[i]);
      
      // Check for overflow during digit processing
      if (result > (2147483647 - digit) ~/ 10) {
        return (sign == 1) ? 2147483647 : -2147483648;
      }

      result = result * 10 + digit;
      i++;
    }

    // Apply sign
    return result * sign;
  }
}