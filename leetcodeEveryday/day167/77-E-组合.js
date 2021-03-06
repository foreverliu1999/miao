// 77-E-组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 递归
 var combine = function(n, k) {
  const ans = [];
  const dfs = (cur, n, k, temp) => {
      // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
      if (temp.length + (n - cur + 1) < k) {
          return;
      }
      // 记录合法的答案
      if (temp.length == k) {
          ans.push(temp);
          return;
      }
      // 选择当前位置
      dfs(cur + 1, n, k, [...temp, cur]);
      // 不选择当前位置
      dfs(cur + 1, n, k, temp);
  }
  dfs(1, n, k, []);
  return ans;
};