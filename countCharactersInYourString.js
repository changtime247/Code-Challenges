// 6 kyu
// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// ----------------------
// Parameter: Given a string.
// Return an object with each unique letter of the string as the properties and the count of the unique letter in the string as the values.
// Empty string returns an empty object.
// Examples:
// count('')                                   -->   {}
// count('aa')                                 -->   { a: 2 }
// count('aabb')                               -->   { a: 2, b: 2 }
// count('aabb')                               -->   { a: 2, b: 2 }
// count('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbb')   -->   { a: 20, b: 12 }
// Pseudocode:
// Create empty object to hold all unique letters of string.
// Use for loop to grab all unique values of string and increment by one for each occurrence.
// The first occurrence of a unique letter will be setting the property value to 1.
// Return object.

function count(string) {
  let obj = {}
  for (let i = 0; i < string.length; i++) {
    const ltr = string[i]
    obj.hasOwnProperty(ltr) ? (obj[ltr] += 1) : (obj[ltr] = 1)
  }
  return obj
}
