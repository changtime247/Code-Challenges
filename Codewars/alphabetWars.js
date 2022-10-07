// 7 kyu
// Alphabet war

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
// Alphabet war Collection
// Alphavet war
// Alphabet war - airstrike - letters massacre
// Alphabet wars - reinforces massacre
// Alphabet wars - nuclear strike
// Alphabet war - Wo lo loooooo priests join the war

// ----------------------
// parameters: string given
// return a string representing whether the parameter string is negative, positive or 0 if each letter is worth a number
// examples
// alphabetWar("z") , "Right side wins!"
// alphabetWar("zdqmwpbs") , "Let's fight again!"
// alphabetWar("zzzzs"), "Right side wins!"
// alphabetWar("wwwwww"), "Left side wins!"
// pseudocode: create an object to store values of letters
// split parameter and reduce the array to a numeric value, according to the key-value pairs in object
// store result of reduce in variable
// if that variable is positive return string stating right side wins
// else if that variable is negative return string stating left side wins
// otherwise, (if 0), return string stating fight again

function alphabetWar(fight){
    let stats = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}
    let result = fight.split('').reduce((a,v)=>a+ +`${stats[v]||0}`,0)
    return result>0?"Right side wins!":result<0?"Left side wins!":"Let's fight again!";
}