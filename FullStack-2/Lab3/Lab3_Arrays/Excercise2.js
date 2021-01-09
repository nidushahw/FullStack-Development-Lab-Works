function emptyArray(myArray) {
    for (var counter = myArray.length; counter > 0; counter--) {
        myArray.pop(counter);
    }
    return myArray;
}
console.log(emptyArray([1, 2, 3]));
console.log(emptyArray(["egg", "Bacon", "coffee", "toast", "juice", "random"]));