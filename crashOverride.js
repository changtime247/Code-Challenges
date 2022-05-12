// 8 kyu
// Crash Override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!

// ----------------------
// parameters: two strings given. also, already defined are two objects firstName and surname.
// return the values of the objects, if the parameter strings match the corresponding keys.
// else return the statement "Your name must start with a letter from A - Z."
// examples:
// aliasGen("Mike", "Millington")     -->   "Malware Mike"
// aliasGen("Fahima", "Tash")         -->   "Function T-Rex"
// aliasGen("Daisy", "Petrovic")      -->   "Data Payload"
// aliasGen("7393424", "Anumbha")     -->   "Your name must start with a letter from A - Z."
// aliasGen("Anuddanumbha", "23200")  -->   "Your name must start with a letter from A - Z."
// pseudocode: create two variables, each to store the charCode of either strings' 0th index.
// if the variables fall within the range of UNICODE 65 through 90 or 97 through 122, then return the corresponding values of the provided objects
// else return the statement

function aliasGen(name, alias){
    let nameZero = name.toString().charCodeAt(0)
    let aliasZero = alias.toString().charCodeAt(0)
    if(((nameZero >= 65 && nameZero <= 90) || (nameZero >= 97 && nameZero <= 122)) && ((aliasZero >= 65 && aliasZero <= 90) || (aliasZero >= 97 && aliasZero <= 122))){
        return firstName[(name.toUpperCase())[0]] + ' ' + surname[(alias.toUpperCase())[0]]
    } else return "Your name must start with a letter from A - Z."
}