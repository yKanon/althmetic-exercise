// 链表中的节点每k个一组翻转

// 将给出的链表中的节点每\ k k 个一组翻转，返回翻转后的链表
// 如果链表中的节点数不是\ k k 的倍数，将最后剩下的节点保持原样
// 你不能更改节点中的值，只能更改节点本身。
// 要求空间复杂度 \ O(1) O(1)
// 例如：
// 给定的链表是1\to2\to3\to4\to51→2→3→4→5
// 对于 \ k = 2 k=2, 你应该返回 2\to 1\to 4\to 3\to 52→1→4→3→5
// 对于 \ k = 3 k=3, 你应该返回 3\to2 \to1 \to 4\to 53→2→1→4→5

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  // write code here

  const reverse = (node) => {
    if (!head || !head.next || k === 1) return head;

    let cur = node;
    let count = 0;

    while (cur && count !== k) {
      cur = cur.next;
      count++;
    }

    if (count === k) {
      cur = reverse(cur);
      // 反转链表
      while (count) {
        let temp = node.next;
        node.next = cur;
        cur = node;
        node = temp;
        count--;
      }
      node = cur;
    }
    return node;
  };
  return reverse(head);
}
module.exports = {
  reverseKGroup: reverseKGroup,
};
