
var myModule1 = require("./calculator");
var myModule2 = require("./comparer");

function addOrSubstract(a, b) {
    if (myModule2.AreNumberEqual(a, b)) {
        return myModule1.calculator.Add(a, b);

        console.log("Numbers are equal");
        console.log("adding two numbers");
    } else {
        return myModule1.calculator.Substract(a, b);
    }
}

console.log(addOrSubstract(5, 5));
console.log(addOrSubstract(20, 5));