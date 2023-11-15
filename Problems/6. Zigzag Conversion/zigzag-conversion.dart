//Solution: 281ms 163.2 MB
class Solution {
  String convert(String s, int numRows) {
    if(numRows==1){
        return s;
    }
    if(s.length==1){
        return s;
    }

    int row=0;
    int currentIndex=0;
    int length=s.length;
    int itr=(numRows-1)*2;
    int currentItr=itr;
    String answer="";
    while(answer.length<length){
        answer+=s[currentIndex];
        if(currentIndex+currentItr>length-1){
            row++;
            currentIndex=row;
            if(row==0 || row==numRows-1){
                currentItr=itr;
            }else{
                currentItr=itr-(2*row);
            }
        }else{
            if(row==0 || row==numRows-1){
                currentIndex+=currentItr;
            }else{
                currentIndex+=currentItr;
                currentItr=(itr-currentItr).abs();
            }
        }
    }
    return answer;
  }
}

//Solution: 273ms 151.7 MB
class Solution {
  String convert(String s, int numRows) {
    if (numRows == 1 || s.length == 1) {
      return s;
    }

    int length = s.length;
    int itr = (numRows - 1) * 2;
    StringBuffer answer = StringBuffer();

    for (int row = 0; row < numRows; row++) {
      int currentIndex = row;
      int currentItr = itr;
        if(row!=0 && row!=numRows-1){
            currentItr=itr-(2*row);
        }
      while (currentIndex < length) {
        answer.write(s[currentIndex]);

            currentIndex+=currentItr;

        if(row!=0 && row!=numRows-1){
                        currentItr=(itr-currentItr).abs();

        }
      }
    }

    return answer.toString();
  }
}
