var calculator = function (x, operator, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (isNaN(x) || isNaN(y)) {
        console.log("Enter numbers only");
    } else {
        switch (operator) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "/":
                if (y === 0) {
                    console.log("Can't devided by 0");
                    break;
                } else{
                    return x / y;
                }
            case "*":
                return x * y;
        }
    }
}

calculator(2, "+", 2);
calculator(2, "*", 2);
calculator(4, "/", 2);
calculator(4, "/", 0);
calculator(10, "-", 5);
calculator(true, "+", 5);
calculator(10, "+", "asdf");