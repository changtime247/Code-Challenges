// 6 kyu
// Pair of gloves

// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// ----------------------
// Parameters: Given an unsorted array of colors (as strings) and each color represents a sock (one sock, not a pair)
// Return a number representing how many pairs of socks there are (each sock, in a pair, must be same color)
// Examples:
// numberOfPairs(['red','red'])                                             -->     1
// numberOfPairs(["red", "green", "red", "blue", "blue"])                   -->     2
// numberOfPairs(["red", "red", "red", "red", "red", "red"])                -->     3
// numberOfPairs(['red','green','blue'])                                    -->     0
// numberOfPairs(['gray','black','purple','purple','gray','black'])         -->     3
// numberOfPairs(['Blue','Gray','Blue','Green','Red','White','Lime','Fuchsia','Purple','Aqua','Maroon','Black','Olive','Navy','Olive','Black','Olive'])  -->  1
// Pseudocode:
// Given a pile of socks (an unsorted array)
// Create a count variable, set to 0.
// Go through pile one sock at a time making a mini-pile for each unique color 
// (i.e. Iterate through the array making a map with keys as color-name and values as the count (the number of whatever color sock))
// Go through all mini-piles. Count how many there are in the mini-pile. Divide by 2 (and, if fraction, round down to nearest integer)
// (i.e. Iterate through the map dividing each pile value by 2 and round down. Add that number to the count variable). 
// Return final count.

function numberOfPairs(gloves){
    let pairs=0;
    let m = new Map();
    gloves.forEach((e)=> m.has(e) ? m.set(e, m.get(e)+1) : m.set(e, 1));
    m.forEach((v)=> {
        pairs+=Math.floor((v)/2);
    })
    return pairs;
}