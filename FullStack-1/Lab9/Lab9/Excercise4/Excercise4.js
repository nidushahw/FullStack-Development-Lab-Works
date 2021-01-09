

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

function userPrompt() {
    var operation = window.prompt("Do you like to add or substract?");
    var num1 = parseInt(window.prompt("please enter first number"));
    var num2 = parseInt(window.prompt("please enter second number"));

    switch (operation) {
        case "add":
            addNumbers(num1, num2);
            break;
        case "substract":
            subtractNumbers(num1, num2);
            break;
        default:
            console.log("Selection is invalid");
    }

}

userPrompt();



