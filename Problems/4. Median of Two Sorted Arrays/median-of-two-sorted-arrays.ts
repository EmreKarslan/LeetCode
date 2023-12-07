//Solution 1: 82ms 48.32 MB
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const combinedNums = [...nums1, ...nums2].sort((a, b) => a - b);
  const sizeOfCombinedNums = combinedNums.length;

  return (
    (combinedNums[Math.floor((sizeOfCombinedNums - 1) / 2)] +
      combinedNums[Math.floor(sizeOfCombinedNums / 2)]) /
    2
  );
}
