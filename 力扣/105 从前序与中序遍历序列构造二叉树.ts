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

// 构建二叉树，返回二叉树根节点
function build(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number
): TreeNode | null {
  if (preStart > preEnd) {
    return null;
  }
  // root节点为前序遍历数组的第一个元素
  let rootVal = preorder[preStart];
  // rootVal在中序遍历数组中的索引
  let index = inorder.indexOf(rootVal);

  let root = new TreeNode(rootVal);

  let leftSize = index - inStart;
  // 递归构造左右子树
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  );
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );

  return root;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
}
