//Solution: 262ms 143.1 MB
class Solution {
  int reverse(int x) {
    bool isNegative = x < 0 ? true : false;

    int xCopy = x.abs();
    int reversedX = 0;

    while (xCopy != 0) {
      reversedX = reversedX * 10 + xCopy % 10;
      xCopy ~/= 10;
    }

    if (reversedX < pow(-2, 31) || reversedX > (pow(2, 31) - 1)) {
      return 0;
    }

    return isNegative ? -reversedX : reversedX;
  }
}

//Solution: 257ms 143.16MB
class Solution {
  int reverse(int x) {
    bool isNegative = x < 0;
    x=x.abs();

    int reversedX = 0;

    while (x != 0) {
      reversedX = reversedX * 10 + x % 10;
      x ~/= 10;
    }

    if (reversedX > 2147483647 || reversedX < -2147483648) {
      return 0;
    }

    return isNegative ? -reversedX : reversedX;
  }
}