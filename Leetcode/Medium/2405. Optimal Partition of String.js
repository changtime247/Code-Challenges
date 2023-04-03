/*
2405. Optimal Partition of String
Medium

Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

Example 1:
Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.

Example 2:
Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").

Constraints:
1 <= s.length <= 105
s consists of only English lowercase letters.
*/

/*
Given a string.
Return the min number of substrings in which each substring contains only unique letters.
Ex:
partitionString("oygwwncfgewspmqvbez"), 3 ('oyg', 'wncfg', 'wspmqvbe')
Create an array (or counter) to track substrings of unique letters.
Create a pointer, initialized to 0.
Iterate through string,
  If substring from pointer through current iteration char contains only unique letters,
    continue with iteration.
  Otherwise,
    push last iteration to container (or increment counter)
    and re-set pointer to last iteration index and re-set substring to pointer to current iteration.
*/

var partitionString = function (s) {
  let arr = []
  let start = 0
  let str = s[0]
  for (let i = 1; i < s.length; i++) {
    let newStr = s.slice(start, i)
    if (newStr.includes(s[i])) {
      arr.push(str)
      str = s[i]
      start = i - 1
    } else {
      str = newStr
    }
  }
  arr.push(str)
  return arr.length
}
