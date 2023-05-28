// 6 kyu
// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:
// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]
// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)
// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]
// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]
// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:
// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!
// Notes:
// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid
// Enjoy! (づ｡◕‿‿◕｡)づ

// Given an array of strings representing an emotion from these possible values: ':D', ':)', ':|', ':(', 'T_T'
// Also given a boolean value.
// If true, return arg-array in descending order (emotions will get progressively sadder)
// If false, return arg-array in ascending order (emotions will get progressively happier)
// Ex:
// sortEmotions([ ':D', 'T_T', ':D', ':(' ], true), [ ':D', ':D', ':(', 'T_T' ]
// sortEmotions([ 'T_T', ':D', ':(', ':(' ], true), [ ':D', ':(', ':(', 'T_T' ]
// sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], true), [ ':D', ':D', ':)', ':)', 'T_T' ]
// sortEmotions([ ':D', 'T_T', ':D', ':(' ], false), [ 'T_T', ':(', ':D', ':D' ]
// sortEmotions([ 'T_T', ':D', ':(', ':(' ], false), [ 'T_T', ':(', ':(', ':D' ]
// sortEmotions([ ':)', 'T_T', ':)', ':D', ':D' ], false),  [ 'T_T', ':)', ':)', ':D', ':D' ]
// sortEmotions([], false), []
// sortEmotions([], true), []
// Create an object to map emotions to a numeric value.
// If arg-boolean is true, return array sorted in descending value.
// Otherwise, ascending value.

function sortEmotions(arr, order) {
  const desc = { ':D': 5, ':)': 4, ':|': 3, ':(': 2, T_T: 1 }
  const asc = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, T_T: 5 }
  const std = order ? desc : asc
  return arr.slice().sort((a, b) => std[b] - std[a])
}
