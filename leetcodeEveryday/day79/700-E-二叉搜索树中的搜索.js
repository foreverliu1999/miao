// 700-E-二叉搜索树中的搜索 递归 修改
// 700-E-二叉搜索树中的搜索 迭代
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// 递归
// 二叉搜索树性质
// 左子树所有节点的值小于根节点
// 右子树所有节点的值大于根节点
// 时间复杂度O(N) N为二叉搜索树节点数
// 空间复杂度O(N)
var searchBST = function (root, val) {
  // 如果root为空返回空
  if (!root) return null;
  // 如果val=root.val,返回root
  if (val === root.val) return root;
  // 如果val<=root.val,返回左子树
  // 如果val>=root.val,返回右子树
  return searchBST(val < root.val ? root.left : root.right, val);
};

// 迭代写法
// 时间复杂度O(N) N为二叉搜索树节点数
// 空间复杂度O(1) 没有开辟额外空间
var searchBST = function (root, val) {
  // 当root为空则跳出循环返回null
  while (root) {
    // 如果val=root.val,返回root
    if (val === root.val) {
      return root;
    }
    // 如果val<=root.val,返回左子树
    // 如果val>=root.val,返回右子树
    root = val < root.val ? root.left : root.right;
  }
  return null;
}