// 7 kyu
// What comes after?
// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).
// If there is a number, punctuation or underscore following the letter, it should not be returned.
// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"
// Return an empty string if there are no instances of letter in the given string.

// Given a string, str, and a single letter string, l, as arguments.
// Return a new string consisting of all the letters (concatenated), derived from the letter proceeding the single letter argument, which is case-insensitive.
// Returned string should only include letters.
// Ex:
// comes_after("are you really learning Ruby?",'r'),'eenu'
// comes_after("Pirates say arrrrrrrrr",'r'),'arrrrrrrr'
// comes_after("Free coffee for all office workers!",'f'),'rfeofi'
// comes_after("Every Sunday, she reads newspapers.",'s'),'uhp'
// comes_after("king kUnta is the sickest rap song ever kNown",'k'),'iUeN'
// comes_after("p8tice makes pottery p_r p0rfect!",'p'),'o'
// comes_after("d8u d._ rly 2d1s",'D'),''
// comes_after("nothing to be found here",'z'),''
// Iterate through str and any letter that matches l, concatentate the proceeding letter to a new string.

function comes_after(str, l) {
  return str.split``.reduce(
    (a, c, i, r) =>
      c.toLowerCase() === l &&
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(r[i + 1])
        ? (a += r[i + 1] || '')
        : a,
    ''
  )
}
