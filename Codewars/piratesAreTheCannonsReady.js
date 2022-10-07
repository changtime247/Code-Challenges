// 8 kyu
// Pirates!! Are the Cannons ready!??

// Ahoy Matey!
// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?
// Your task is to check if the gunners are loaded and ready, if they are: Fire!
// If they aren't ready: Shiver me timbers!
// Your gunners for each test case are 2, 3 or 4.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

// ----------------------
// parameters: an object given with key value pairs of pirate and a string of either 'aye' or 'nay'
// return: if all 'aye', return "Fire!" Else, return "Shiver me timbers!"
// examples: 
// {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'} --> "Fire!"
// {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'} --> "Shiver me timbers!"
// pseudocode: we must get at all the values of the object. if none are nay, return Fire!. Else other statement.

const cannonsReady = (gunners) => {
    return !Object.values(gunners).includes('nay') ? 'Fire!' : 'Shiver me timbers!';
}