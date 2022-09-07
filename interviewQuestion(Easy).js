// 7 kyu
// Interview Question (easy)
// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
// For example:
// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.
// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
// Note that the return string must list the letters in order of their first appearance in the original string.
// More examples:
// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

// Parameter: Given a string.
// Return a string within which are pairs of key-values
// All letters that show up at least once in argument are given as keys
// And the number of occurrences of the letter.
// Examples:
// getStrings("Chicago")    -->    "c:**,h:*,i:*,a:*,g:*,o:*"
// getStrings("Bangkok")    -->    "b:*,a:*,n:*,g:*,k:**,o:*"
// getStrings("Las Vegas")  -->    "l:*,a:**,s:**,v:*,e:*,g:*"
// Iterate through each letter of string (case does not matter).
// Create an object to hold the unique letters as keys.
// For the values, count the number of times (as iterating) the letter has shown up (incrementing by 1).
// After iteration complete, change the numeric values to the corresponding number of '*'.
// Format object into string and return.

function getStrings(city) {
  let map = city.toLowerCase().split``.reduce((a, k, i, r) => {
    return a.set(k, k !== ' ' && a.has(k) ? a.get(k) + 1 : 1)
  }, new Map())
  let arr = Array.from(map)
    .filter((e) => e[0] !== ' ')
    .map((e) => {
      return `${e[0]}:${'*'.repeat(+e[1])}`
    })

  return arr + ''
}
