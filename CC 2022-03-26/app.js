// 8 kyu
// Freudian translator
// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.
// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.
// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

// ----------------------
// parameters: modifying contents of a string
// return modified string
// Examples
// "" -> ""
// "test" -> "sex"
// "This is a test" -> "sex sex sex sex"
// "This is a longer test" -> "sex sex sex sex sex"
// "You're becoming a true freudian expert" -> "sex sex sex sex sex sex"
// pseudocode: if string length is 0, return ''. else split the string on spacebar and turn each element into 'sex' and join array on a spacebar. return joined array.

function toFreud(string) {
    return string.length===0 ? '' : string.split(' ').map(word=>word='sex').join(' ');
}