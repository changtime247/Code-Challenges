// 6 kyu
// Basics 03: Strings, Numbers and Calculation
// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.
// So what to do?
// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.
// Easy example:
// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)
// First there are some static tests, later on random tests too...
// Hope you have fun! :-)

// Given a string with letters and numbers and an arthimetic operator (e.g. +, -, *, or /)
// Return the result of performing the arthimetic operator on the numbers (filtering out letters). There should be exactly two numbers in the string (on either side of the operator)
// Ex:
// calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"), "47"
// calculateString("sdfsd23454sdf*2342"), "54929268"
// calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"), "-210908"
// calculateString("fsdfsd234.4554s4234df+sf234442"), "234676"
// calculateString("a1a2b3c.c0c/a1a0b.cc00c"), '12'
// Create three variables to store the two numbers and the operator
// Iterate through string to grab the numbers and operator
// Return result of performing operation on the two numbers

function calculateString(st) {
  let n1 = ''
  let n2 = ''
  let op = ''
  for (let i = 0; i < st.length; i++) {
    if (!op) {
      if (+st[i] === parseFloat(st[i]) || st[i] === '.') {
        n1 += st[i]
      } else if ('+-*/'.includes(st[i])) {
        op = st[i]
      }
    } else {
      if (+st[i] === parseFloat(st[i]) || st[i] === '.') {
        n2 += st[i]
      }
    }
  }
  return Math.round(eval(`${n1}${op}${n2}`)).toString()
}
