// 17-M-电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
//  维护一个队列。起初让空字符串入列，让当前层的字符串逐个出列，出列的字符串，会构建它下一层的新字母串，并入列。
//  一层层地，考察到数字串的最末位，就到了最底一层，此时队列中存的是所有构建完毕的字母串，返回 queue 即可。
//  这里控制了层序遍历的深度，为 digits 的长度，而不是while(queue.length){...}那样让所有的节点入列出列，最后还会剩下最后一层节点，留在 queue 中返回。
 var letterCombinations = function(digits) {
  if (digits.length == 0) return [];
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  const queue = [];
  queue.push('');
  for (let i = 0; i < digits.length; i++) { // bfs层数，即digits长度
    const levelSize = queue.length; // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) { // 逐个让当前层的节点出列
      const curStr = queue.shift(); /// 出列
      const letters = map[digits[i]];
      for (const l of letters) {
        queue.push(curStr + l); // 生成新的字母串入列
      }
    }
  }
  return queue; // 队列中全是最后一层生成的字母串
};

// 递归解法
const letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const res = [];
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
  const dfs = (curStr, i) => {   // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) { // 指针越界，递归的出口
      res.push(curStr);          // 将解推入res
      return;                    // 结束当前递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应的字母
    for (const letter of letters) { // 一个字母是一个选择，对应一个递归分支
      dfs(curStr + letter, i + 1);  // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
    }
  };
  dfs('', 0); // 递归的入口，初始字符串为''，从下标0开始翻译
  return res;
};