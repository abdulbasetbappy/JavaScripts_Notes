// Write Variables Name in Right Ways
firstname
first_name
first-name
firstName
firstname99

// In JavaScript, naming conventions for variables are not strict, but it's important to follow certain best practices to make your code readable and maintainable. Here are some common conventions for naming variables in JavaScript:

// Use descriptive names: Choose names that clearly describe the purpose of the variable.This makes your code more readable and easier to understand.

// Use camelCase: When naming variables, use camelCase, which means the first word is lowercase and subsequent words are capitalized.This convention is widely used in JavaScript.

// Avoid using reserved words: JavaScript has reserved words that cannot be used as variable names, such as "if", "else", and "while".Make sure to avoid using these words as variable names to prevent errors.

// Use meaningful abbreviations: If a variable name is too long, you can use meaningful abbreviations to make it shorter while still maintaining its clarity.

// Use consistent naming: Use consistent naming conventions throughout your code to make it easier to read and understand.For example, if you use camelCase for variable names, use it consistently across all your variables.

//     Here's an example of how to apply these conventions to variable names:


// Good variable names:
var firstName = "John";
var lastName = "Doe";
var numItems = 10;
var userLoggedIn = true;

// Avoid using reserved words:
// var if = 5; // This will throw an error

// Use consistent naming conventions:
var userName = "johndoe";
var userEmail = "john.doe@example.com";
var userAddress = "123 Main St.";
// Following these naming conventions for variables in JavaScript will make your code more readable and easier to maintain, both for yourself and for others who may work with your code in the future.

/*
Ref :
https://www.w3schools.com/js/js_reserved.asp

*/


// 1. Which of the following variable names is NOT a valid variable name in JavaScript?
// A. myVar
// B. $price
// C. 123abc
// D. camelCase
// Answer: C. 123abc

// 2. Which of the following is a valid way to declare a variable in JavaScript?
// A. variable name = value;
// B. var name = value;
// C. name = value;
// D. let name = value;
// Answer: D. let name = value;

// 3. Which of the following is a recommended naming convention for variables in JavaScript?
// A. snake_case
// B. camelCase
// C. PascalCase
// D. kebab-case
// Answer: B. camelCase

// 4. Which of the following variable names is more descriptive and follows the naming convention?
// A. myCar
// B. car
// C. Mycar
// D. my_car
// Answer: A. myCar




// ------------------- Var ---------------------------
/*
 var x = "Abdul Baset bappy";     //Here X is variable name & Abdul Baset Bappy is Variable Value.
     var x = "Sumiya Jannat Mim";     // Can Declear 2nd Time
          x = "Abullah Al Sakib";       //Can Over Write
*/


// ------------------- let ---------------------------
/*
let x = "Abdul Baset bappy"; 
    let x = "Sumiya Jannat Mim";  // Cann't Declear 2nd Time
            x = "Abullah Al Sakib";  //Can Over Write

*/


// ------------------- Const ---------------------------
/*
let x = "Abdul Baset bappy"; 
    let x = "Sumiya Jannat Mim";  // Cann't Declear 2nd Time
            x = "Abullah Al Sakib";  //Cann't Over Write

*/


// In JavaScript, variables are used to store data values.They can be declared using the "var", "let", or "const" keywords, and the type of value they can store can be changed during the program execution.

//     Here's an example of how to declare and use a variable in JavaScript:


// Declare a variable named "fname" and assign it the value "John"
var fname = "John";

// Print the value of the "name" variable to the console
console.log(fname);

// Change the value of the "fname" variable to "Jane"
fname = "Jane";

// Print the updated value of the "fname" variable to the console
console.log(fname);
// In this example, we first declare a variable named "name" and assign it the value "John".We then print the value of the "name" variable to the console using the "console.log()" method.

//     Next, we change the value of the "name" variable to "Jane" and print the updated value to the console again.Since we used the "var" keyword to declare the variable, it can be reassigned to a different value later in the program.

// Variables are a fundamental concept in JavaScript and are used to store all kinds of data, from simple strings and numbers to more complex objects and arrays.

/*
Ref :
https://www.w3schools.com/js/js_variables.asp


*/


// 1. What is the value of x after the following code is executed?
var x;
console.log(x); // Output: undefined
// A. undefined
// B. null
// C. 0
// D. ""
// Answer: A. undefined

// 2. What is the value of y after the following code is executed?
var y = 5;
console.log(y); // Output: 5
// A. undefined
// B. null
// C. 0
// D. 5
// Answer: D. 5

// 3. What is the value of z after the following code is executed?
var z = "Hello";
console.log(z); // Output: "Hello"
// A. undefined
// B. null
// C. 0
// D. "Hello"
// Answer: D. "Hello"

// 4. What is the value of w after the following code is executed?
var w = 10;
w = w + 5;
console.log(w); // Output: 15
// A. 5
// B. 10
// C. 15
// D. 20
// Answer: C. 15
