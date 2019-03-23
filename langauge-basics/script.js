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
 * Challenge 1
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

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}


 /*********************
 * Boolean logic
 */