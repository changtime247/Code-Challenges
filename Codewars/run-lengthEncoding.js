// 6 kyu
// Run-length encoding

// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

// ----------------------
// Parameters: string given
// Return an array of subarrays, each representing the count of a letter's consecutive appearance at index 0 and the letter at index 1
// Examples:
// "hello world!"                                 --> [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"        --> [[34,'a'], [3,'b']]
// "ZZZFFFFWXXXXPGGGGSSSAAAAAAAXXXXWWWWEEE"       --> [[ 3, 'Z' ],[ 4, 'F' ],[ 1, 'W' ],[ 4, 'X' ],[ 1, 'P' ],[ 4, 'G' ],[ 3, 'S' ],[ 7, 'A' ],[ 4, 'X' ],[ 4, 'W' ],[ 3, 'E' ]]
// "DJJJJYYYXXXFFKKKKVVVLLLLDJJJDDDDYYYYIIIZSSSHH"--> [[ 1, 'D' ],[ 4, 'J' ],[ 3, 'Y' ],[ 3, 'X' ],[ 2, 'F' ],[ 4, 'K' ],[ 3, 'V' ],[ 4, 'L' ],[ 1, 'D' ],[ 3, 'J' ],[ 4, 'D' ],[ 4, 'Y' ],[ 3, 'I' ],[ 1, 'Z' ],[ 3, 'S' ],[ 2, 'H' ]]
// Pseudocode: 
// create an empty object
// the object's keys will store the index at which a letter that breaks a consecutive streak appears
// the object's values will contain the arrays needed to return correct value
// split string and iterate through each character of string
// use for loop with variable (ex i) starting at index 0 of array. iteration will not be by ones. iteration will be based on index of the appearance of differing characters going from left to right
// in other words, iterate through string while skipping the consecutively repeated characters
// within loop, create a variable (ex j) with value of 0. this variable will allow us to count by ones (since the iteration from previous step is not by ones but by index value)
// reason it is set at 0 is so that we can check if character at index i+j is equal to i+j+1
// within the loop, create a while loop that will add one to j whenever a char is equal to char at next index value
// the adding one to j is also being used to check if the char at the following index (meaning +1+1) is the same
// if yes keep adding one
// if not, nothing has been added to j
// in either case, create a property for our answer object from step 1
// object's property is the index at which a letter differing from previous letter appears. (by default first letter should appear, unless empty string)
// object's value is array with count of letter's consecutive appearance as numeric value at index 0 and letter as string at index 1
// return that object's values

var runLengthEncoding = function(str){
    let spl = str.split``;
    let ans = {};
    for(let i=0; i<spl.length; i+=ans[i][0]){ 
        let j=0;        
        while(spl[i+j]===spl[i+j+1]){
            j++;
        }
        ans[i] = [j+1, spl[i]];
    }
    return Object.values(ans);
}