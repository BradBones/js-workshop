// JavaScript Module Pattern.
// Start by writting an IFEE function to allow for a closed scope
// ...that cannot be accesed from the outside for privacy and to prevent bugs (API).
// We then output all of the functions that we want to be public in an object.



/////////////////////////////////
// BUDGET CONTROLLER
/////////////////////////////////

var BudgetController = (function() {

    // Constructor functions to generate items based on the user's inputs.
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Using the type key word to auto choose either income or expense.
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(currentIndex) {
            sum += currentIndex.value;
        });
        data.totals[type] = sum;
    };

    // Data struture to store the input items.
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 // Set to -1 to show as noexistant.
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);
            return newItem;

        },

        calculateBudget: function() {

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expenses and store in the 'budget' property of the dat object.
            data.budget = data.totals.inc - data.totals.exp;

            // We need this if statement because we can't divide something by 0 (result = infinity).
            // Bug case - only expenses are filled and income is 0.
            if (data.totals.inc > 0) {
                // Calculate the percentage of the income that we spent: "a / b * 100" and round to nearest whole number.
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
            
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        // Displays private data in the console for testing purposes.
        // DELETE BEFORE DEPLOYMENT.
        testing: function() {
            console.log(data);
        }
    };

})();



/////////////////////////////////
// UI CONTROLLER
/////////////////////////////////

var UIController = (function() {

    // This object stores all of the HTML class strings in case they are changed in the HTML doc, this will save us from chasing bugs. all we have to do is change them here.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    };

    // Return an object.
    return {
        // getinput function recieves all of the values from the UI.
        getInput: function() {
            // Return a 2nd object.
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value) // parseFloat() changes the input to a decimal number.
            };
            
        },

        addListItem: function(obj, type) {

            var html, newHtml; 
            // Create HTML string with placeholder text

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        // Clears the user input fields after information has been submitted.
        clearFields: function() {
            var fields, feildsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            // 'Tricking' the slice method into thinking that feilds is an array
            // ...by calling it on the generic array object prototype.
            // As slice creates a new array, we have tricked it into generating an array for us.
            feildsArr = Array.prototype.slice.call(fields);
            // Using forEach() instead of a for loop.
             feildsArr.forEach(function(currentElement, indexItem, array) {
                // So for each querySelected element above in the feildArr array, set value to an empty string.
                currentElement.value = '';
             });

            // This line switches the focus back to the 'add description' feild after an input has been submitted.
            // ...because Domstrings.inputDescription is at the 0 index of the array we created with the slice method above.
            feildsArr[0].focus(); 
        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            
            // If statement to make sure that the % symbol shows if the percentage is greater than zero
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else { // And that a blank space displays when < 0 (hides our -1 trick)
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }

        },

        // Shares (exports) the DOMstrings object outside of this IFEE.
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();



/////////////////////////////////
// GLOBAL APP CONTROLLER
/////////////////////////////////

var AppController = (function(budgetCtrl, UICtl) {

    var setupEventListeners = function() {

         // Pulls in (imports) the DOMstrings object from the UI Controller module.
        var DOM = UICtl.getDOMstrings();

         // Button click event handler. (If clicked, run the ctrlAddItem function.)
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Return-key-press event listener. (event.which is for older browsers.)
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                // console.log('Enter was pressed.');
                ctrlAddItem();
            }
        });
    }; 
    
    var updateBudget = function() {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget
        UICtl.displayBudget(budget);
    };

    var ctrlAddItem = function() {
        console.log('it works!');

        var input, newItem;

        // 1. Get the field input data
        input = UICtl.getInput();
        console.log(input);

        // If statement tests for any input and prevents the user from submiting a blank feild.
        // We also test to make sure the input is a number and is greater than 0.
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtl.clearFields();

            // 5. Calculate and update budget
            updateBudget();

        }; // Here we can place an else and prompt the user to enter a number greater than 0.

    };

    // Creates an object that allows this IFEE to export data to the (global) public scope.
    return {
        init: function() {
            console.log('Application has started.');
            UICtl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
    
})(BudgetController, UIController);


// Only line of code placed on the outside of the modules.
// It runs the init function that allows selected data to flow between modules in the wider scope.
AppController.init();