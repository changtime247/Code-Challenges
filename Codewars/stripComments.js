/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples
The output expected would be:
apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

/*
Given a string, that may be multi-line string, and an array of markers (i.e. special chars)
Return a string with trailing whitespaces of each line trimmed, keeping new line.
For each line, if there is a marker, anything following the marker should also be trimmed, including any char, except new line.
Example:
solution("aa / bb\ncc ^ dd\nee $ ff", ["/","^","$"]), "aa\ncc\nee"
solution("aa bb\n#cc dd", ["#"]), "aa bb\n"
Steps:
    - Iterate over each line of string.
    - For each line, find first occurrence of any marker of the given array.
    - Slice line up to first marker and remove trailing whitespace.
    - Reassemble Text.
*/

function solution(text, markers) {
  return text
    .split('\n')
    .map((line) => {
      let minIndex = line.length
      for (let marker of markers) {
        const index = line.indexOf(marker)
        if (index !== -1) minIndex = Math.min(minIndex, index)
      }
      return line.slice(0, minIndex).trimEnd()
    })
    .join('\n')
}
