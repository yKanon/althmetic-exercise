// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 将索引small-big构造成符合条件的树
function build(nums: number[], small: number, big: number): TreeNode {
  if (small > big) return null;

  // 找到数组中的最大值和对应的索引
  let index = -1,
    maxVal = -1;
  for (let i = small; i <= big; i++) {
    if (maxVal < nums[i]) {
      index = i;
      maxVal = nums[i];
    }
  }

  let node = new TreeNode(maxVal);

  node.left = build(nums, small, index - 1);
  node.right = build(nums, index + 1, big);

  return node;
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return build(nums, 0, nums.length - 1);
}
