/*********************
 * Variables and data types
 */

    // var firstName = 'John';
    // console.log(firstName);

    // var lastName = 'Smith';
    // var age = 28;

    // var fullAge = true;
    // console.log(fullAge);

    // var job;
    // console.log(job);

    // job = 'teacher';
    // console.log(job);


/*********************
 * Variable mutation and types coercion
 */

    // var firstName = 'John';
    // var age = 28;
    // console.log(firstName + ' ' + age);

    // // multiple variables can be set up on the same line and then defined later.
    // var job, isMarried;
    // job = 'teacher';
    // isMarried = false;

    // console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

    // // Variable mutation
    // age = 'twenty eight';
    // job = 'driver';

    // var lastName = prompt('What is his last name?');
    // console.log(firstName + ' ' + lastName);


/*********************
 * Basic operators
 */

    // var now, ageJohn, ageMark;
    // now = 2018
    // ageJohn = 28;
    // ageMark = 33;

    // // Maths operators
    // ageJohn = now - 28;
    // ageMark = now - 33;
    // console.log(ageJohn + ' ' + ageMark);

    // console.log(now + 2);
    // console.log(now * 2);
    // console.log(now / 2);

    // // Logical operators
    // var johnOlder = ageJohn < ageMark;
    // console.log(johnOlder);

    // // typeof operator
    // console.log(typeof johnOlder);
    // console.log(typeof ageJohn);
    // console.log(typeof 'Mark is older than John');

    // var x;
    // console.log(typeof x);

    
/*********************
 * Operators precidence
 */

    // var now = 2018;
    // var birthJohn = 1989;
    // var AdultAge = 18;

    // // Multiple operators
    // var isAdult = now - birthJohn >= AdultAge;
    // console.log(isAdult);

    // // Grouping
    // var ageJohn = now - birthJohn;
    // var ageMark = 35;
    // var average = (ageJohn + ageMark) / 2;
    // console.log(average);

    // // Multiple assignments
    // var x, y;
    // x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
    // console.log(x, y);

    // // 2 + 4 + 5 (reads left to right)
    // // the assignment operator reads from right to left

    // // More operators
    // x = x * 2; // is the same as...
    // x *= 2;
    // console.log(x);
    // x += 1; // is the same as...
    // x++
    // console.log(x);



/*********************
 * CODING CHALLENGE 1
 */

// var markHeight = 1.7;
// var markWeight = 100;

// var johnHeight = 2;
// var johnWeight = 80;


// // BMI
// var markBMI = markWeight / (markHeight * markHeight);
// var johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// var compair = markBMI >= johnBMI;

// var whoAteAllThePies = 'Is Mark\'s BMI higher than John\'s?';
// console.log(whoAteAllThePies + ' ' + compair);



 /*********************
 * If / else statements
 */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName + ' is married');
//  } else {
//      console.log(firstName + ' will hopefully marry soon :)');
//  }



//  var isMarried = true;
//  if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }



// var markHeight = 1.7;
// var markWeight = 100;

// var johnHeight = 2;
// var johnWeight = 80;


// // BMI
// var markBMI = markWeight / (markHeight * markHeight);
// var johnBMI = johnWeight / (johnHeight * johnHeight);

// if(markBMI > johnBMI) {
//     console.log('Mark ate all the pies!');
// } else {
//     console.log('John ate all the pies!');
// }


 /*********************
 * Boolean logic
 */

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.')
// } else if (age >= 13 && age < 20) { 
//     console.log(firstName + ' is a teenager.')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }


 /*********************
 * The Ternary Operator and Switch Statments
 */

// var firstName = 'John';
// var age = 16;

// // Ternary opperator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' drinks ' + drink + '.');


// // Switch statement
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }


// // Converting our if/else statements to a switch statement.
// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.')
// } else if (age >= 13 && age < 20) { 
//     console.log(firstName + ' is a teenager.')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


 /*********************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values.

// var height;

// height = 23;

// if (height || height === 0 || height === '') {
//     console.log('Variable is defined.');
// } else {
//     console.log('Variable has NOT been defined.');
// }

// // == Equality operator. Cnverts the string to a number, becasue it isn't strickt.
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }



/*********************
 * CODING CHALLENGE 2
 */

// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log (scoreJohn, scoreMike, scoreMary);

// // if (scoreJohn > scoreMike) {
// //     console.log('John\'s team wins with ' + scoreJohn + ' points');
// // } else if (scoreMike > scoreJohn) {
// //     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// // } else {
// //     console.log('There is a draw');
// // }

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }


/*********************
 * Functions
 */

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);


// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.')
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');



/*********************
 * Function Statements and Expressions
 */

// Function declaration.
//function whatDoYouDo(job, firstName) {}

// Function Expression. 
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//             // no need to 'break;' when using 'return' inside a function.
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Sarah"));
// console.log(whatDoYouDo("driver", "Cloe"));
// console.log(whatDoYouDo("retired", "Kate"));


/*********************
 * Arrays
 */

//  // INITIALIZE A NEW ARRAY.
// var names = ['John', 'Mark', 'Jane'];
// // another way to write an array.
// var years = new Array(1990, 1969, 1948);

// // log the entire arrray.
// console.log(names);
// // or just one item index.
// console.log(names[0]);
// // or find out how many items are in the array.
// console.log(names.length);


// // MUTATING ARRAY DATA.

// // overwrite an item in an array.
// names[1] = 'Ben';
// console.log(names);

// // add an item to the end of an array.
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types within the same array.
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // .push adds an element to the end of an array.
// john.push('blue');
// // .unshift adds an element to the begining of an array.
// john.unshift('Mr,.');
// console.log(john);

// // .pop removes an item from the end of an array.
// john.pop();
// console.log(john);

// // .shift removes an item from the begining of an array.
// john.shift();
// console.log(john);

// // .indexOf is used to return the position of an item in an array.
// // If the item in not in the array it will return '-1'.
// console.log(john.indexOf(1990));

// // Let's test whether John is a designer, using the ternary oporator.
// var isDesigner = john.indexOf('designer') === -1
// ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);


/*********************
 * CODING CHALLENGE 3 - Tip calculator.
 */

// // Create an empty array for the tip amount and total with tip.
// totalWithTip = [];
// justTheTip = [];

// // Create a variable to contain the current bill being calculated.
// var currentBill;

// // Write a function expression that contains a set of if statements
// // to work out how much to tip.
// var tipCalculator = function(bill) {
//     var total;
//     if (bill < 50) {
//         total = bill * 1.2;
//     } else if (bill > 49 && bill < 200) {
//         total = bill * 1.15;
//     } else {
//         total = bill * 1.1;
//     }
//     // push the total to the 'totalWithTip' array.
//     totalWithTip.push(total);
//     // calculate 'total' - 'bill' and push to 'justTheTip' array.
//     justTheTip.push(total - bill);
// }

// // We feed our data into the currentBill variable and call our function 3x.
// currentBill = 124;
// tipCalculator(currentBill);

// currentBill = 48;
// tipCalculator(currentBill);

// currentBill = 268;
// tipCalculator(currentBill);


// // Console log the arrays containing the output data.
// console.log(totalWithTip);
// console.log(justTheTip);



// // SOLUTION
// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];

// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ];

// var finalValues = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];

// console.log(tips, finalValues);


/*********************
 * Objects & properties.
 */

//  // Object literal.
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// }
// // Indext objects using dot notation
// console.log(john.firstName);
// // or bracket notation.
// console.log(john['lastName']);

// // Little trick - Set a variable to a property within the object but set as a string, then index it in the function call.
// var x = 'birthYear';
// console.log(john[x]);

// // Mutating objects.
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object syntax
// // Creating (initialising) a new object.
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/*********************
 * Objects & methods.
 */
// Methods are functions that are added to an object, in this case 'calcAge()'.


// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);


/*********************
 * CODING CHALLENGE 4. 
 */

// var mark = {
//     name: 'Mark',
//     height: 1.7,
//     weight: 100,
//     calcBmi: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// }

// var john = {
//     name: 'John',
//     height: 2,
//     weight: 80,
//     calcBmi: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// }

// // mark.calcBmi();
// // john.calcBmi();
// // This functions can be called below instead...
// // With no need to call them more than once in the 'if' statement.

// if (john.calcBmi() > mark.calcBmi()) {
//     console.log(john.name + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.name + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They haave the same BMI.')
// }


/*********************
 * Loops and iteration.
 */
