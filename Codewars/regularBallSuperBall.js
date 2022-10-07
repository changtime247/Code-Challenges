// 8 kyu
// Regular Ball Super Ball
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// ----------------------
// parameters: any ball instance will have one argument, which is the property ballType
// return must give object's ballType value. if none was specified, return value as 'regular'
// examples:
// new Ball().ballType --> "regular");
// new Ball("super").ballType --> "super");
// pseudocode: arguments, when instantiating an instance of an object, are properties of that object
// you can set a default value for the parameter by setting parameter equal to the value you want to be set as default
// in order to refer to the object being instantiated, use the keyword "this".
// best practice is to not set a default parameter this way but instead to use || along with the default value
// (in this case, 'regular') in case no ballType is specified.

var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
}; 