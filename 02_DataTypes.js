//Primative Data Types
/*
var x ="hello World";    ------------------------string
var x =25;---------------------------------------Number
var x =true;-------------------------------------Boolean
var x =null;-------------------------------------Null
var x;-------------------------------------------Undifined
*/
//None - Premitive Data Types
/*
 var x =["helena", "Bappy", "sumiya", "mim"];----------------Array
 var x ={
    name: bappy,
    age:25,
    class: 10,
    id:105546
 };----------------------------------------------------------Object
*/


// In JavaScript, there are several built -in data types that are used to represent different kinds of values.Here are some of the main data types in JavaScript, along with examples:

// Numbers: Numbers are used to represent numerical values, including integers and decimals.
var x = 10;
var y = 3.14;
// Strings: Strings are used to represent text and are enclosed in single or double quotes.

var firstName = "John";
var lastName = 'Doe';

// Booleans: Booleans are used to represent true or false values.

var isLoggedin = true;
var isEditing = false;

// Null: Null is used to represent the intentional absence of any object value.
var user = null;

// Undefined: Undefined is used to represent a variable that has not been assigned a value.
var x;
console.log(x); // Output: undefined

// Objects: Objects are used to represent complex data structures, and can contain properties and methods.

var person = { firstName: "John", lastName: "Doe", age: 30 };

// Arrays: Arrays are used to store collections of data, and can contain any combination of data types.

var numbers = [1, 2, 3, 4, 5];
var colors = ["red", "green", "blue"];

// Symbols: Symbols are used to create unique identifiers for object properties.

var symbol1 = Symbol("description");
var symbol2 = Symbol("description");

// These are the main data types in JavaScript.Understanding these data types is important for writing effective JavaScript code.



// 1. What is the data type of x in the following code?
var x = 5;
// A. string
// B. number
// C. boolean
// D. object
// Answer: B. number

// 2. What is the data type of y in the following code?
var y = "Hello";
// A. string
// B. number
// C. boolean
// D. object
// Answer: A. string

// 3. What is the data type of z in the following code?
var z = true;
// A. string
// B. number
// C. boolean
// D. object
// Answer: C. boolean

// 4. What is the data type of w in the following code?
var w = [1, 2, 3];
// A. string
// B. number
// C. boolean
// D. object
// Answer: D. object





// In JavaScript, there are two types of data types: primitive and non - primitive.The main difference between them is how they are stored and accessed in memory.

// Primitive data types are simple and immutable data types that are stored directly in memory.They are called "primitive" because they represent basic values and cannot be broken down any further.There are five primitive data types in JavaScript:

// string: A sequence of characters, such as "hello" or "world".
//number: A numeric value, such as 42 or 3.14.
//boolean: A logical value that is either true or false.
//null: A special value that represents "no value" or "nothing".
//undefined: A special value that represents an undefined value or variable.

// When a primitive data type is assigned to a variable, the actual value is stored directly in memory at the location of the variable.For example:


// let x = 42; // x is assigned the value 42, which is a primitive data type

// Non - primitive data types, on the other hand, are more complex data types that are stored as a reference to a location in memory.They are called "non-primitive" because they are made up of one or more primitive data types and can be broken down further.There is only one non - primitive data type in JavaScript, which is:

// object: A collection of properties, where each property has a name and a value.

// When a non - primitive data type is assigned to a variable, the variable stores a reference to the location in memory where the object is stored.For example:


// let person = { name: "John", age: 30 }; // person is assigned a reference to an object, which is a non-primitive data type

// In summary, primitive data types are simple and immutable values that are stored directly in memory, while non - primitive data types are more complex and are stored as a reference to a location in memory.Understanding the difference between them is important when working with data in JavaScript, as it affects how data is stored and accessed in memory.