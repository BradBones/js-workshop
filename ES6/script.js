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



// Example of function scop vs block scope.

// ES6 block scope.
// The two i's are not in the same scope and therefore i = 23 is maintained.
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

// ES5 flunction scope.
// The two i's are in the same scope and i = 23 will be overwritten when the loop runs.
var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);