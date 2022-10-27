/*
67. Add Binary
Easy

6132

647

Add to List

Share
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
Accepted
958,870
Submissions
1,868,702
*/

/*
Given two binary strings (a and b)
Return the sum of the two binary strings as a binary string
Create a new variable set to an empty string.
This new variable will be used to hold the values of the sum of the corresponding digits from strings a and b.
Find length of a and b. 
For the length of whichever one is longer, iterate.
At each iteration, add the corresponding digits (and any carry, if there is). 
If 1+1, then carry is necessary for next digit. 
Concatenate to res (as res will hold the sum of the binary strings, as a binary string)
After iteration, check once more for carry and add one accordingly.
*/

var addBinary = function (a, b) {
  var lena = a.length
  var lenb = b.length
  var max = Math.max(lena, lenb)
  var res = ''
  var carry = 0
  var val = 0

  for (var i = 0; i < max; i++) {
    val = Number(a[lena - 1 - i] || 0) + Number(b[lenb - 1 - i] || 0) + carry
    carry = Math.floor(val / 2)
    res = (val % 2) + res
  }

  if (carry) res = 1 + res

  return res
}
