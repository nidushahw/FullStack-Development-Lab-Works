let findCase = function (str){
    if (str === str.toUpperCase()) {
        return "UPPER";
    } else if (str === str.toLowerCase()) {
        return "lower";
    } else {
        return "mixed";
    }
};

console.log(findCase("MANGO"));
console.log(findCase("whisper"));
console.log(findCase("Quiet Voice"));
