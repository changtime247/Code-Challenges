// 7 kyu
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// ----------------------
// parameters: string given (arbitrary length)
// return modified string, such that the last 4 chars of the string shows but the rest of the chars are turned into "#"
// examples:
// maskify('4556364607935616')    -->     '############5616'
// maskify('1')                   -->     '1'
// maskify('11111')               -->     '#1111'
// pseudocode: check for length of string.
// if length is not greater than 4, just return the string, as is
// otherwise, return the concatenated string of:
// string of '#', whose length of #s will be original length minus 4
// + the last 4 chars sliced off the parameter

function maskify(cc) {
    let length=cc.length;
    return length>4 ? `#`.repeat(length-4)+cc.slice(-4) : cc;
}  