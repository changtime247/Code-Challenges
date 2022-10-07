// 7 kyu
// Coding 3min : Remove screws I

// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.

// The input will be a (non-empty) string of screws, e.g. : "---+++"

// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw : 1 second
// move to the next screw: 1 second
// switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

// Examples
// In order to be more clear, we use ABCDEF to represent the screws. The number in brackets is the time in seconds:

// screws: "---+++"
//          ABCDEF

// remove A (1) + move to B (1) + remove B (1) + 
// move to C (1) + remove C (1) + move to D (1) +
// switch screwdriver (5) + remove D (1) +
// move to E (1) + remove E (1) + move to F (1) + remove F (1)

// total time = 16 seconds
// Another example:

// screws: "-+-+-+"
//          ABCDEF

// remove A (1) +
// move to B (1) + switch screwdriver (5) + remove B (1) +
// move to C (1) + switch screwdriver (5) + remove C (1) +
// move to D (1) + switch screwdriver (5) + remove D (1) +
// move to E (1) + switch screwdriver (5) + remove E (1) +
// move to F (1) + switch screwdriver (5) + remove F (1)

// total time = 36 seconds 

// ----------------------
// Parameter: Given a string, of arbitrary length, with only '+' or '-' (representing screws)

// Return an integer representing the amount of time it took to unscrew all screws, given that:
// It takes 5 seconds to switch screwdrivers (from a flat screwdriver to a plus or vice versa);
// It takes 1 second to move to the next screw;
// It also takes 1 second to remove the screw.

// Examples:
// sc("---+++")                                    --> 16
// sc("-+-+-+")                                    --> 36
// sc('+----+++-+--')                              --> 48
// sc("-+-+-----------")                           --> 49
// sc("-+-+-++++++++++")                           --> 54
// sc('-----+--++-+++---++-+')                     --> 86
// sc('+--++--+-++-----+------+++--------+' )      --> 129
// sc('--+++-++++++---+-++++-+-+++--+---++++--+')  --> 164

// Pseudocode:
// In order to find the total time it takes to methodically go down one by one (of the string) and remove each screw, we need to sum 3 things:
// 1. The total amount of time it takes to move to the next screw, basically the length of argument string - 1 (i.e. minus 1 since we start at the first screw by default)
// 2. The total amount of time it takes to remove one screw, basically the length of argument string
// 3. The total amount of time it takes to switch screwdrivers
// To find out 3., use reduce method on split string and add 5 for everytime value at index i does not equal value at index i+1
// Return sum of the three.

function sc(screws){
    let timeAllSwitches = screws.split``.reduce((a,k,i,r)=>{
        return (r[i+1] ? (k === (r[i+1]) ? a : a+=5) : a) && a
    },0)
    return timeAllSwitches + (2*screws.length)-1
}