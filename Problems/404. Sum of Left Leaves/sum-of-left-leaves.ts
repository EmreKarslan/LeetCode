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

//Solution 1: 56ms 52.17 MB
function sumOfLeftLeaves(
  root: TreeNode | null,
  isLeft: boolean = false
): number {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return isLeft ? root.val : 0;
  }

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
}

//Solution 2: 53ms 52.78 MB
function sumOfLeftLeaves(root: TreeNode | null): number {
  function isLeaf(node: TreeNode | null): boolean {
    return node !== null && node.left === null && node.right === null;
  }

  function sumOfLeftNodes(node: TreeNode | null, isLeft: boolean): number {
    if (!node) {
      return 0;
    }

    if (isLeaf(node) && isLeft) {
      return node.val;
    }

    return sumOfLeftNodes(node.left, true) + sumOfLeftNodes(node.right, false);
  }

  return sumOfLeftNodes(root, false);
}

//Solution 3: 50ms 51.92 MB
function sumOfLeftLeaves(root: TreeNode | null): number {
  function isLeaf(node: TreeNode | null): boolean {
    return node !== null && node.left === null && node.right === null;
  }

  function sumOfLeftNodes(node: TreeNode | null, isLeft: boolean): number {
    if (!node) {
      return 0;
    }

    if (isLeaf(node)) {
      return isLeft ? node.val : 0;
    }

    return sumOfLeftNodes(node.left, true) + sumOfLeftNodes(node.right, false);
  }

  return sumOfLeftNodes(root, false);
}
