// 8 kyu
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// ----------------------
// parameters: given an array of strings
// return: a string consisting of the strings of the array, each string separated by the next by a space
// examples:
// ["hello", "world"] --> "hello world"
// ["hello", "amazing", "world"] --> "hello amazing world"
// ["this", "is", "a", "really", "long", "sentence"] --> "this is a really long sentence"
// pseudocode: join strings with a space

function smash (words) {
    return words.join(" ")
};