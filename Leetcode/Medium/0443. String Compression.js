/*
443. String Compression
Medium
3.3K
5.4K
Companies
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Example 1:
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Example 2:
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.

Example 3:
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

Constraints:
1 <= chars.length <= 2000
chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
*/

/*
Given an array of single chars.
Compress (i.e. modify) the array:
    All consecutive repeat char should be removed (excl. the first char of the consecutive chars).
    Replace those chars with the number of chars in the consecutive sequence (incl. the first char of that sequence).
    The number should be string(s) of the number(s)'s digit(s).
Return the length of the array.
Ex:
compress(["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"])
--> 8
modified array === ["a", "6", "b", "2", "1", "c", "1", "4"]

Create a counter variable set at 1.
Create another variable to keep char of the previous char, initially set to the first char.
Iterate through arg-array starting at index 1:
    If the current char is the same as the previous char,
        splice it out and increment counter.
    If not the same,
        Splice in the counter as a string version of each digit. 
        Set previous char variable to the current char and reset counter to 1.
After iterating, account for leftover count. 
*/

var compress = function (chars) {
  let prevChar = chars[0]
  let count = 1
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== prevChar) {
      prevChar = chars[i]
      if (count > 1) {
        chars.splice(i, 0, ...count.toString().split``)
        i += count.toString().split``.length
      }
      count = 1
    } else {
      chars.splice(i, 1)
      count++
      i--
    }
  }
  if (count > 1) chars.push(...count.toString().split``)
  return chars.length
}
