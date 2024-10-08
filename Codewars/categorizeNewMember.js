// 7 kyu
// Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// ----------------------
// parameters: 2-D array given, with each subarray containing two numeric values. One representing age of a member and the other the hankdicap number of that member
// return 1-D array representing the members of the parameter array but with string values representing whether member is senior or not
// examples
// [[45, 12],[55,21],[19, -2],[104, 20]]  -->  ['Open', 'Senior', 'Open', 'Senior']
// [[3, 12],[55,1],[91, -2],[53, 23]]     -->  ['Open', 'Open', 'Open', 'Open']
// [[59, 12],[55,-1],[12, -2],[12, 12]]   -->  ['Senior', 'Open', 'Open', 'Open']
// pseudocode: if the member (ie. any given subarray of the parameter) is at least 55 and has a handicap greater than 7,
// then use map to assign that element a new string value, representing type of membership
// map will iterate through all the elements
// return result 

function openOrSenior(data){
    return data.map(ele=>ele[0]>=55 && ele[1]>7?'Senior':'Open');
}