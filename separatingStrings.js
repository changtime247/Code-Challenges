// 6 kyu
// Separating Strings

// Create a function that takes a string and separates it into a sequence of letters.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:
// sepStr("Just Live Life Man") -->
// [['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']]);

// sepStr("The Mitochondria is the powerhouse of the cell") -->
// [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// [ '', 'o', '', '', 'e', '', '', 'l' ],
// [ '', 'c', '', '', 'r', '', '', '' ],
// [ '', 'h', '', '', 'h', '', '', '' ],
// [ '', 'o', '', '', 'o', '', '', '' ],
// [ '', 'n', '', '', 'u', '', '', '' ],
// [ '', 'd', '', '', 's', '', '', '' ],
// [ '', 'r', '', '', 'e', '', '', '' ],
// [ '', 'i', '', '', '', '', '', '' ],
// [ '', 'a', '', '', '', '', '', '' ]]

// ----------------------
// parameters: string of space separated words given
// return an array of arrays such that each subarray contains all the letters that share the same index number value
// if there is no letter at said index, assign a value of '' at that subarray index
// sepStr("Just Live Life Man") -->
// [['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']]);
// sepStr("The Mitochondria is the powerhouse of the cell") -->
// [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// [ '', 'o', '', '', 'e', '', '', 'l' ],
// [ '', 'c', '', '', 'r', '', '', '' ],
// [ '', 'h', '', '', 'h', '', '', '' ],
// [ '', 'o', '', '', 'o', '', '', '' ],
// [ '', 'n', '', '', 'u', '', '', '' ],
// [ '', 'd', '', '', 's', '', '', '' ],
// [ '', 'r', '', '', 'e', '', '', '' ],
// [ '', 'i', '', '', '', '', '', '' ],
// [ '', 'a', '', '', '', '', '', '' ]]
// pseudocode: since only the string value is given as the parameter
// first, calculate length of the array, which is equal to the length of the longest word of the string
// second, create an array, of that length, containging empty subarrays
// use a loop (iterating the same number of times as the number of elements in the longest word)
// at each iteration, take nth word, split it. and if not long as longest word, splice empty strings into the word-array
// and push each character of the word (including any empty strings that may have been created) to each subarray of answer array
// return answer array

function sepStr(str) {
    let split = str.split(' ');
    let length = split.slice().sort((a,b)=>b.length-a.length)[0].length;
    let ans = Array.from({length:length},(_,i)=>[]);
    for(let i=0; i<split.length; i++){
        let wordSplit = split[i].split('');
        if(wordSplit.length<length) wordSplit.splice(wordSplit.length, length-wordSplit.length, ``);
        ans.forEach((x,idx)=>x.push(`${wordSplit[idx]||``}`));
    }
    return ans;
}