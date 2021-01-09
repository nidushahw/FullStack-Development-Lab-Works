let compareNumToTen = (number) =>
    new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(`${number} is greater than 10, Success!`);
        } else {
            reject(`${number} is less than 10, Error!`);
        }
    });

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareNumToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

