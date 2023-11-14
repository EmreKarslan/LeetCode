//Solution 1: 446ms 162 MB
class Solution {
  bool isPalindrome(int x) {
    String xString=x.toString();
    return xString==xString.split("").reversed.join()?true:false;
  }
}

//Solution 2: 407ms 156.5 MB
class Solution {
  bool isPalindrome(int x) {
    if (x < 0) {
      return false;
    }

    if (x < 10) {
      return true;
    }

    int xCopy = x;
    int reversedX = 0;
    int numberOfDigits = x.toString().length - 1;

    while (xCopy != 0) {
      reversedX += (xCopy % 10 * pow(10, numberOfDigits)).toInt();
      xCopy ~/= 10;
      numberOfDigits--;
    }

    return reversedX == x;
  }
}