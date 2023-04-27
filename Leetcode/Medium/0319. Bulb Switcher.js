/*
319. Bulb Switcher
Medium
There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.
On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.
Return the number of bulbs that are on after n rounds.

Example 1:
Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.

Example 2:
Input: n = 0
Output: 0

Example 3:
Input: n = 1
Output: 1

Constraints:
0 <= n <= 109
*/

/*
Given an integer, representing the number of light bulbs in a row.
Return the number of 'on' bulbs after toggling the ith light bulb for rounds 1 to n.
Ex:
bulbSwitch(1), 1
bulbSwitch(3), 1
bulbSwitch(4), 2
bulbSwitch(6), 2
bulbSwitch(8), 2
bulbSwitch(9), 3
bulbSwitch(16), 4
bulbSwitch(99999), 316
The number of bulbs on will always be the square root of the arg-integer (rounded down). 
This is because the combined effect of successively toggling the light bulbs will consequently only leave the perfect squares on.
Ex:
Round 1 [1,1,1,1,1,1,1,1,1]
Round 2 [1,0,1,0,1,0,1,0,1]
Round 3 [1,0,0,0,1,1,1,0,0]
Round 4 [1,0,0,1,1,1,1,1,0]
Round 5 [1,0,0,1,0,1,1,1,0]
Round 6 [1,0,0,1,0,0,1,1,0]
Round 7 [1,0,0,1,0,0,0,1,0]
Round 8 [1,0,0,1,0,0,0,0,0]
Round 9 [1,0,0,1,0,0,0,0,1]
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n))
}
