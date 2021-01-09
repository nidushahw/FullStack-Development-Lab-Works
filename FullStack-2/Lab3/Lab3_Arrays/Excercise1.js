function buildArray(num) {
    var myArray = [];
    for (var counter = 0; counter < num; counter++) {
        myArray.push(counter);
    }

    return myArray;
}
console.log(buildArray(5));
console.log(buildArray(25));
