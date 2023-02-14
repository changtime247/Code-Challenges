// 7 kyu
// Convert Hash To An Array
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Given an object.
// Return an array of arrays, each containing a key-value pair from the argument-object. The array should also be alphabetically sorted by keys.
// Ex:
// convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]
// convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]
// convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]
// convertHashToArray({}),[]
// Turn object to an array and use sort method.

function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]))
}
