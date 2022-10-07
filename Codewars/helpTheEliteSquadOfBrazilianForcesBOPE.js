// 8 kyu
// Help the Elite Squad of Brazilian forces BOPE
// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

// ----------------------
// parameters: given a string (corresponding to a value of number of bullets) and number of streets needed to cross
// return the number of magazines the soldier needs to carry
// Examples
// ["PT92", 6] -> 2
// ["M4A1", 8] -> 1
// ["M16A2", 19] -> 2
// ["PSG1", 31] -> 19
// ["PT92", 19] -> 4
// pseudocode: create obj with the weapon: bullet-count key: val pairs. 
// match string to obj and find corresponding value. see how many streets they will cross
// and multiply that value by 3. divide the number of bullets needed by number of bullets
// 1 magazine holds. round up. return that value


function magNumber(info){
    let type = {
        PT92 :17,
        M4A1 :30,
        M16A2:30,
        PSG1 :5,
    };
    return Math.ceil(info[1]*3/type[info[0]]);
}