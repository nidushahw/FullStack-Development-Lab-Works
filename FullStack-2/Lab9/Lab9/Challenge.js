
let array = [1, 2, 3, 4]

let calculateSum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

let calculateProduct = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue);
}
console.log(calculateSum(array));
console.log(calculateProduct(array));