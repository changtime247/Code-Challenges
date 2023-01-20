// 6 kyu
// Mirror object - tcejbo rorriM
// Mirror - Mirror
// Can you mirror the properties on an object?
// Given an object with properties with no value
// abc: -
// arara: -
// xyz: -
// Return a new object that have the properties with its mirrored key!
// abc: cba
// arara: arara
// xyz: zyx
// "You cannot change the original object, because if you did that the reflection would change."

// Given an object with keys (but with no values)
// Return a new object with same keys but with values that are the reverse version of corresponding key
// Create an object with same keys as the argument object
// Iterate through new object to give each key a value (of key reversed).

const mirror = (obj) => {
  return Object.keys(obj).reduce(
    (a, c) => ((a[c] = c.split``.reverse().join``), a),
    {}
  )
}
