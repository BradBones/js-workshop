/////////////////////////
// // Let & Const

// // ES5
// var name5 = 'Jane Smith';
// var age = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6); // Throws an error because const can't be mutated.

// // ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1919; 
//     }
//     // This next line works in ES5 because var is function scoped.
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officialy allowed to drive a car.');
// }


// driversLicense5(true);


// // ES6
// function driversLicense6(passedTest) {
//     if (passedTest) {
//         let firstName = 'John';
//         const yearOfBirth = 1919;
//     }
//     // This next line wil NOT work in ES6 because const & let are block scoped.
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officialy allowed to drive a car.');
// }

// driversLicense6(true);



// // Example of function scop vs block scope.

// // ES6 block scope.
// // The two i's are not in the same scope and therefore i = 23 is maintained.
// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// // ES5 flunction scope.
// // The two i's are in the same scope and i = 23 will be overwritten when the loop runs.
// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);



// /////////////////////////
// // // Blocks & IIFEs

// // ES5 IIFE
// (function() {
//     var c = 3;
// })();
// // Access is prevented
// console.log(c);


// // In ES6 we can simply do this:
// {
//     const a = 1;
//     let b = 2;
//     // Test
//     var c = 5;
// }
// // Access is prevented because const & let are block scope, we just place them in a block {}.
// console.log(a + b);

// // Let's test this and pop a var in there:
// console.log(c);
// // var gets logged because it needs an IIFE to make it privatly scoped and we only needed a block to privatly scope let & const.




// /////////////////////////
// // // Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2019 - year;
// }

// // Example of template literals: `Strings ${JS expressions} followed by more strings'

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// // Searching / evaluating strings
// const n = `${firstName}  ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('h'));
// console.log(n.includes('_'));
// console.log(`${firstName} `.repeat(5));



// /////////////////////////
// // // Arrow functions

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(element) {
//     return 2016 - element;
// });
// console.log(ages5);

// // ES6
// let ages6 = years.map(element => 2016 - element);
// console.log(ages6);

// ages6 = years.map((element, index) => `Age element ${index + 1}: ${2016 - element}.`);
// console.log(ages6);

// // If we need more then one line of code in the function, we have to use curly braces and the return statement.
// ages6 = years.map((element, index) => {
//     const now = new Date().getFullYear();
//     const age = now - element;
//     return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);


/////////////////////////
// // Arrow functions 2 - 'this' keyword

// // ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();


// // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();



// function Person(name) {
//     this.name = name;
// };

// // ES5 (using bind to fix the scope issue)
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);


// // ES6 (using an arrow function to control scope)
// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el => `${this.name} is friends with ${el}.`);
//     console.log(arr);
// }
// new Person('Mike').myFriends6(friends);



// /////////////////////////
// // Destructuring

// // ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// // ES6
// const [name, year] = ['John', 26];



// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }


// const [age, retirement] = calcAgeRetirement(1990);
//  console.log(age);
//  console.log(retirement);


//////////////////////////
// Arrays

// ES6
const boxes = document.querySelectorAll('.box');

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerbue');