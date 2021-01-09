function speakHacker(str) {
    str = replaceAll(str, 'a', '4');
    str = replaceAll(str, 'e', '3');
    str = replaceAll(str, 'o', '0');
    str = replaceAll(str, 's', '5');
    return str;
}


function replaceAll(str, chr, newChr) {
    while (str.indexOf(chr) > 0) {
        str = str.replace(chr, newChr);
    }
    return str;
}

console.log(speakHacker("Long Weekend"));
console.log(speakHacker("Matrix 4 is coming out"));
console.log(speakHacker("Marvel movies are delayed"));