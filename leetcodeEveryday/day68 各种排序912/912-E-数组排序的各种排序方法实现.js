/**
 * @param {number[]} nums
 * @return {number[]}
 */

// // 选择排序
// var sortArray = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//       let min = Infinity;
//       let minIndex;
//       for (j = i; j < nums.length; j++) {
//           if (nums[j] < min) {
//               min = nums[j]
//               minIndex = j;
//           }
//       }
//       [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
//   }
//   return nums;
// };

// // 插入排序
// var sortArray = function(nums) {
//   for (let i = 1; i < nums.length; i++) {
//       let temp = nums[i];
//       let j = i - 1;
//       for (; j >= 0; j--) {
//           if (temp >= nums[j]) break;
//           nums[j + 1] = nums[j]
//       }
//       nums[j + 1] = temp;
//   }
//   return nums;
// };

// var sortArray = function(nums) {
//   if (nums.length < 2) return nums;
//   return  quickSort(nums, 0, nums.length - 1);
// };

// function quickSort(nums, left, right) {
//   if (left >= right) return;
//   let pivotIndex = partition(nums, left, right)
//   quickSort(nums, left, pivotIndex - 1)
//   quickSort(nums, pivotIndex + 1, right)
//   return nums;
// }

// // 快速排序
// var sortArray = function(nums) {
//   quick(nums, 0, nums.length - 1)
//   return nums
// };

// function quick (list, left, right) {
//   let index = 0
//   if (list.length > 1){
//     index = partition(list, left, right)             // 帮助我们将子数组分离为较小值数组和较大值数组
//     left < index - 1 && quick(list, left, index - 1)
//     index < right && quick(list, index, right)
//   }
// }

// function partition(list, left, right){
//   let mid = list[(right + left) >> 1]
//   while (left <= right) {
//     while (list[left] < mid) {
//       left++
//     }
//     while (list[right] > mid) {
//       right--
//     }
//     if (left <= right) {
//       [list[left], list[right]] = [list[right], list[left]]
//       left++
//       right--
//     }
//   }
//   return left;
// }
// // 归并排序
// var sortArray = function(nums) {
//   return mergeSort(nums, 0, nums.length - 1)
// };

// function mergeSort(nums, left, right) {
//   if (left >= right) return nums;
//   let mid = (left + right) >> 1;
//   mergeSort(nums, left, mid)
//   mergeSort(nums, mid + 1, right)
//   return merge(nums, left, mid, right)
// }

// function merge(nums, left, mid, right) {
//   let ans = [];
//   let c = 0, i = left, j = mid + 1;
//   while (i <= mid && j <= right) {
//       if (nums[i] < nums[j]) {
//           ans[c++] = nums[i++];
//       } else {
//           ans[c++] = nums[j++]
//       }
//   }
//   while (i <= mid) {
//       ans[c++] = nums[i++];
//   }
//   while (j <= right) {
//       ans[c++] = nums[j++];
//   }
//   for (let i = 0; i < ans.length; i++) {
//       nums[i + left] = ans[i];
//   }
//   return nums;
// }

// // 归并排序
// var sortArray = function(nums) {
//   return splitList(nums)
// };
// // 拆分数组
// function splitList (list) {
//   let len = list.length
//   if(len === 1) return list
//   let mid = len >> 1
//   let left = list.slice(0, mid)
//   let right = list.slice(mid)
//   return mergeList(splitList(left), splitList(right))
// }
// // 合并, 排序数组
// function mergeList (left, right) {
//   let res = []
//   let il = 0, lenl = left.length
//   let ir = 0, lenr = right.length
//   while(il < lenl && ir < lenr){
//     if(left[il] < right[ir]){
//       res.push(left[il++])
//     } else {
//       res.push(right[ir++])
//     }
//   }
//   while(il < lenl){
//     res.push(left[il++])
//   }
//   while(ir < lenr){
//     res.push(right[ir++])
//   }
//   return res
// }

// -------------------------------------------------------------------------------------

// 生成n个由n以内的整数组成的随机数组
function randomAry (n) {
  var ary = [];
  for (var i = 0; i < n; i++) {
    var rand = Math.random();
    ary.push(Math.floor(rand * n));
  }
  return ary;
}

// 判断一个数组是否升序排列
function siSorted (ary) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] < ary[i - 1]) {
      return false;
    }
  }
  return true;
}

// 交换数组第i和第j项
function swap (ary, i, j) {
  t = ary[i];
  ary[i] = ary[j];
  ary[j] = t;

}

// sort排序 从小到大a-b，从大到小a+b
var sortArray = function(nums) {
  return nums.sort((a, b) => a - b);
};

// 冒泡排序
// 比较所有相邻的两个项，如果第一个比第二个大就交换位置
// 写法一
// 内层循环减i，从内循环减去外循环中跑过的轮数，可以避免内循环中所有不必要的项
var sortArray = function (nums) {
  // 外层每次循环找出最大的数
  for (let i = 0; i < nums.length; i++) {
    // 判断每次是否需要交换
    for (let j = 0; j < nums.length - 1- i; j++) {
      if (nums[j] > nums[j + 1]) {
        // ES6可以这样交换两个变量
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        // 而这之前只能这样交换两个变量
        // const temp = nums[j];
        // nums[j] = nums[j + 1];
        // nums[j + 1] = nums[j];
      }
    }
  }
  return nums;
}
// 写法二
function bubbleSort (ary) {
  // 遍历交换的结束位置
  for (var i = ary.length - 2; i >= 0; i--) {
    var swapped = false;
    for (var j = 0; j <= i; j++) { // 从0到第i个元素分别跟其右边的元素对比交换
      if (ary[j] > ary[j + 1]) {
        swapped = true;
        swap (ary, j ,j + 1);
      }
    }
    if (!swapped) { // 如果某次遍历没有交换过，说明书组已经有序，结束
      break;
    }
  }
  return ary;
}

// 插入排序
function insertSort (ary) {
  for (i = 1; i < ary.length; i++) {
    let t = ary[i];
    for (let j = i - 1; j >= 0; i--) {
      if (ary[i] > t) {
        ary[i + 1] = ary[j];
      } else {
        break;
      }
    }
    ary[j + 1] = t;
  }
  return ary;
}

// 选择排序
function selectSort (ary) {
  for (let i = 0; i < ary.length; i++) {
    // 找出剩下元素中最小的放入i位置
    //假设第一项为最小
    var minIndex = i;
    for (j = i + 1; j < ary.length - 1; j++) {
      if (ary[j] < ary[minIndex]) {
        minIndex = j;
      }
    }
    // 将最小元素放到i位置上，并将i位置原来元素放入minIndex
    swap (ary, i ,minIndex);
  }
  return ary;
}

// 归并排序
/**
 * 时间复杂度：n*log(n)
 * 空间复杂度：n + log(n)
 */
 function mergeSort(ary) {
  if (ary.length < 2) {
    return ary
  }
  // 把数组一分为二
  var mid = Math.floor(ary.length / 2)
  var left = ary.slice(0, mid)
  var right = ary.slice(mid)
  // 左边排
  mergeSort(left)
  // 右边排
  mergeSort(right)
  // 合起来
  var i = 0 // 指向left数组
  var j = 0 // 指向right数组
  var k = 0 // 指向结果数组
  if (left.at(-1) > right.at(0)) {
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        ary[k++] = left[i++]
      } else {
        ary[k++] = right[j++]
      }
    }
  }
  while (i < left.length) {
    ary[k++] = left[i++]
  }
  while (j < right.length) {
    ary[k++] = right[j++]
  }
  return ary
}
