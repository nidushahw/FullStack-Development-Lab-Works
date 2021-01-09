let findingNemo = function (words) {
    const searchTerm = 'Nemo';
    if (words.indexOf(searchTerm) === -1) {
        return ("I can’t find Nemo");
    } else {
        let splits = words.split(' ');
        let position = splits.indexOf(searchTerm) + 1;
        return "I found " + searchTerm + " at " + position;
    }
}
console.log(findingNemo('I am finding Nemo'));
console.log(findingNemo('Nemo is me'));
console.log(findingNemo('Finding Dory'));

