// 389-E-找不同
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  //  计数值
  const cnt = new Array(26).fill(0);
  // 首先遍历s
  for (const ch of s) {
    // 对其中每个字母都将计数值加一
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }
  // 然后遍历t
  for (const ch of t) {
    // 对其中每个字母都将计数值减一
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]--;
    // 而如果有字母计数为负说明这个字母在t中比在s中多出现一次，所以他就是被添加的字母
    if (cnt[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return ch;
    }
  }
  return ' ';
};

// 字符串的t所有字母ascll码之和减去字符串s所有字母ascll码之和
var findTheDifference = function (s, t) {
  let sSum = 0,
    tSum = 0;
  for (let i = 0; i < s.length; i++) {
    sSum += s[i].charCodeAt();
  }
  for (let j = 0; j < t.length; j++) {
    tSum += t[j].charCodeAt();
  }
  return String.fromCharCode(tSum - sSum);
}