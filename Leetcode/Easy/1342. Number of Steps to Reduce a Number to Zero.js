/*
1342. Number of Steps to Reduce a Number to Zero
Easy
3K
142
Companies
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:
Input: num = 123
Output: 12

Constraints:
0 <= num <= 106
Accepted
440.7K
Submissions
516.4K
Acceptance Rate
85.3%
*/

/*
Given an integer and steps to follow to turn the argument into 0. 
Return the number of steps it takes.
Steps: if even, divide by 2. if odd, subtract 1.
Create a variable to record the number of steps. 
While argument is not equal to 0, keep iterating through corresponding step and recording the number of steps.
Return number of steps once while condition met.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0
  while (num !== 0) {
    num % 2 ? (num -= 1) : (num /= 2)
    steps++
  }
  return steps
}
