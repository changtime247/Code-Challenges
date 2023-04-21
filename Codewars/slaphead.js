// 7 kyu
// Slaphead
// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.
// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.
// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"
// So for this head: "------/------" you shoud return:
// ["-------------", "Unicorn"]

// Given a string with '/' representing a strand of hair and '-' as a shaved head.
// Return an array with a string of '-' of length arg-string length and a string corresponding to number of hairs on head.
// Examples:
// bald('/---------'), ['----------', 'Unicorn!']
// bald('/-----/-'), ['--------', 'Homer!']
// bald('--/--/---/-/---'), ['---------------', 'Careless!']
// Create an object with key-value pairs corresponding to the number of stray hairs to string representing status (e.g. 'Unicorn!'...).
// Iterate through arg-string and count number of stray hairs.
// Iterate through keys of object to check which key-value pair matches with count.
// Return array with corresponding values.

function bald(x) {
  const stat = {
    0: 'Clean!',
    1: 'Unicorn!',
    2: 'Homer!',
    345: 'Careless!',
  }
  let count = 0
  let res = ['-'.repeat(x.length), 'Hobo!']
  for (let i = 0; i < x.length; i++) {
    if (x[i] == '/') count++
  }
  for (const val in stat) {
    if (val.includes(count.toString())) res[1] = stat[val]
  }
  return res
}
