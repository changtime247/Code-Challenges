// 7 kyu
// The Robber Language

// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Note: The dashes - in the example are added for readability and should not be included in the output.

// The Assignment
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

// Notes
// Only consonants should be modified; leave all other characters unchanged.
// Both upper and lower case characters will be tested.
// The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
// For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
// Testing
// The tests will challenge your function with sentences of length 0-255, ASCII characters between 32-126 and nothing else.

// Links
// Check out these links for more information:

// https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket

// ----------------------
// Parameter: Given a string.
// Return the string converted such that each consonant of the string is duplicated with an 'o' (or 'O') in the middle of the original consonant and the duplicate.
// (case matters: If lower case consonant, 'o' in middle. If upper case consonant, 'O' in middle)
// Examples:
// robberEncode("hello world")              -->  "hohelollolo wowororloldod"
// robberEncode("coding is fun")            -->  "cocododinongog isos fofunon"
// robberEncode("follow the white rabbit")  -->  "fofolollolowow tothohe wowhohitote rorabobbobitot"
// robberEncode("S.O.S")                    -->  "SOS.O.SOS"
// robberEncode("your code here")           -->  "yoyouror cocodode hoherore"
// Pseudocode:
// Split argument into an array of individual chars. 
// Use map to iterate through the array. 
// If upper case consonant, duplicate the consonant with 'O' in middle.
// If lower case consonant, duplicate the consonant with 'o' in middle.
// Join the returned arrray value of map and return entire expression.

function robberEncode(sentence) {
    let arr = sentence.split``.map(e=>{
        return ('BCDFGHJKLMNPQRSTVWXYZ'.includes(e) && e == e.toUpperCase()) ? `${e}O${e}` : 
        ('BCDFGHJKLMNPQRSTVWXYZ'.toLowerCase().includes(e) && e == e.toLowerCase()) ? `${e}o${e}` : e;
    })
    return arr.join``;
}