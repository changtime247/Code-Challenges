/*
58. Length of Last Word
Easy

1985

126

Add to List

Share
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
Accepted
907,214
Submissions
2,245,947
*/

/*
Given a string of words and spaces.
Return the length of the last word in the string.
Pseudocode: Split and slice last word. Return its length.
*/

var lengthOfLastWord = function(s) {
    return s.trim().split` `.slice(-1)[0].length
};