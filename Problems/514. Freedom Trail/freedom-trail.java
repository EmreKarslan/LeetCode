import java.util.*;

//Solution 1: Time Limit Exceeded
class Solution {
    HashMap<Character, List<Integer>> buttonMap = new HashMap<>();
    int ringLength=0;
    public int findMinStep(int currentRingIndex,int currentKeyIndex,int stepCount, String key){
        if(currentKeyIndex==key.length()){
            return stepCount;
        }
        int stepCost=Integer.MAX_VALUE;
        //Todo add memo;
        List<Integer> positions = buttonMap.get(key.charAt(currentKeyIndex));
        for(int i=0;i<positions.size();i++){
            int position=positions.get(i);
            int innerPath=Math.abs(currentRingIndex-position);
            int outerPath=position<currentRingIndex?
                Math.abs(currentRingIndex-(position+ringLength)):
                Math.abs(position-(currentRingIndex+ringLength));
            int minStep=Math.min(innerPath,outerPath);
            stepCost=Math.min(stepCost, findMinStep(position,currentKeyIndex+1,stepCount+minStep+1,key));
        }

        return stepCost;
    }

    public int findRotateSteps(String ring, String key) {
        ringLength=ring.length();
        for (int i = 0; i < ringLength; i++) {
            char currentChar = ring.charAt(i);
            if (buttonMap.containsKey(currentChar)) {
                List<Integer> positions = buttonMap.get(currentChar);
                positions.add(i);
            } else {
                List<Integer> positions = new ArrayList<>();
                positions.add(i);
                buttonMap.put(currentChar, positions);
            }
        }

        return findMinStep(0,0,0,key);
    }
}

//Solution 2: 5ms 44.62 MB
class Solution {
    private List<Integer>[] buttonPositions;
    private int[][] memo;
    private int ringSize;

    private int findMinSteps(int currentRingIndex, int currentKeyIndex, String key) {
        if (currentKeyIndex == key.length()) {
            return 0;
        }

        if (memo[currentRingIndex][currentKeyIndex] != 0) {
            return memo[currentRingIndex][currentKeyIndex];
        }

        int steps = Integer.MAX_VALUE;
        List<Integer> positions = buttonPositions[key.charAt(currentKeyIndex) - 'a'];
        for (int position : positions) {
            int distance = Math.abs(currentRingIndex - position);
            int clockwiseSteps = Math.min(distance, ringSize - distance);
            int cost = clockwiseSteps + findMinSteps(position, currentKeyIndex + 1, key);
            steps = Math.min(steps, cost);
        }
        memo[currentRingIndex][currentKeyIndex] = steps;
        return steps;
    }

    public int findRotateSteps(String ring, String key) {
        ringSize = ring.length();
        buttonPositions = new List[26];
        memo = new int[ringSize][key.length()];

        for (int i = 0; i < ringSize; i++) {
            char currentChar = ring.charAt(i);
            if (buttonPositions[currentChar - 'a'] == null) {
                buttonPositions[currentChar - 'a'] = new ArrayList<>();
            }
            buttonPositions[currentChar - 'a'].add(i);
        }

        return findMinSteps(0, 0, key) + key.length();
    }
}