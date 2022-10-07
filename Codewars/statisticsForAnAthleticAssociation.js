// 6 kyu
// Statistics for an Athletic Association
// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.
// To compare the results of the teams you are asked for giving three statistics; range, average and median.
// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
// Your task is to return a string giving these 3 values. For the example given above, the string result will be
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
// where hh, mm, ss are integers (represented by strings) with each 2 digits.
// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

// ----------------------
// Parameter: Given a string with data on race results
// Each separated by a ', ' -comma-space , given in format h|m|s, where h is hours, m is minutes, s is seconds
// Return a string with following format with corresponding data for 'hh|mm|ss'
// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
// Examples:
// stat('')
//          -->      ''

// stat('1|15|17, 2|47|16')
//          -->      'Range: 01|31|59 Average: 02|01|16 Median: 02|01|16'

// stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')
//          -->      'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34'

// stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
//          -->      'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00'

// stat('1|15|17, 2|47|16')
//          -->      'Range: 01|31|59 Average: 02|01|16 Median: 02|01|16'

// stat('11|15|17, 00|17|20, 02|17|20, 12|17|20')
//          -->      'Range: 12|00|00 Average: 06|31|49 Median: 06|46|18'

// stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17')
//          -->      'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57'

// stat('0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0')
//          -->      'Range: 00|07|34 Average: 00|17|47 Median: 00|16|48'

// stat('1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11')
//          -->      'Range: 00|11|20 Average: 01|19|36 Median: 01|18|41'
// Pseudocode: There are many different tasks in this application.
// At the toplevel, we are simply taking the string and performing calculations with data within string to return as another string.
// Three different calculations need to be performed (each output must be in the correct format):
// 1. Range - take difference between fastest and slowest times in total seconds and reformat.
// 2. Mean - calculate total in seconds for all racers and divide by length and reformat.
// 3. Median - if number of racers is odd, grab middle element and reformat.
// if even, calculate mean for middle two.
// To perform each of these tasks, we will need to perform additional calculations/ tasks:
// a. Sorting data within string (after having turned string into an array)
// b. Converting hh|mm|ss to seconds and vice versa.
// c. Correct formatting for each datum.

// toplevel function
function stat(strg) {
  let arr = strg.split`, `
  return strg
    ? `Range: ${calcRange(arr)} Average: ${calcMean(arr)} Median: ${calcMedian(
        arr
      )}`
    : ''
}

// calculation functions
function calcRange(arr) {
  arr = sortDes(arr)
  let fastest = arr[arr.length - 1].split`|`
  let totalSecFastest = turnIntoSec(fastest)
  let slowest = arr[0].split`|`
  let totalSecSlowest = turnIntoSec(slowest)
  let diff = totalSecSlowest - totalSecFastest
  return format(diff)
}

function calcMean(arr) {
  const totalSec = arr.reduce((a, k) => (a += turnIntoSec(k.split`|`)) && a, 0)
  return format(totalSec / arr.length)
}

function calcMedian(arr) {
  arr = sortDes(arr)
  let l = arr.length
  return l % 2
    ? correctFormat(arr[Math.floor(l / 2)])
    : calcMean(arr.slice(l / 2 - 1, l / 2 + 1))
}

//helper functions
function turnIntoSec(arr) {
  return +arr[0] * 3600 + +arr[1] * 60 + +arr[2]
}

function format(totalTimeInSeconds) {
  let h = Math.floor(totalTimeInSeconds / 3600).toString()
  let m = Math.floor((totalTimeInSeconds % 3600) / 60).toString()
  let s = Math.trunc((totalTimeInSeconds % 3600) % 60).toString()
  return `${h.length < 2 ? h.padStart(2, '0') : h}|${
    m.length < 2 ? m.padStart(2, '0') : m
  }|${s.length < 2 ? s.padStart(2, '0') : s}`
}

function correctFormat(str) {
  return format(turnIntoSec(str.split`|`))
}

function sortDes(arr) {
  return arr.sort((a, b) => {
    let aR = a.split`|`
    let bR = b.split`|`
    return +aR[0] > +bR[0]
      ? -1
      : +aR[0] < +bR[0]
      ? 1
      : +aR[1] > +bR[1]
      ? -1
      : +aR[1] < +bR[1]
      ? 1
      : +aR[2] > +bR[2]
      ? -1
      : +aR[2] < +bR[2]
      ? 1
      : 0
  })
}
