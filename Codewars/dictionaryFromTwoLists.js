// 7 kyu
// Dictionary from two lists
// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

// Example 1:

// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// Example 2:

// keys = ['a', 'b', 'c']
// values = [1, 2, 3, 4]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

// Given two arrays
// Return an object with key-value pairs composed by 'combining' the two arrays.
// createDict(['a', 'b', 'c'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3}
// createDict(['a', 'b', 'c'], [1, 2, 3, 4]), {'a': 1, 'b': 2, 'c': 3}
// createDict(['a', 'b', 'c','d'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3, 'd':null}
// Create a variable initialized to an empty object.
// Use one loop to iterate through the entirety of both arrays simultaneously.
// At each iteration, create a new key-value pair within the newly created variable from step 1.

function createDict(keys, values) {
  let dict = {}
  if (keys.length < 1) return dict
  for (let i = 0; i < keys.length; i++) {
    if (values[i] || values[i] == 0) {
      dict[keys[i]] = values[i]
    } else {
      dict[keys[i]] = null
    }
  }
  return dict
}
