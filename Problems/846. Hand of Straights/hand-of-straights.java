//Solution 1: 310ms 45.86 MB
class Solution {
  public boolean isNStraightHand(int[] hand, int groupSize) {
    if (hand.length % groupSize != 0) {
      return false;
    }
    if (groupSize == 1) {
      return true;
    }

    Arrays.sort(hand);
    int groupCount = hand.length / groupSize;

    for (int i = 0; i < groupCount; i++) {
      int min = hand[0];
      hand = removeElement(hand, 0);
      for (int j = 1; j < groupSize; j++) {
        int next = min + 1;
        int nextIndex = indexOf(hand, next);
        if (nextIndex == -1) {
          return false;
        } else {
          hand = removeElement(hand, nextIndex);
          min = next;
        }
      }
    }
    return true;
  }

  private int indexOf(int[] hand, int value) {
    for (int i = 0; i < hand.length; i++) {
      if (hand[i] == value) {
        return i;
      }
    }
    return -1;
  }

  private int[] removeElement(int[] hand, int index) {
    int[] newHand = new int[hand.length - 1];
    for (int i = 0, j = 0; i < hand.length; i++) {
      if (i != index) {
        newHand[j++] = hand[i];
      }
    }
    return newHand;
  }
}

//Solution 2: 24ms 45.26 MB
class Solution {
  public boolean isNStraightHand(int[] hand, int groupSize) {
    if (hand.length % groupSize != 0) {
      return false;
    }
    if (groupSize == 1) {
      return true;
    }

    Arrays.sort(hand);
    Map<Integer, Integer> countMap = new HashMap<>();

    for (int card : hand) {
      countMap.put(card, countMap.getOrDefault(card, 0) + 1);
    }

    for (int card : hand) {
      if (countMap.get(card) == 0) {
        continue;
      }

      for (int i = 0; i < groupSize; i++) {
        int currentCard = card + i;
        if (countMap.getOrDefault(currentCard, 0) == 0) {
          return false;
        }
        countMap.put(currentCard, countMap.get(currentCard) - 1);
      }
    }
    return true;
  }
}

//Solution 3: 9ms 44.73 MB
class Solution {
  public boolean isNStraightHand(int[] hand, int groupSize) {
    if (hand.length % groupSize != 0) {
      return false;
    }
    if (groupSize == 1) {
      return true;
    }

    Arrays.sort(
        hand); // Sort the hand to make it easier to form sequential groups

    for (int i = 0; i <= hand.length - groupSize; i++) {
      if (hand[i] == -1) {
        continue;
      }

      int min = hand[i];
      int currentGroupSize = 1;
      hand[i] = -1;

      for (int j = i + 1; j < hand.length; j++) {
        if (currentGroupSize == groupSize) {
          break;
        }
        if (hand[j] == -1) {
          continue;
        }
        if (hand[j] == min + 1) {
          currentGroupSize++;
          hand[j] = -1;
          min++;
        }
      }

      if (currentGroupSize != groupSize) {
        return false;
      }
    }

    return true;
  }
}