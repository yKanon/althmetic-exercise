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
// 记录累加和
let sum;
function traverse(root: TreeNode): TreeNode | null {
  if (root === null) return;

  traverse(root.right);

  sum += root.val;
  // 将bst转为累加树
  root.val = sum;

  traverse(root.left);
}

function convertBST(root: TreeNode | null): TreeNode | null {
  sum = 0;
  traverse(root);
  return root;
}
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
// 记录累加和
let sum;
function traverse(root: TreeNode): TreeNode | null {
  if (root === null) return;

  traverse(root.right);

  sum += root.val;
  // 将bst转为累加树
  root.val = sum;

  traverse(root.left);
}

function convertBST(root: TreeNode | null): TreeNode | null {
  sum = 0;
  traverse(root);
  return root;
}
