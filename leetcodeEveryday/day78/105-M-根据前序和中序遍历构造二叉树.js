/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 根据根节点从inorder划分出左右子树
// 并求出左右子树的节点个数，在preorder中划分出分别属于左右子树的perorder序列
// 得到左右子树的preorder inorder序列，递归构建左右子树
var buildTree = function(preorder, inorder) {
  if (!inorder.length) return null;
// 前序遍历 根左右 所以preorder[0]一定是根节点
  const root = new TreeNode(preorder[0]);
// 在中序遍历中找到根节点，然后就可以分左右子树
  const mid = inorder.indexOf(preorder[0]);
  // 前序遍历根左右 中序遍历左根右
  // preorder.slice(1, mid + 1)是先序遍历的左子树，inorder.slice(0, mid)是中序遍历的左子树
  // preorder.slice(mid + 1)是先序遍历的右子树，inorder.slice(mid + 1)是中序遍历的右子树
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};