/*
605. Can Place Flowers
Easy
4.3K
788
Companies
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/*
Given an array of consisting of only 0s and/or 1s and an integer.
Return a boolean indicating whether the number of 0s that can be replaced with 1s in the array 
(such that no 1 is adjacent to another 1)
is greater than or equal to the arg-integer.
(0s can be adjacent to other 0s but 1 can only be adjacent to 0s)
Example 3: 
Input: flowerbed = [0], n = 1
Output: true
Example 4: 
Input: flowerbed = [0,0,0], n = 2
Output: true
Example 5: 
Input: flowerbed = [1,0,1,0,1,0,1], n = 1
Output: false
Iterate through array:
    if value at current iteration is a 0 and also surrounded by 0s replace that surrounded 0 with a 1.
    and decrement arg-integer by 1
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1 &&
      flowerbed[i] === 0
    ) {
      n--
      flowerbed[i] === 1
    }
  }
  return n <= 0
}
