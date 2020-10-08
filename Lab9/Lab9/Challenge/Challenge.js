

function addNumbers(num1, num2) {
    console.log("adding two numbers", num1, " and ", num2)
    let sum = num1 + num2;
    console.log("The sum is", sum);
}

function subtractNumbers(num1, num2) {
    console.log("Substracting two numbers", num1, " and ", num2)
    let diff = num1 - num2;
    console.log("The difference is", diff);
}

function multiplication(num1, num2) {
    console.log("Multiplying two numbers", num1, " and ", num2)
    let multi = num1 * num2;
    console.log("The multiplication is", multi);
}

function division(num1, num2) {
    console.log("Dividing two numbers", num1, " and ", num2)
    let divi = num1 / num2;
    console.log("The division is ", divi);

}

function userPrompt() {
    var operation = window.prompt("Do you like to add , substract , multiply or divide?");
    var num1 = parseInt(window.prompt("please enter first number"));
    var num2 = parseInt(window.prompt("please enter second number"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Entered values are not numbers. Please try again");
    } else {
        switch (operation) {
            case "+":
                addNumbers(num1, num2);
                break;
            case "-":
                subtractNumbers(num1, num2);
                break;
            case "*":
                multiplication(num1, num2);
            case "/":
                division(num1, num2);
            default:
                console.log("Selection is invalid");
        }
    }
}

userPrompt();
