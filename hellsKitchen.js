// 7 kyu
// Hells Kitchen
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// Rules:
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// ----------------------
// Parameter: Given a string of words that are delimited by a space.
// Return a string of words as a Gordon Ramsay expression:
// i.e. (1) 'a' and 'A' are now '@'
// (2) every word ends with '!!!!'
// (3) vowels are now '*'
// (4) every word is in uppercase.
// Examples:
// gordon('What feck damn cake') --> 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
// gordon('are you stu pid')     --> '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
// gordon('i am a chef')         --> '*!!!! @M!!!! @!!!! CH*F!!!!'
// Pseudocode: Iterate through every word of string (delimited by single space).
// Iterate through every character of word (nested now)
// Check every condition below.
// (1) Every 'a' or 'A', if any, in word is replaced with '@'
// (2) Every word is padded with '!!!!'
// (3) Every vowel, if any, in word is replaced with '*'
// (4) Every word is uppercase.
// Return new string expression

function gordon(a) {
  return a.split` `.map(
    (w) =>
      w.toUpperCase().split``.map(
        (c) => `${c === 'A' ? '@' : 'AEIOU'.includes(c) ? '*' : c}`
      ).join`` + '!!!!'
  ).join` `
}
