// 8 kyu
// Simple Change Machine

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

// ----------------------
// parameters: given string, representing a certain monetary value
// return a string, representing an equivalent monetary value but in 20pence or 10pence denominations only, in the least amount of pences being dispensed
// examples
// "£1"        -->     "20p 20p 20p 20p 20p"
// "£5"        -->     "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
// "Money"     -->     "Money"
// pseudocode: declare a variable representing the number of pence or pound
// if the parameter includes either p or £, split it and assign value to the declared variable
// if parameter does not include either, return the original parameter
// if the split is less than or equal to 5, the parameter is in pounds. this means that the entire change can be dispensed in pences. return string representing that change
// if the split is either 50 or 20, then the change will be dispensed is either 3 pieces or 2 pieces. return string representing the corresponding change
// if nothing matches, then return original parameter

function changeMe(moneyIn){
    let split;
    if(moneyIn.includes('£')){
        split = moneyIn.split('£')[1];
    } else if(moneyIn.includes('p')){
        split = moneyIn.split('p')[0];
    } else return moneyIn;
    return split <= 5 ? '20p '.repeat(split/0.2).trim() : split == 50 ? '20p 20p 10p' : split == 20 ? '10p 10p' : moneyIn;
}