//Implement a set of functions that will add, subtract, multiply, and divide 2 numbers and return the result.
function addNumbers(num1, num2) {
    addToHistory(num1, num2, "+", num1+num2);
    return num1+num2;
}

function subtractNumbers(num1, num2) {
    addToHistory(num1, num2, "-", num1-num2);
    return num1-num2;
}

function multiplyNumbers(num1, num2) {
    addToHistory(num1, num2, "*", num1*num2);
    return num1*num2;
}

function divideNumbers(num1, num2) {
    addToHistory(num1, num2, "/", num1/num2);
    return num1/num2;
}

//Implement an empty array to store the history of calculations
const calculationHistory = [];

/* Each calculation object should contain:
Operands (2 numbers)
Operator (+,-,*,/)
Result of the calculation */

/* Implement the following:
A function to add to the history and be used in all of the simple operation functions
A function to display the history or inform the user that they have no stored calculations */

function addToHistory(operand1, operand2, operator, result) {
    let calcObject = {};
    calcObject.operand1 = operand1;
    calcObject.operand2 = operand2;
    calcObject.operator = operator;
    calcObject.result = result;
    calculationHistory.push(calcObject);
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("There are no stored calculations.")
    } else {
        for (let i = 0; i < calculationHistory.length; i++) {
            const currentCalcObject = calculationHistory[i];
            console.log(currentCalcObject.operand1.toString() + currentCalcObject.operator + currentCalcObject.operand2.toString() + "=" + currentCalcObject.result.toString());
        }
    }
}