function findArrIndex(myArr, str) {
    return myArr.indexOf(str);
}
console.log(findArrIndex(["abc", "edabit", "yyy", "xxx"], "yyy"));
console.log(findArrIndex(["a", "g", "y", "z"], "z"));
console.log(findArrIndex(["egg", "bacon", "toast", "coffee", "random", "juice"], "coffee"));
console.log(findArrIndex(["egg", "bacon", "toast", "coffee", "random", "juice"], "mcmuffin"));