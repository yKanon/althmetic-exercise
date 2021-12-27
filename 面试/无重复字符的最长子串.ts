function lengthOfLongestSubstring(s: string): number {
  // 滑动窗口
  // 初始化右指针；集合，记录无重复字符集合
  let right = 0,
    set = new Set(),
    len = s.length,
    result = 0;

  for (let i = 0; i < len; i++) {
    if (i !== 0) set.delete(s[i - 1]);

    // 右指针右移
    while (right < len && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }

    result = Math.max(result, right - i);
  }

  return result;
}
