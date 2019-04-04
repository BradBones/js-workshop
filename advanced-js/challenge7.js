/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself.
b) the answer from whih the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this.)

2. Create a couple of questions using the constructor.

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible answers ( each question should have a number) (Hint:Write a method for the Question objects for this tast).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is corrent and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: We learned a special technique to do exactly that).

*/

// Global variable to hold the player's score.
var score = 0;

// Question constructor function (used to generate the individual questions.)
var Question = function(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
};

// Questions build using the constructor method.
var q1 = new Question(
    'Which move did Demi Moore shave her head for on screen?',
    ['0. Sausage Party', '1. The Snowman', '2. G.I. Jane'],
    2
    );

var q2 = new Question(
    'In which movie did Johnny Depp play a candy factory owner?',
    ['0. Sausage Party', '1. Willy Wonka & The Chocolate Factory', '2. G.I. Jane'],
    1
    );

var q3 = new Question(
    'What is the best movie franchise ever?',
    ['0. Harry Potter', '1. Starwars', '2. Batman'],
    0
    );

// Array to hold the questions in a list.
var questionList = [q1, q2, q3];

// randomQuestion is our setup function that selects the questions objects with the array and deals with the IU.
var randomQuestion = function(arr) {
    // Creates a variable for the randomly chosen 'selectedQuestion'.
    var selectedQuestion = arr[Math.floor(Math.random() * arr.length)];

    // For loops counts through the possible answers array inside the selectedQuestion object.
    for (i = 0; i < selectedQuestion.answer.length; i++) {
        console.log(selectedQuestion.answer[i]);
    }

    // Calls the prompt which asks the user the selectedquestion and allows them to input their answers.
    var userInput = prompt(selectedQuestion.question);

        // If else statement to test for a corect answer and also to allow the player to exit by typing 'exit' in the input field.
        // Note, if we use the strict operator here '===' it always returns else.    
        if (userInput == selectedQuestion.correctAnswer) {
            console.log('Well done! ' + selectedQuestion.correctAnswer + ' is the right answer!');
            alert('Your answer is correct!');
            score ++;
            console.log('Your score is now: ' + score);
            console.log('---------------------------------------------------');   
            // Calls this function again.
            randomQuestion(questionList);
        } else if (userInput === 'exit') {
            alert('Thank you for playing');
            // Don't call randomQuestion() and allow exit from loop.
        } else {
            console.log('Nope! The correct answer is ' + selectedQuestion.correctAnswer);
            alert('Whoops! That\'s not the answer we\'re looking for');
            score --;
            console.log('Your score is now: ' + score);
            console.log('---------------------------------------------------');
            // Calls this function again.
            randomQuestion(questionList);
        }
}

// Calls the randomQuest function, passing the questionList array as the argument.
randomQuestion(questionList);







/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
*/