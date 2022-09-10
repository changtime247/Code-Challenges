// 7 kyu
// Help the Fruit Guy
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// Parameter: Given an array of strings. Rach string represents a fruit (possibly rotten - if rotten, given in camelCase).
// Return an array of strings, in which all rotten fruits are replaced with non-rotten fruits.
// Example:
// removeRotten([]), []
// removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"]
// removeRotten(["rottenApple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"]
// Pseudocode:
// If argument is empty array, return empty array. Otherwise, proceed.
// Iterate through each string in array.
// If string has the word 'rotten' in it, replace it with same word without 'rotten' in it.
// Return modified array.

function removeRotten(bagOfFruits) {
  if (bagOfFruits)
    return bagOfFruits.reduce((a, k) => {
      k.slice(0, 6) === 'rotten' ? a.push(k.slice(6).toLowerCase()) : a.push(k)
      return a
    }, [])
  else return []
}
