// 剑指 Offer 57-E-和为s的两个数字
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 哈希map
var twoSum = function (nums,target) {
  let map = new Map(), result = [];
  nums.forEach((item, ind) => {
    map.set(item, item);
  })
  nums.forEach(item => {
    if (map.has(target - item) && result.length == 0) {
      result.push(map.get(target - item), item);
    }
  })
  return result;
}

var twoSum = function (nums, target) {
  let map = newMap();
  let result = [];
  nums.forEach((item, ind) => {
    map.set(item, item);
  })
  nums.forEach(item => {
    if (map.has(target - item) && result.length == 0) {
      result.push(map.get(target - item), item);
    }
  })
  return result;
}




// 双指针
// 左指针在数组头，右指针在数组尾，如果sum小于target则左指针右移，如果sum大于target则右指针左移
var twoSum = function (nums, target) {
  // 定义双指针
  let left = 0, right = nums.length - 1;
  // 整个移动指针的条件就是左指针比右指针小
  while (left < right) {
    let sum = nums[left] + nums[right];
    // 如果sum比target大，那就要让sum变小，办法就是右指针左移
    if (sum > target) {
      right--;
      // 而如果sum比target小,那就要让sum变大,办法就是左指针右移
    } else if (sum < target) {
      left++;
      // 这种情况就是找到了结果sum等于target
    } else {
      return [nums[left], nums[right]];
    }
  }
  // return [];
}

var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <right) {
    let sum = nums[left] + nums[right];
    if (target < sum) {
      right--;
    } else if (target > sum) {
      left++;
    } else {
      return [nums[left], nums[right]];
    }
  }
}
