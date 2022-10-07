// 7 kyu
// ToLeetSpeak
// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
// For example:
// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:
// { A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', Y : 'Y', Z : '2' }

// ----------------------
// Parameter: Given a string.
// Return string encoded in 'leet'.
// Examples:
// toLeetSpeak("LEET")                                         -->  "1337"
// toLeetSpeak("CODEWARS")                                     -->  "(0D3W@R$"
// toLeetSpeak("HELLO WORLD")                                  -->  "#3110 W0R1D"
// toLeetSpeak("LOREM IPSUM DOLOR SIT AMET")                   -->  "10R3M !P$UM D010R $!7 @M37"
// toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")  -->  "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06"
// Pseudocode:
// Split string into individual characters.
// Iterate through each character and return complement-character. If there is no such complement, simply keep original character.
// Return entire expression.

function toLeetSpeak(str) {
  const leetCode = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2',
  }
  return str.split``.map((e) => leetCode[e] || e).join``
}
