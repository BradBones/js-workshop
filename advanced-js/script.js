// Function constructor.

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// // Note, Person is captalised becasue this is standard for constructors.
// // this.item - refers to the name of the property that will be created. Therefore 'this' referes to the new instance object.
// // = item - refers to the argument being passed into the function.
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// } 

// // We can add a function (method) to the Person object's prototype object - 
// // This data can now be passed down to new instances of the Person object via inheritance.
// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }

// // This can also be done with properties as well as methods (less common technique).
// Person.prototype.lastName = 'Smith';
// // Now all instances of the constructor object Person will inherit the last name of Smith.

// // 'new' generates an empty object, where we use 'Person' as the constructor and pass in new parameters.
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// // Here we can call calculateAge from the Person constructor's prototype object
// // ...on any constructed instance of Person
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// // PRACTICE.
// // Create a client object for a hair salon business.

// var Client = function(firstName, lastName, phone, email, hairLength, hairType, lastVisit) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phone = phone;
//     this.email = email;
//     this.hairLength = hairLength;
//     this.hairType = hairType;
//     this.lastVisit = lastVisit;
// };

// Client.prototype.freeStuff = '3 free samples on next visit';

// var kerry = new Client('Kelly', 'Jones', 4150000000, 'kelly.jones@gmail.com', 'jaw length', 'curly', 'June 2018');

// console.log(kerry.hairType);
// console.log(kerry.freeStuff);
// // Note that the line below does not work as Client.prototype.freeStuff adds the property freeStuff
// // ...to all instances (chlidren) of the Client constructor and not the Client constructor object itself. 
// console.log(Client.freeStuff);


// // Looking inside of objects and exploring prototypes.
// var x = [1,2,3];
// console.info(x);
// // Now open up the dropdown arrow tabs and see all of the methods inherited from JS by the array object.


// Object.create
// Creating our own prototypes without using a function constructor...
// (You probably won't use theis much but it's good to know how it works.)

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// // You can then add parameters on single lines like this.
// var john = object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// // Or better still, use the 2nd parameter of the object.create function to add params.
// // Note the curly bracket notation and lack of 'this'.
// var jane = object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

// // Primitives vs objects.

// // Proof that variables store the value of primative data types directly.
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b); 

// // Proof that variables only reference the locaion of objects in memory
// // ...they don't store the values directly.
// var object1 = {
//     name: 'John',
//     age: 26
// };
// var object2 = object1;
// object1.age = 30;
// console.log(object1.age);
// console.log(object2.age);


// // In this example the function does not change the 'age' value as it's a primative data type stored 
// // ...directly outside of the function. However, the city value inside of the object does change
// // ...because the object's data is not stored in the variable. Only a reference to the location of
// // ...the data is held in the variable.
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Franciso';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


// // Passing functions as arguments.
// var birthYear = [1978, 1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };


// // We an now use the function above along with the separate (callback) functions below
// // ...to make various calculations.

// // We can use the birthYear array to calculate the age of each user.
// function calculateAge(item) {
//     return 2019 - item;
// }

// // and we can calculate if they are an adult.
// function isFullAge(item) {
//     return item >= 18;
// }

// // We can also calculate heartrate.
// function maxHeartRate(item) {
//     if (item >= 18 && item <= 81) {
//         return Math.round(206.9 - (0.67 * item));
//     } else {
//         return -1;
//     }
// }


//  // Thes are examples of callback functions because the 'calculateAge' function is not 
//  // ...called directly - it is referenced for use by the arrayCalc function instead.
//  // Note that we need to store the results in an array in order to store & retrieve them.
// var ages = arrayCalc(birthYear, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);


// // FIRST CLASS FUNCTIONS.
// // Functions returning other functions.

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subjet do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Mary');

// // Another way to do this is this...
// interviewQuestion('teacher')('Sally');


// // Immediately Invoked Functions (IIFE)

// // Say we want to produce a 'Coin Toss' game that hides the score and only gives us a true/false (win/loose) result.
// // This is the way of doing it with a function declairation.
// // function game() {
// //     var score = Math.random() * 10;
// //     console.log(score >= 5);
// // }
// // game();

// // We can also write an IIFE - Like this:
// // The syntax works like this: By wrpping the entire function in brackets
// // ...JS treats this as a function expression rather than a function declairation,
// // ...because anything wrapped in brackets is NOT interprated as a statement.
// // This is a way to prevent functions being read from the outside and helps with
// // ... data privacy.
// // NOTE: The open and closed parenthesis on the last line. This immediatley invokes the function.
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // To prove this, we can log the score and see that "Score is not defined".
// console.log(score);

// // We can also pass a value into the function.
// // For example, lets rig the game by adding some goodLuck and passing in the value of 5.
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);













