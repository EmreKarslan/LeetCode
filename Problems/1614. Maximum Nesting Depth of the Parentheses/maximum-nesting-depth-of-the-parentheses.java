//Solution 1: 0ms 40.95 MB
class Solution {
    public int maxDepth(String s) {
        int maxDepth=0;
        int currentDepth=0;

        for(int i=0;i<s.length();i++){
            char currentChar=s.charAt(i);
            if(currentChar=='('){
                currentDepth+=1;

                if(maxDepth<currentDepth){
                    maxDepth=currentDepth;
                }
            }else if(currentChar==')'){
                currentDepth-=1;
            }
        }

        return maxDepth;
    }
}