let difference = (num) => {
    let diff = 13 - num;

    if (num > 13) {
        return Math.abs(13 - num * 2);
    } else {
        return diff;
    }
}

console.log(difference(32));
console.log(difference(11));