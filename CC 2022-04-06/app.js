// 8 kyu
// Name Shuffler
// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

// ----------------------
// parameters: string of two words (names)
// return the same string but the two words swapped places
// Example: 'john McClane' --> 'McClane john'
// pseudocode: turn string into array. split in middle (using space). return string concatenated with the two parts swapped

function nameShuffler(str){
    let split = str.split(' ');
    return split[1]+' '+split[0];
}