// 7 kyu
// Thinkful - Object Drills: Quarks
// You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects.
// Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.
// Your task
// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').
// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.
// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.
// Example
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

// ----------------------
// Parameter: No arguments. Create a class constructor with 3 properties and 1 method as described.
// // Properties: color, flavor, baryon_number
// // Method: interact, which takes 1 argument (a different object) and swaps the two objects color property value.
// Return that class constructor function. 
// Examples:
// q1 = Quark("red", "up")
// q1.color          -->      "red"
// q1.flavor         -->      "up"
// q2 = Quark("blue", "strange")
// q2.color          -->      "blue"
// q2.baryon_number  -->      0.3333333333333333
// q1.interact(q2)
// q1.color          -->      "blue"
// q2.color          -->      "red"
// Pseudocode:
// Create a new class, Quark, using a class constructor function, which takes two arguments (color and flavor).
// These will be set dynamically when creating a new instance. 
// The third property (Baryon Number) is a constant, so no need to be passed in as argument.
// Lastly, Quark will have a method named 'interact', which will be used to swap the object's color property value with another object's.
// Use an intermediary variable to store value temporarily.

class Quark {
  constructor(color, flavor) {
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1 / 3
  }
  interact(q2) {
    let q2C = q2.color
    q2.color = this.color
    return (this.color = q2C)
  }
}