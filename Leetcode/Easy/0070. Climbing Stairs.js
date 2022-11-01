/*
70. Climbing Stairs
Easy

15114

444

Add to List

Share
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps 
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
Accepted
1,960,502
Submissions
3,790,154
*/

/*
Given an positive integer, representing the number of steps in a staircase.
Each time, you can either take 1 step or 2 steps.
Return an integer representing the number of different ways to reach the top of the staircase (from the bottom) given the condition above.
This problem is essentially a fibonacci question (0,1,1,2,3,5,8,13,21...), 
except the first few numbers of sequence should be (0,1,2,3,5...)
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let i
  let fib = [0, 1, 2]
  for (i = 3; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return n === 0 ? 0 : fib[n]
}
