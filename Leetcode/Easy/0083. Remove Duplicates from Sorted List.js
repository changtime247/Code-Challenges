/*
83. Remove Duplicates from Sorted List
Easy

6163

216

Add to List

Share
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

/*
Given the head of a sorted singly linked list
Return the linked list (1) with no duplicates and (2) sorted
Iterate through the list
At any point, if the current value (of the iteration) is equal to the previous value, then remove that node from list
(remove the node from list by skipping over it - i.e. do not include in part of link)
Return head at end of iteration
*/

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
var deleteDuplicates = function (head) {
  if (!head) return null
  let cur = head
  while (cur.next) {
    if (cur.val !== cur.next.val) {
      cur = cur.next
    } else {
      cur.next = cur.next.next
    }
  }
  return head
}
