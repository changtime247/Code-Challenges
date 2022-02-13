// 8 kyu
// Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// ----------------------
// parameters: string given, representing a person's name
// return either Hello ${name} or Hello World (if no name is provided or if name is empty string)
// examples:
// hello('alice')  -->  'Hello, Alice!'
// hello()         -->  'Hello, World!'
// hello('')       -->  'Hello, World!'
// pseudocode: if name is not supplied then return generic string, Hello World.
// if name is supplied then return string with name-parameter with the correct case,
// which is capitalized first letter and the rest lower case.

function hello(name) {
    return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : `Hello, World!`
}