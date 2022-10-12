/*
2. Add Two Numbers
Medium

21935

4283

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/*
Given two non-empty arrays, representing two non-negative integers. Array values are listed in reverse order.
Return the sum of the two numbers (unreversed, of course)
Example: addTwoNumbers([2,4,3],[5,6,4]), (807)
*/

/*
given two arrays representing a positive numbers' digits but in reverse
return sum of two nums and return as array
create a variable initialized to 0
iterate through the length of the longer array and add the sum of the values at the indices i
when adding, make sure you are accounting for units digit, tens digit, etc.
return the number as an array (not reversed)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function (l1, l2) {
    
}
