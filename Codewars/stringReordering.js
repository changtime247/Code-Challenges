// 7 kyu
// String Reordering
// The input will be an array of dictionaries.
// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]
// Output:
// 'Vatsan took his dog for a spin'

// Given an array of objects, each object with a key as a number given in string format and a value as a word.
// Return the sentence formed by taking the values from the objects in ascending order by objects' keys.
// Ex:
// sentence([{'4': 'dog' }, {'2': 'took'}, {'3': 'his'},{'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}])
// --> 'Vatsan took his dog for a spin'
// Iterate through the List to sort it by keys in ascending order.
// Get all the values formatted as a string.

function sentence(List) {
  return List.sort((a, b) => +Object.keys(a) - +Object.keys(b)).map(
    (o) => Object.values(o)[0]
  ).join` `
}
