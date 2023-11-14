//Solution 1: 342ms 143.29 MB
class Solution {
  List<int> twoSum(List<int> nums, int target) {
    for(int i=0;i<nums.length-1;i++){
      for(int j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
          return [i,j];
        }
      }
    }

    return [-1];
  }
}

//Solution 2: 270ms 149.5 MB
class Solution {
  int binarySearch(List<int> sortedList, int target) {
    int low = 0;
    int high = sortedList.length - 1;

    while (low <= high) {
      int mid = (low + high) ~/ 2;
      int midValue = sortedList[mid];

      if (midValue == target) {
        return mid; // Target found, return the index
      } else if (midValue < target) {
        low = mid + 1; // Target is in the right half
      } else {
        high = mid - 1; // Target is in the left half
      }
    }

    return -1; // Target not found
  }

  List<int?> twoSum(List<int> nums, int target) {
    Map<int, List<int>> pos = {};

    for (int i = 0; i < nums.length; i++) {
      int value = nums[i];
      if (!pos.containsKey(value)) {
        pos[value] = [];
      }
      pos[value]!.add(i);
    }

    nums.sort();

    for (int i = 0; i < nums.length; i++) {
      int tempTarget = target - nums[i];
      int targetIndex = binarySearch(nums, tempTarget);

      if (targetIndex != -1 && targetIndex != i) {
        int index1 = pos[nums[i]]![0];
        int index2 = pos[nums[targetIndex]]![0];

        if (index1 != index2) {
          return [index1, index2];
        } else if (pos[nums[targetIndex]]!.length > 1) {
          return [index1, pos[nums[targetIndex]]![1]];
        } else {
          return [index1, -1];
        }
      }
    }

    return [-1];
  }
}

//Solution 3: 225ms 143.68 MB
class Solution {
  List<int> twoSum(List<int> nums, int target) {
    Map<int, int> pos = {};

    for (int i = 0; i < nums.length; i++) {
      int value = nums[i];
      pos[value]=i;
    }

    for (int i = 0; i < nums.length; i++) {
      int tempTarget = target - nums[i];

      if (pos.containsKey(tempTarget) && i!=pos[tempTarget]) {
          return [i, pos[tempTarget]!];
      }
    }

    return [-1];
  }
}

//Solution 4: 220ms 143.12 MB
class Solution {
  List<int> twoSum(List<int> nums, int target) {
    Map<int, int> pos = {};

    for (int i = 0; i < nums.length; i++) {
      int value = nums[i];

      int tempTarget = target - nums[i];

      if (pos.containsKey(tempTarget)) {
          return [pos[tempTarget]!,i];
      }
      pos[value]=i;
    }
    return [-1];
  }
}