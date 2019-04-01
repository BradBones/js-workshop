// Function constructor.

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Note, Person is captalised becasue this is standard for constructors.
// this.item - refers to the name of the property that will be created. Therefore 'this' referes to the new instance object.
// = item - refers to the argument being passed into the function.
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

// We can add a function (method) to the Person object's prototype object - 
// This data can now be passed down to new instances of the Person object via inheritance.
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

// This can also be done with properties as well as methods (less common technique).
Person.prototype.lastName = 'Smith';
// Now all instances of the constructor object Person will inherit the last name of Smith.

// 'new' generates an empty object, where we use 'Person' as the constructor and pass in new parameters.
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// Here we can call calculateAge from the Person constructor's prototype object
// ...on any constructed instance of Person
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// PRACTICE.
// Create a client object for a hair salon business.

var Client = function(firstName, lastName, phone, email, hairLength, hairType, lastVisit) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.hairLength = hairLength;
    this.hairType = hairType;
    this.lastVisit = lastVisit;
};

Client.prototype.freeStuff = '3 free samples on next visit';

var kerry = new Client('Kelly', 'Jones', 4150000000, 'kelly.jones@gmail.com', 'jaw length', 'curly', 'June 2018');

console.log(kerry.hairType);
console.log(kerry.freeStuff);
// Note that the line below does not work as Client.prototype.freeStuff adds the property freeStuff
// ...to all instances (chlidren) of the Client constructor and not the Client constructor object itself. 
console.log(Client.freeStuff);


// Looking inside of objects and exploring prototypes.
var x = [1,2,3];
console.info(x);
// Now open up the dropdown arrow tabs and see all of the methods inherited from JS by the array object.


