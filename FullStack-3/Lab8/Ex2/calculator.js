let divideTwoNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        console.log("One or more parameter is not a number");
    } else if (y === 0) {
        console.log("Cannot devided by zero");
    } else {
        let result = x / y;
        console.log(`Divide two numbers ${x}/ ${y} = ${result}`);
        return result;

    }
}


let oddDoubler = (x) => {
    if (isNaN(x)) {
        console.log("X is not a number!!");
    } else if (x % 2 != 0) {
        let result = x * x;
        console.log(`odd doubler ${x} = ${result}`);
        return result;
    } else {
        return 0;
    }
}

exports.divideTwoNumbers = divideTwoNumbers;
exports.oddDoubler = oddDoubler;