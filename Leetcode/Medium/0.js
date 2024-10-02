/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  let i = 0
  while (res.length < nums.length - k + 1) {
    res.push(Math.max(...nums.slice(i, i + k)))
    i++
  }
  return res
}
