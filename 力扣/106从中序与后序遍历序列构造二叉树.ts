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
function build(
  inorder: number[],
  inStart: number,
  inEnd,
  postorder: number[],
  postStart: number,
  postEnd: number
): TreeNode | null {
  if (inStart > inEnd) return null;

  // 获取根节点的值
  let rootVal = postorder[postEnd];
  // 根据根节点的值查找index
  let index = inorder.indexOf(rootVal);

  let root = new TreeNode(rootVal);

  let leftSize = index - inStart;

  // 递归构造左右子树
  root.left = build(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  );
  root.right = build(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  );

  return root;
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
}
