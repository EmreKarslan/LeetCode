/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//Solution 1: 0ms 41.04 MB
class Solution {
  public int sumOfLeftLeaves(TreeNode root) {
    return sumOfLeftNodes(root.left, true) + sumOfLeftNodes(root.right, false);
  }

  public int sumOfLeftNodes(TreeNode node, boolean isLeft) {
    if (node == null) {
      return 0;
    }

    if (node.left == null && node.right == null) {
      return isLeft ? node.val : 0;
    }

    return sumOfLeftNodes(node.left, true) + sumOfLeftNodes(node.right, false);
  }
}