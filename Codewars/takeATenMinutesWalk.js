// 6 kyu
// Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// ----------------------
// parameters: an array of direction letters given. to walk the direction letter street it takes 1 min. 
// return true if "walking" the array of direction letters takes exactly 10 min. else false
// Examples (input -> output)
// ['n','s','n','s','n','s','n','s','n','s']) --> true
// ['w','e','w','e','w','e','w','e','w','e','w','e']) --> false
// ['w']) --> false
// ['n','n','n','s','n','s','n','s','n','s']) --> false
// pseudocode: pretend we are starting from coordinates (0,0), if you will. 
// to represent this in code, lets set a counter for each direction we walk. for the person to get
// back to point (0,0), he must have an equal walk n and s. and also equal walk w and e. 
// ex: walking 1 block east and 1 block west will effectively cancel each other out, but it took 2 minutes.
// if each block-walk takes 1 min, the length of walk must be 10 and the sum of both n-and-s and w-and-e must be equal.
// if those conditions are met, then return true. else false.

function isValidWalk(walk) {
    let numn = 0,
        nums = 0,
        numw = 0,
        nume = 0;
    walk.forEach(ele => {
        if(ele === 'n'){
            numn++;
        } else if(ele === 's'){
            nums++;
        } else if(ele === 'w'){
            numw++;
        } else if (ele === 'e'){
            nume++;
        }
    })
    if((numn == nums && numw == nume) && (walk.length === 10)) {
        return true
    } else return false;
}