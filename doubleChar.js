// 8 kyu
// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// ----------------------
// parameters: string given. can contain letters, numbers, and or special characters
// return string but each char must be repeated once more
// examples:
// "abcd"        -->  "aabbccdd"
// "Adidas"      -->  "AAddiiddaass"
// "1337"        -->  "11333377"
// "illuminati"  -->  "iilllluummiinnaattii"
// "123456"      -->  "112233445566"
// "%^&*("       -->  "%%^^&&**(("
// pseudocode: split each char of string. map that array where each char is concatenated to itself. join modified array

function doubleChar(str) {
    return str.split('').map(a=>a+a).join('')
}