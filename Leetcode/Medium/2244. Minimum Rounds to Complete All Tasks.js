/*
2244. Minimum Rounds to Complete All Tasks
Medium
1.6K
45
Companies
You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

Example 1:
Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

Example 2:
Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.

Constraints:
1 <= tasks.length <= 105
1 <= tasks[i] <= 109
*/

/*
Given an array of numbers, each representing a difficulty level. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
Return the min number of rounds it takes to complete all tasks (or -1 if impossible)
Convert array to an object of level of difficulty and number of its occurrences as the key-value.
If any object value is 1, return -1 (imposisble to complete all tasks).
Create variable to hold the min number of rounds it takes to complete all tasks (initially set to 0)
Otherwise, iterate through object values and at each iteration:
    if value is exactly 2 or 3, increment by 1;
    if value is greater, increment by ~~(value + 2 / 3)
        (explanation: total tasks can be formulated as => n = 2a + 3b)
Return the variable.
*/

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let obj = tasks.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})
  let minRounds = 0
  if (Object.values(obj).find((n) => n === 1)) return -1
  for (const key in obj) {
    if (obj[key] === 2 || obj[key] === 3) {
      minRounds += 1
    } else {
      minRounds += ~~((obj[key] + 2) / 3)
    }
  }
  return minRounds
}
