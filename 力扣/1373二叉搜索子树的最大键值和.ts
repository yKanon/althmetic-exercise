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
let maxSum;
function maxSumBST(root: TreeNode | null): number {
  maxSum = 0;
  traverse(root);
  return maxSum;
}

type Res = {
  isBst: boolean;
  min: number;
  max: number;
  sum: number;
};

function traverse(root: TreeNode | null): Res {
  if (root === null)
    return {
      isBst: true,
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER,
      sum: 0,
    };

  const left = traverse(root.left);
  const right = traverse(root.right);
  let res = Object.create(null);
  // 以 root 为根的二叉树，是否是二叉 bst
  if (
    left.isBst &&
    right.isBst &&
    left.max < root.val &&
    right.min > root.val
  ) {
    res.isBst = true;
    res.min = Math.min(left.min, root.val);
    res.max = Math.max(right.max, root.val);
    res.sum = left.sum + root.val + right.sum;
    maxSum = Math.max(maxSum, res.sum);
  } else {
    res.isBst = false;
  }

  return res;
}
