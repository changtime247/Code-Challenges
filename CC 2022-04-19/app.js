// 8 kyu
// Implement Array.prototype.filter()

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// More info can be found here:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// ----------------------
// parameters: Global object Array without the filter method (that function has been purposely set to undefined)
// return value must match that of the filter method
// we're essentially prototyping or specficially, creating a prototype method for the global object Array
// examples:
// [1,2,3,4].filter(num=> num > 3)      -->     [4]
// [1,2,3,4,5].filter(num => num > 3)   -->     [4, 5]
// pseudocode: create a container to hold all the elements of the array that will pass the filter test
// a loop is necessary to get at each element of the array
// to refer to the array, use the keyword "this"
// to refer to the value at index whatever use bracket notation (just like regular arrays, instead use "this")
// push all values that pass the callback function (or filter test) into the container we created initially
// after the loop iterates through every element, return the container with the values that passed the filter test

Array.prototype.filter = function(func) {
    const newArr = [];
    for(let i=0; i<this.length; i++){   // this refers to the Array. We're prototyping now
        if(func(this[i])){              // Pass that func test
            newArr.push(this[i]);       // If passed, the value of whatever's at index i gets pushed to newArr
        }
    }
    return newArr;                      // return is necessary
}