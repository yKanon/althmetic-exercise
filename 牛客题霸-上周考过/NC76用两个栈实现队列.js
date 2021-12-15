// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let pushStack = [];
let popStack = [];
function push(node) {
  // write code here
  pushStack.push(node);
}
function pop() {
  // write code here
  if (popStack.length === 0) {
    while (pushStack.length !== 0) {
      popStack.push(pushStack.pop());
    }
  }
  return popStack.pop();
}
module.exports = {
  push: push,
  pop: pop,
};
