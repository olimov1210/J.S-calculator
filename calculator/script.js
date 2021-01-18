//input variable for assigning first and second operands one by one
var input = "";
//first operand flag to check whether the first input entered or not
var firstOperandEntered = false;
//second operand flag to check whether the first input entered or not
var secondOperandEntered = false;
//firstOperand variable to assing the first entered operand
var firstOperand = '';
//SecondOperand variable to assing the first entered operand
var secondOperand = '';
//result variable for assigning the calculated value of first and second operands
var result;
//operator variable for assigning the entered operator (-,+,*,/ or =)
var operator;
//memory result
var memoryResult = null;
//previous result
var previousResult;
//to handling input that the user entered
function handleInput(number) { 
    //check if the input includes dot 
    if(firstOperandEntered == true && result != null && operator == 'equal')
    {
        value = '';
        result = null;
        firstOperand = '';
        firstOperandEntered = false;
    }
    //checking whether the user is entering dot as a first number, if so assign the first number as zero
    if(input == '' && number == '.') {
        input = '0';
    }
    //when the user entering dot inside input check whether there was another dot in input or not
    if(number == '.' &&  input.includes('.')) {
        return;
    }
    //if user enters zero as first number,check whether he enters dot after it if he doesnt delete that zero.
    if(input == '0' && number != '.')
    {
        input = '';
    }
    //after above checkings give an entered number to input
    input += number;
    //display the entered number by a function display() (in 32-row)
    display(input);
}
//end of the handleInput() function
function display(text) {
    //display input to the screen
    document.getElementById('value').innerText = text;
}
//function calculate() for calculating the entered operands
function calculate(value) {
    if(firstOperandEntered == false && result != null)
    {
        firstOperand = result;
        firstOperandEntered = true;
        result = null;
    }
    //checking whether the user entering equal as an operator instead of plus,minus,divide,times
    if(firstOperandEntered == false && value == 'equal') {
        return;
    }
    //checking whether the user isn't entering operators before oerands in the beginning
    if(input == '' && firstOperandEntered == false && (value == 'plus' || value == 'minus' || value == 'times' || value == 'divide')) {
        return;
    }
    //when the user pressed any of operators give the input's value to the firstOperand if firstOperand hasn't been entered yet
    if(firstOperandEntered == false) {
        firstOperand = parseFloat(input);
        input = '';
        firstOperandEntered = true;
        operator = value;
    }
    //if the user enters more operators..take the last entered one
    else if(firstOperandEntered == true && input == '' && secondOperandEntered == false) {
        operator = value;
    }
    //give the entered input to the second operand if the firstOperand entered
    else if(secondOperandEntered == false)  {
        secondOperand = parseFloat(input);
        input = '';
        secondOperandEntered = true;
        if(secondOperand == '0' && operator == 'divide')
        {
            display("Can't divide by zero");
            input = "";
            firstOperand = '';
            firstOperandEntered = false;
            secondOperand = ''
            secondOperandEntered = false;
            return;
        }
        //check the cases and calculate accordingly
         switch(operator) {
            //if the case is plus, add first and second operands and give the result to the result variable and display. Assign the value of the result as a firstOperand for continuation of calculation
            case 'plus':
                result = firstOperand + secondOperand;
                display(result);
                firstOperand = result;
                firstOperandEntered = true;
                secondOperand = '';
                secondOperandEntered = false;
                break;
            //if the case is minus, subtract first and second operands and give the result to the result operator and assign the value of the result as a firstOperand for continuation of calculation
            case 'minus':
                result = firstOperand - secondOperand;
                display(result);
                firstOperand = result;
                firstOperandEntered = true;
                secondOperand = '';
                secondOperandEntered = false;
                break;
            //if the case is divide, divide first and second operands and give the result to the result operator and assign the value of the result as a firstOperand for continuation of calculation
            case 'divide':
                result = firstOperand / secondOperand;
                display(result);
                firstOperand = result;
                firstOperandEntered = true;
                secondOperand = '';
                secondOperandEntered = false;
                break;
            //if the case is times, multiply first and second operands and give the result to the result operator and assign the value of the result as a firstOperand for continuation of calculation    
            case 'times':
                result = firstOperand * secondOperand;
                display(result);
                firstOperand = result;
                firstOperandEntered = true;
                secondOperand = '';
                secondOperandEntered = false;
                break;
        }
    }
    //update operator
    operator = value;
}
//memory calculation plus
function memoryCalulationPlus() {
    if(result == null)
    {
        return;
    }
    else
    {
        memoryResult = memoryResult + result;
    }
}
//memory calculation minus
function memoryCalulationMinus() {
    if(result == null)
    {
        return;
    }
    else
    {
        memoryResult = memoryResult - result;
    }
}
//memory calculation result
function memoryCalulationResult() {
    if(result == null)
    {
        return;
    }
    else
    {
        display(memoryResult);
    }
}
//when the clear button pressed..clear all the things(operators,operands,inputs)
function clearScreen() {
    document.getElementById('value').innerText = '0';
    input = "";
    firstOperand = '';
    firstOperandEntered = false;
    secondOperand = ''
    secondOperandEntered = false;
    result = null;
    memoryResult = null;
}
//getting inputs by keyboard
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if(key.keyCode > 47 && key.keyCode < 58 && key.shiftKey == false)
    {
        handleInput(key.keyCode - 48);
    }
    else if(key.keyCode > 95 && key.keyCode < 106)
    {
        handleInput(key.keyCode - 96);
    }
    else if(key.keyCode == 190 || key.keyCode == 110)
    {
        handleInput('.');
    }
    //operators
    if(key.keyCode == 107 || key.keyCode == 187)
    {
        calculate('plus')
    }
    else if(key.keyCode == 109 || key.keyCode == 189)
    {
        calculate('minus')
    }
    else if(key.shiftKey == true && key.keyCode == 56)
    {
        calculate('times')
    }
    else if(key.keyCode == 106)
    {
        calculate('times')
    }
    else if(key.keyCode == 111 || key.keyCode == 191)
    {
        calculate('divide')
    }
    else if(key.keyCode == 187 && key.shiftKey == false)
    {
        calculate('equal')
    }
    //clear
    if(key.keyCode == 67)
    {
        clearScreen();
    }
}