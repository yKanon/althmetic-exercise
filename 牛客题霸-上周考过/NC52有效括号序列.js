// 给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。

/**
 *
 * @param s string字符串
 * @return bool布尔型
 */
function isValid(s) {
  // write code here
  let flag = true;
  let cur = 0;
  let stack = [];
  while (cur < s.length) {
    let char = s.charAt(cur);
    cur++;
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    if (char === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
        continue;
      } else {
        return (flag = false);
      }
    }
    if (char === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
        continue;
      } else {
        return (flag = false);
      }
    }
    if (char === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        continue;
      } else {
        return (flag = false);
      }
    }
  }
  if (stack.length > 0) return (flag = false);
  return flag;
}
module.exports = {
  isValid: isValid,
};
