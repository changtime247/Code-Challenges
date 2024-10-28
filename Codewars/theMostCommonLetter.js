/*
6 kyu
The most common letter
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

/*
Given a string and a single letter.
Return a new string based on given string such that the first-most-appearing letter is replaced with the given letter.
Examples see above.
Tally up letter count. 
Find the first most frequently appearing letter.
Create new string based on given string replacing only the first most frequently appearing letter with given letter.
*/

function replaceCommon(string, letter) {
  let arr = new Array(26).fill(0)
  let most = 0
  let mostAndFirst = ''
  let newString = ''

  // tally up char count
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') arr[string.charCodeAt(i) - 97] += 1
  }
  // find highest count
  for (const lc of arr) {
    if (lc > most) most = lc
  }
  // find highest count and first to appear
  for (let i = string.length; i >= 0; i--) {
    if (arr[string.charCodeAt(i) - 97] === most) {
      mostAndFirst = string[i]
    }
  }
  // create new string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === mostAndFirst) {
      newString += letter
    } else {
      newString += string[i]
    }
  }
  return newString
}
