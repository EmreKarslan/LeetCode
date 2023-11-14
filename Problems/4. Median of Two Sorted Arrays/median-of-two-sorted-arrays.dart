//Solution: 353ms 156.3 MB
class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    List<int> combinedArray = [...nums1, ...nums2];
    combinedArray.sort();

    int length = combinedArray.length;
    double median = length / 2;

    if (median.floor() == median) {
      int lowerMedianIndex = (median - 1).toInt();
      int upperMedianIndex = median.toInt();
      return (combinedArray[lowerMedianIndex] + combinedArray[upperMedianIndex]) / 2;
    } else {
      return combinedArray[median.floor()].toDouble();
    }
  }
}

//Solution: 335ms 149.57 MB
class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    int totalLength = nums1.length + nums2.length;
    int medianIndex = totalLength ~/ 2;

    int i = 0, j = 0;
    int current = 0, previous = 0;

    for (int count = 0; count <= medianIndex; count++) {
      previous = current;

      if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
        current = nums1[i++];
      } else {
        current = nums2[j++];
      }
    }

    if (totalLength.isEven) {
      return (previous + current) / 2.0;
    } else {
      return current.toDouble();
    }
  }
}