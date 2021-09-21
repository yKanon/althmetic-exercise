/*
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
//  记录结果
let res;
//  记录当前元素排名
let rank;

function traverse(root: TreeNode, k: number): TreeNode | null {
  if (root === null) return null;

  traverse(root.left, k);
  rank++;
  if (k === rank) {
    res = root.val;
    return;
  }

  traverse(root.right, k);
}
function kthSmallest(root: TreeNode | null, k: number): number {
  res = 0;
  rank = 0;
  traverse(root, k);
  return res;
}
