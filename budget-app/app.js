// JavaScript Module Pattern.
// Start by writting an IFEE function to allow for a closed scope
// ...that cannot be accesed from the outside for privacy and to prevent bugs (API).
// We then output all of the functions that we want to be public in an object.



/////////////////////////////////
// BUDGET CONTROLLER
/////////////////////////////////

var BudgetController = (function() {



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
        inputBtn: '.add__btn'
    };

    // Return an object.
    return {
        // getinput function recieves all of the values from the UI.
        getInput: function() {
            // Return a 2nd object.
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
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
    
    var ctrlAddItem = function() {
        console.log('it works!');

        // 1. Get the field input data
        var input = UICtl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget

    };

    // Creates an object that allows this IFEE to export data to the (global) public scope.
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
})(BudgetController, UIController);


// Only line of code placed on the outside of the modules.
// It runs the init function that allows selected data to flow between modules in the wider scope.
AppController.init();


