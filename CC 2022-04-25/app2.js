// 8 kyu
// Blood-Alcohol Content

// Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

// He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

// BAC calculator Formula:

// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Source:

// http://www.endmemo.com/medical/bac.php

// Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.

// ----------------------
// parameters: 4 given: 
// an object with two properties, each with a numeric value,
// a number representing weight in lbs,
// a string representing sex,
// and a number representing number of hours passed since last drinking.
// return: BAC%
// examples
// bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1)       -->     0.0837
// bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1)      -->     0.1758
// bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3)         -->     0.0601
// bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2)        -->     0.2414
// pseudocode: essentially this function will reproduce the formula, which is provided in the link in the description, in JS
// the only two parameters that needs to be manipulated before being fed into the formula are (1) the object and (2) the string
// use dot notation to access object values
// use conditional to see if string is male. if true or not, assign corresponding numeric value to that string parameter
// plug-n-return, with two additions: changing the data type of string to number and using the toFixed method to cut length of decimals to only 4 places

function bloodAlcoholContent(drinks, weight, sex, time){
    sex==='male'?sex=0.73:sex=0.66;
    return +(drinks.ounces * drinks.abv * (5.14 / weight) * sex - 0.015 * time).toFixed(4);
}