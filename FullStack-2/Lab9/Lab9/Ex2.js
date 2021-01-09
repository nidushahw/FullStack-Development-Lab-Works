let gretter = (myArray, counter) => {
    let greetText = "Hello ";

    for (let value of myArray) {
        console.log(greetText + value);
    }
}
gretter(["Randy Savage", "Ric Flair", "Hulk Hoga"], 3);