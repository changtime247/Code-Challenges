/*
739. Daily Temperatures
Medium
9.4K
215
Companies
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

/*
Given an array of numbers representing daily temperatures.
Return an array of numbers representing the number of day(s) that need to pass for daily temperature to get warmer.
    (if daily temp does not eventually get warmer, array value should be 0)
Create a variable set to an empty array.
Iterate through array:
    
Find the difference between indices of next warmer temperature and current temperature.
    If no future warmer temperature (or if last item in array), then 0.
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let daysToWait = []
  for (let i = 0; i < temperatures.length - 1; i++) {
    let c = 1
    while (temperatures[i] >= temperatures[i + c]) {
      c++
      if (c >= temperatures.length - i) {
        c = 0
        break
      }
    }
    daysToWait.push(c)
  }
  return [...daysToWait, 0]
}

var dailyTemperatures = function(t) {
    const stack = []
    const res = Array(t.length).fill(0)
    
    for (let i = 0; i < t.length; i++) {
        while (stack.length && t[i] > t[stack[stack.length - 1]]) {
            const idx = stack.pop()
            res[idx] = i - idx
        }
        stack.push(i)
    }
    
    return res
};


// [30,40,50,60]
// []
// [0]
// [0]