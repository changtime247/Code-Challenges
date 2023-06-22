// 7 kyu
// See You Next Happy Year
// You're saying good-bye your best friend , See you next happy year .
// Happy Year is the year with only distinct digits , (e.g) 2018
// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt
// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .
// nextHappyYear (8989) ==> return (9012)
// Explanation:
// As the Next closest year with only distinct digits is 9012 .
// nextHappyYear (1001) ==> return (1023)
// Explanation:
// As the Next closest year with only distinct digits is 1023 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series

// Given a year between 1000 and 9000, inclusive, as a number.
// Return the next year such that the year does not have any repeating number within its digits.
// Ex:
// nextHappyYear(1001),1023
// nextHappyYear(1123),1203
// nextHappyYear(2001),2013
// nextHappyYear(2334),2340
// nextHappyYear(3331),3401
// nextHappyYear(1987),2013
// nextHappyYear(5555),5601
// nextHappyYear(7712),7801
// nextHappyYear(8088),8091
// nextHappyYear(8999),9012
// Create a while loop that keeps incrementing the year by 1 until the year does not have any repeating numbers within it.

function nextHappyYear(year) {
  let newYear = year + 1
  while (year.toString().length !== [...new Set(newYear.toString())].length) {
    newYear++
  }
  return newYear
}
