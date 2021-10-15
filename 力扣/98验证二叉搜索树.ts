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
// 以root为根的子树节点必须满足max.val > root.val > min.val
function isValid(root: TreeNode, min: TreeNode, max: TreeNode): boolean {
  // base case
  if (root === null) {
    return true;
  }

  // 如果 root.val 不符合max和min的限制，说明不是合法 BST
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;

  // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
  return isValid(root.left, min, root) && isValid(root.right, root, max);
}

function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, null, null);
}
