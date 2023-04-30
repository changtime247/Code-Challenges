// 7 kyu
// Tea for two
// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'

// Given a string with different characters (or a number).
// Return a string with all '2's replaced with 't's.
// Ex:
// tea42('m2'),'mt'
// tea42('pre2ty'),'pretty'
// Iterate through string to replace every occurrence of '2' with 't'.

function tea42(input) {
  return input.toString().split``.map((char) => (char == '2' ? 't' : char))
    .join``
}
