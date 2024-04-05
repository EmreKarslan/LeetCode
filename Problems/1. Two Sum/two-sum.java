// Solution 1: 45ms 44.88 MB
public int[] twoSum(int[] nums, int target) {
  for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return new int[] {i, j};
      }
    }
  }

  return new int[] {};
}

// Solution 2: 2ms 45.08 MB
public int[] twoSum(int[] nums, int target) {
  Map<Integer, Integer> numberIndiciesMap = new HashMap<>();

  for (int i = 0; i < nums.length; i++) {
    int currentNumber = nums[i];
    int possiblePairNumber = target - currentNumber;

    if (numberIndiciesMap.containsKey(possiblePairNumber)) {
      return new int[] {numberIndiciesMap.get(possiblePairNumber), i};
    }

    numberIndiciesMap.put(currentNumber, i);
  }

  return new int[] {};
}

// Solution 3: 0ms 44.59 MB
public int[] twoSum(int[] nums, int target) {
  for (int i = 1; i < nums.length; i++) {
    for (int j = i; j < nums.length; j++) {
      if (nums[j] + nums[j - i] == target) {
        return new int[] {j, j - i};
      }
    }
  }

  return new int[] {};
}