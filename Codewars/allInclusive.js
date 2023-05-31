// 7 kyu
// All Inclusive?
// Input:
// - a string strng
// - an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// - a boolean true if all rotations of strng are included in arr
// - false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

// Given a string and an array of strings.
// Return true if the array contains all possible rotations of the string argument.
// Ex:
// containAllRots("", []), true
// containAllRots("", ["bsjq", "qbsj"]), true
// containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true
// containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false
// Create an empty array.
// Loop through string to create all possible rotations of the string. Push all possible rotations to newly created array.
// Iterate through newly created array to check if every value is contained in array argument.

function containAllRots(str, arr) {
  let allRots = []
  for (let i = 0; i < str.length; i++) {
    let former = str.slice(0, i)
    let latter = str.slice(i)
    allRots.push(latter + former)
  }
  return allRots.reduce((a, c) => {
    if (!arr.includes(c)) a = false
    return a
  }, true)
}
