// 6 kyu
// Backspaces in string
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// ----------------------
// Parameter: Given a string potentially containing octothorps ('#'), each representing a backspace.
// Return what that string would look like after 'evaluating' all the octothorps.
// Examples:
// cleanString('abjd####jfk#')  -->  'jf'
//      Step by step:
//          abjd####jfk#
//          abj###jfk#
//          ab##jfk#
//          a#jfk#
//          jfk#
//          jf
// cleanString('abc####d##c#')  -->  ''
// cleanString('abc#d##c')      -->  'ac'
// cleanString('ehfbzrx#aoijzb#ahyvueutuckwubzjvvflmgnghu#dfoemvzbyzajcixc#jnce#zsksadkqvxmubhfzjqgph#vyqbwpngqkfsg#')
//                              -->  'ehfbzraoijzahyvueutuckwubzjvvflmgnghdfoemvzbyzajcixjnczsksadkqvxmubhfzjqgpvyqbwpngqkfs'
// Pseudocode:
// While there is an octothorp in the string,
// set string equal to a version of itself such that the first octothorp and immediately preceding letter are 'cut out'.
// Still inside while loop, if index 0 is an octothorp, 'cut out' just that octothorp.
// Return string

function cleanString(s) {
  while (s.indexOf('#') !== -1) {
    let closest = s.indexOf('#')
    closest === 0
      ? (s = s.slice(1))
      : (s =
          s.slice(0, closest - 1) +
          `${closest !== s.length - 1 ? s.slice(closest + 1) : ''}`)
  }
  return s
}
