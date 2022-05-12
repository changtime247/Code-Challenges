// 7 kyu
// Fizz Buzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// ----------------------
// parameter: positive integer given
// explicitly stated that the parameter will always be a positive integer
// return an array containing all positive integers from 1 through n, inclusive
// but all values that are multiples of both 3 and 5 must a string 'FizzBuzz' instead,
// all values that are multiples of 3 must be a string 'Fizz' instead,
// and all values that are multiples of 5 must be a string 'Buzz' instead,
// examples:
// fizzbuzz(5)     -->     [1,2,"Fizz",4,"Buzz"]
// fizzbuzz(10)     -->     [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]
// fizzbuzz(15)     -->     [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
// pseudocode: create an array from an object with length equal to parameter value
// write function to determine the value of each index
// add one to index parameter to change from zero-index counting to one-index counting
// use ternary conditional expressions to check for multiples of both 3 and 5, multiples of 3, and multiples of 5.
// if that one-index number is not a muiltiple of either, then just give the one-index value
// return array

function fizzbuzz(n){
    return Array.from({length:n},(_,i)=>(i+1)%3===0&&(i+1)%5===0?'FizzBuzz':(i+1)%3===0?'Fizz':(i+1)%5===0?'Buzz':i+1);
}