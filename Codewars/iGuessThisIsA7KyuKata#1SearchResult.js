// 7 kyu
// I guess this is a 7kyu kata #1: Search result

// Description
// You are using a search engine and type some keywords. For the sake of simplicity, we simplify all the keywords into one letter. For example, "abc" represents three keywords: a, b and c. We have a lot of search results, please pick out the results that contain all the keywords.

// Example:

// keywords="abc", searchResult=["ab","abc","abcd","bcd"]
// You should return: ["abc","abcd"]
// Key words can have different order, also may not be continuous and You don't need to sort them out or to remove the same result:

// keywords="abc", 
// searchResult=["ab","cba","abc","axbxc","ddd","abc","cxab","aabbcc"]
// You should return: ["cba","abc","axbxc","abc","cxab","aabbcc"]
// Key words may contains uppercase letters:

// keywords="Yes", 
// searchResult=["yes","Yes","Yeah","Yestoday"]
// You should return: ["Yes","Yestoday"]
// OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

// Task
// Complete function finalResult that accepts two arguments keywords and searchResult, return all valid results that contains all keywords.

// Argument keywords is always a string that contains uppercase or lowercase letters; Argument searchResult is always a string array that contains any strings.

// ----------------------
// parameters: given (1) string and (2) an array consisting of strings
// return: the string parameter is a keyword that we will be looking for within the array-of-strings parameter
// examples:
// finalResult("abc",["ab","abc","abcd","bcd"])                                -->   ["abc","abcd"]
// finalResult("abc",["ab","cba","abc","axbxc","ddd","abc","cxab","aabbcc"])   -->   ["cba","abc","axbxc","abc","cxab","aabbcc"]
// finalResult("Yes",["yes","Yes","Yeah","Yestoday"])                          -->   ["Yes","Yestoday"]
// pseudocode: 
// split keyword into an array of individual letters
// slice the searchResult array-parameter, so as to not modify it,
// and filter it to include only the strings that include every character of the keyword

function finalResult(keywords,searchResult){
    return searchResult.slice().filter((word)=>keywords.split``.every(ltr=>word.includes(ltr)));
}