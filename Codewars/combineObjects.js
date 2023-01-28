// 7 kyu
// Combine objects
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// Given an undetermined number of arguments, each being an object with key-value pairs
// Return an object with keys and values from all the argument-objects. If overlapping keys, assign the sum of overlapping values as value for that key in the return object.
// Create an empty object
// Iterate through all arguments.
//      At each iteration, iterate through all key-values of the arg-object, and either (a) assign the newly created object the iteration object's key-value pair (if key doesn't exist) or (b) if key exists, assign to the key of the object a new value, which is the sum of current value and iteration object's key's value

function combine(...args) {
  let obj = {}
  for (let i = 0; i < args.length; i++) {
    for (const key in args[i]) {
      obj[key] = (obj[key] || 0) + args[i][key]
    }
  }
  return obj
}
