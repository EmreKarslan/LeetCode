/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

//Solution 1: 0ms 40.95 MB
class Solution {
  public int sumNumbers(TreeNode root) {
    return calculatePathSum(root, 0);
  }

  public int calculatePathSum(TreeNode node, int currentSum) {
    if (node == null)
      return 0;

    int newPathSum = currentSum * 10 + node.val;

    if (node.left == null && node.right == null)
      return newPathSum;

    return calculatePathSum(node.left, newPathSum)
        + calculatePathSum(node.right, newPathSum);
  }
}