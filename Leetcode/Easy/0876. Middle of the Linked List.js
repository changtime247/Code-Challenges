/*
876. Middle of the Linked List
Easy

7186

191

Add to List

Share
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

/*
-----
Given a head of a singly linked list.
Return the middle node.
If there are two middle nodes, return the second middle node.
Example: middleNode([1,2,3,4,5,6]), 4
Basically, find the length of the node list.
Find out whether to get the middle node or the second middle node by checking length of nodelist (odd or even).
Traverse nodelist from head and stop at the middle node.
-----
*/

/*
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let nodey = head
  let nodey2 = head
  let i = 0
  while (nodey.next !== null) {
    nodey = nodey.next
    i++
  }
  let length = i + 1
  length % 2 ? (length = Math.floor(length / 2)) : (length /= 2)
  while (length !== 0) {
    nodey2 = nodey2.next
    length--
  }
  return nodey2
}
