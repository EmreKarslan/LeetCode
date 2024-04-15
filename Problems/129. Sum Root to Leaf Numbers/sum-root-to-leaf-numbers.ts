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

//Solution 1: 35ms 52.00 MB
function sumNumbers(root: TreeNode | null): number {
  return calculatePathSum(root, 0);
}

function calculatePathSum(node: TreeNode | null, currentSum: number): number {
  if (!node) return 0;

  const newPathSum = currentSum * 10 + node.val;

  if (!node.left && !node.right) {
    return newPathSum;
  }

  return (
    calculatePathSum(node.left, newPathSum) +
    calculatePathSum(node.right, newPathSum)
  );
}
