var result_1 = window.prompt("Input the first integer");
var result_2 = window.prompt("Input the second integer");

var a = parseInt(result_1);
var b = parseInt(result_2);

if (a == b) {
    console.log("Both numbers are Equal");
}
else if (a > b) {
    console.log("The larger of   " + a + " and " + b + " is " + a);
}
else {
    console.log("The larger of   " + a + " and " + b + " is " + b);
}


