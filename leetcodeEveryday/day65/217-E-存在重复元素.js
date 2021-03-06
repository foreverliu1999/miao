/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 先sort排序，从小到大或从大到小无所谓，如果有元素重复出现，那必然是相邻的，所以遍历一次数组并判断是否有相邻元素相等
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for(let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// 遍历数组中每个元素插入哈希表中，插入时判断哈希表内是否已存在相同元素
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
}