// 8 kyu
// Hello Happy Codevarrior!

// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

// ----------------------
// parameters: code block with bug given. figure out why it doesn't work. The original code:
// // function Warrior(n){
// //     name = n;  
// //     this.name = function(n){
// //       if( n ) name=n;
// //       return name;
// //     }
// //   }
// //  
// //   Warrior.prototype.toString = function(){
// //       return "Hi! my name's "+this.name();
// //   }
  
// return: object constructor function should return the argument provided in the method.
// Otherwise return will be the argument provided when using the keyword 'new' to make a new Warrior object 

// examples:
// var albert = new Warrior("Albert")
// var boris  = new Warrior("Boris")
// albert.toString()     -->   "Hi! my name's Albert"
// albert.name()         -->   "Albert"
// boris.name()          -->   "Boris"
// boris.name("Bobo")    -->   "Bobo"

// pseudocode: object will have only one method and no properties.
// use conditional to check if both arguments are provided (when calling object constructor function or when calling method)
// if no argument provided when calling method, return argument provided when creating object
// else return the argument provided when calling method

function Warrior(n){
    this.name = function(z){
        z ? n=z : n
        return n
    }
}

Warrior.prototype.toString = function(){
    return "Hi! my name's " + this.name();
}