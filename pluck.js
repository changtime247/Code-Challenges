// 7 kyu
// Pluck

// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
// If an object is missing the property, you should just leave it as undefined/None in the output array.

// ----------------------
// Parameters: Given an array of objects and a string, which represents a possible property name of object(s) in array
// Return an array of the values with property name equal to string argument passed in
// Examples:
// pluck([{a:1}, {a:2}], 'a')                                                     -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b')                                                -> [3, undefined]
// pluck([{a:1, b:2, c:3}, {a:4, b:5, c:6}, {a:7, b:8, c:9}, {a:10, b:11}], 'a')  -> [ 1, 4, 7, 10 ]
// Pseudocode:
// Note that if property does not exist in object, undefined should be passed into the array that's being returned.
// Since return value is an array of equal length as the argument array passed in, we can use map method.
// Value of each element should be the name property passed in as name argument || undefined.
// Access that value using bracket notation, since we passing in a variable.
// Return entire map expression.

function pluck(objs, name) {
    return objs.map((k)=>k[name]);
}