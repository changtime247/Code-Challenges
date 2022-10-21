/*
21. Merge Two Sorted Lists
Easy

15504

1361

Add to List

Share
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/*
Given two sorted list nodes
Return a merged sorted list node
Pseudocode: Recursion helps.
Check if list1 or list2 is null. If it is, return the other nodelist. Nothing else to do.
Now, if the value at list1 is less than value at list2, then assign the next node to be the set the another function call:
The recursive function call will take in the next node in and the other nodelist
Return the listnode
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1===null){
        return list2
    }else if(list2===null){
        return list1
    }
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};