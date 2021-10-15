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

function generateTree(start: number, end: number): TreeNode[] {
  let res: TreeNode[] = [];
  if (start > end) {
    res.push(null);
    return res;
  }

  // 穷举root节点的所有可能
  for (let i = start; i <= end; i++) {
    //  构造出左右子树的所有合法BST
    let leftTree = generateTree(start, i - 1);
    let rightTree = generateTree(i + 1, end);

    // root为根节点，穷举所有左右子树的组合
    leftTree.forEach((left) => {
      rightTree.forEach((right) => {
        let rootNode = new TreeNode(i);
        rootNode.left = left;
        rootNode.right = right;
        res.push(rootNode);
      });
    });
  }

  return res;
}

function generateTrees(n: number): Array<TreeNode | null> {
  return generateTree(1, n);
}
