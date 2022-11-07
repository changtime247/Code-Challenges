/*
94. Binary Tree Inorder Traversal
Easy
10.1K
478
Companies
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/*
Given the root of a binary tree.
Return inorder traversal of the nodes' values.
Inorder traversal: you traverse from the left subtree to the root then to the right subtree.
Create variable, list, set to empty array to hold values.
Let’s declare an array list to collect our data.
Create a function, checkTree, with 2 arguments, a root and the list.
If root is an empty node, then return list.
Start with the left side. Push the root value to list.
Do the same for the right child also.
Return checkTree function
*/

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const list = []
  return checkTree(root, list)
  function checkTree(root, list) {
    if (root === null) {
      return list
    }
    list = checkTree(root.left, list)
    list.push(root.val)
    return checkTree(root.right, list)
  }
}
