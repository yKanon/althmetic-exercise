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
// 返回的列表
let res: Array<TreeNode | null>;
// 缓存每个节点的结构描述
let memo: Record<string, number>;

function traverse(root: TreeNode) {
  if (root === null) return "#";

  let left = traverse(root.left);

  let right = traverse(root.right);

  let subTree = `${left},${right},${root.val}`;

  if (!memo[subTree]) {
    memo[subTree] = 0;
  }
  memo[subTree] += 1;

  if (memo[subTree] === 2) {
    res.push(root);
  }

  return subTree;
}

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  // 在这进行初始化，防止多个测试用例造成数据结构不干净
  res = [];
  memo = Object.create(null);

  traverse(root);

  return res;
}
