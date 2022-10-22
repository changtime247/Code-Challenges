/*
144. Binary Tree Preorder Traversal
Easy

5228

144

Add to List

Share
Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
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
Given the root of a binary tree
Return the preorder traversal of the node values
Pseudocode: If root is null, then return empty array
Otherwise, create a stack and result. 
Push the root to stack.
Iterate as long as the stack is not empty.
As long as there is a left value, pop off. And push rest back to stack.
As long as there is a right value, pop off. And push rest back to stack.
At each iteration, push the value that was popped off to the result array.
After iteration, result array will hold all the node values in preorder. Return array.
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

 var preorderTraversal = function(root) {
    if(root===null) return []
    const stack = []
    const result = []
    stack.push(root)
    while(stack.length>0){
        let curr = stack.pop()
        result.push(curr.val)
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return result
};