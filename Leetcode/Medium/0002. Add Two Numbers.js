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
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
Given two linked lists representing a number's individual digits in reverse order
Return a linked list found by summing the two linked lists (but do not return in reverse order)
ex: 
addTwoNumbers(l1=[1,2,3],l2=[2,4,6]), 953
addTwoNumbers(l1=[3,5,7],l2=[2,4,6]), 1395
Create a new ListNode initialized to -1 to serve as a marker after summing the two nodelists
Create a variable to carry over the possible carryovers from addtion
while we are still moving from head to tail on either nodelists or if there is a carry from the addition,
do the following:
get the sum of the two values and add the units digit of the sum and create a new node with units digit of sum and link to the initially created nodelist
if the sum is greater than 9, then carry over the 1 in the created variable to add to the next digit
go the next nodes of both nodelists. If at the end, set to null
*/

var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let result = new ListNode(-1)
  let dummy = result

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0
    let l2Val = l2 ? l2.val : 0
    let nextDigit = (l1Val + l2Val + carry) % 10
    result.next = new ListNode(nextDigit)
    result = result.next

    carry = Math.floor((l1Val + l2Val + carry) / 10)

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return dummy.next
}
