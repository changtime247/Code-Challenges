// 6 kyu
// Consecutive strings
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// ----------------------
// Parameters: Given an array of strings and an integer.
// Return the longest concatenated string (can only be derived from consecutive strings of length value of second argument)
// (if there are two longest strings -a tie-, then return the first of the two)
// Examples:
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
//      --> "abigailtheta"
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
//      --> "oocccffuucccjjjkkkjyyyeehh"
// longestConsec([], 3)
//      -->  ""
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
//      --> "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)
//      --> "wlwsasphmxxowiaxujylentrklctozmymu"
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
//      -->  ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3),
//      --> "ixoyx3452zzzzzzzzzzzz"
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)
//      -->  ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)
//      -->  ""
// Pseudocode:
// First, find all cases which will return an empty string:
// (n being the length of the string array)
// if n = 0 or k > n or k <= 0, return "".
// Once we know that a non-empty string will be returned, we can proceed with the rest of the code.
// Map array. In map method, use slice (from index i, to index i + k, the second argument) to return concatenated values at consecutive indices.
// Save value to a variable named concats.
// Slice and sort concats to find length of longest concatenated string.
// Save longest length value to a variable named longestLengthValue.
// Use find on concats to return first string with length longestLengthValue.

function longestConsec(strarr, k) {
  if (strarr.length < 1 || strarr.length < k || k < 1) return ''
  let concats = strarr.map((s, i, r) => r.slice(i, i + k).join``) || []
  let longestLengthValue =
    concats.slice().sort((a, b) => b.length - a.length)[0].length || 0
  return concats.find((e) => e.length === longestLengthValue)
}
