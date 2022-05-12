// 8 kyu
// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// ----------------------
// parameters: two nums given. 0 is a possiblity
// return: true if one odd and other even. else false
// examples: 
// (1,4) --> true
// (2,2) --> false
// (0,1) --> true
// (0,0) --> false
// pseudocode: only looking for this condition: one is even and other is odd and vice versa. return true if conditions met. else false

function lovefunc(flower1, flower2){
    return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) ? true : false
}