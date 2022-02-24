// 8 kyu
// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// ----------------------
// parameters: a string of a person's name
// return a greeting (another string) with parameter in it
// examples
// greet("Ryan")        -->    "Hello, Ryan how are you doing today?"
// greet("Shingles")    -->    "Hello, Shingles how are you doing today?"
// pseudocode: using template literal return greeting with paramter for name
// use bling symbol

function greet(name){
    return `Hello, ${name} how are you doing today?`
}