// 7 kyu
// Dropcaps

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// This should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

// ----------------------
// parameters: a string provided. any word in string longer than 2 chars will be capitalized (just the first letter of the word)
// return modified string, such that all words longer than 2 chars will have its first letter capitalized
// all extra whitespace should be trimmed
// examples
// dropCap('Apple Banana')                                                                      -->  "Apple Banana"
// dropCap('Apple')                                                                             -->  "Apple"
// dropCap('')                                                                                  -->  ""
// dropCap('of')                                                                                -->  "of"
// dropCap('Revelation of the contents outraged American public opinion, and helped generate')  -->  "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"
// dropCap('more  than    one space between words')                                             -->  "More  Than    One Space Between Words
// dropCap('  leading spaces')                                                                  -->  "  Leading Spaces
// dropCap('trailing spaces   ')                                                                -->  "Trailing Spaces   
// dropCap('ALL CAPS CRAZINESS')                                                                -->  "All Caps Craziness
// dropCap('rAnDoM CaPs CrAzInEsS')                                                             -->  "Random Caps Craziness
// pseudocode: split string to manipulate array. each element of array needs to be checked if length is longer than 2
// use map to iterate through each array element. if longer than 2, capitalize word. else just leave word alone. 
// capitalize first letter and concatenate with rest of string lowercased.
// return the array as a string. join elements on a space

function dropCap(n) {
    return n.split(' ').map(ele=>ele.length>2? ele[0].toUpperCase()+ele.slice(1).toLowerCase():ele).join(' ')
}