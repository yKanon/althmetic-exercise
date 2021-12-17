/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = []

  function recursion(root, depth) {
    if (root === null) return
    if (!result[depth]) {
      result[depth] = []
    }
    result[depth].push(root.val)

    recursion(root.left, depth + 1)
    recursion(root.right, depth + 1)
  }
  recursion(root, 0)

  return result
};