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
 * CODING CHALLENGE 1
 */

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log (scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


