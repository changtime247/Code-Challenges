// 7 kyu
// Search JSON for any key value pair
// You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.
// He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches.
// The basic structure of the JSON object is shown below:
// let characters = {"characters": [
//     {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
//     // ......
// ]};
// The JSON object is preloaded and can be accessed using the variable characters.
// Your function will also need to accommodate the following:
// Passed value does not match any keys: in this instance return an empty array.
// Passed key does not exist: in this instance return an empty array.
// Passed val should not be case sensitive.

// Given an object with a key, characters, and value of an array of different objects, each representing a character with different attributes as key-value pairs.
// Also given a key and value to be searched for within the object.
// Return the characters with matching key-value attributes.
// Create empty array to hold found characters.
// Iterate through array of characters and if match, push into new array.

function getCharacters(obj, key, val) {
  var foundCharacters = []
  for (const character of obj.characters) {
    if (character[key].toLowerCase() == val.toLowerCase())
      foundCharacters.push(character)
  }
  return foundCharacters
}
