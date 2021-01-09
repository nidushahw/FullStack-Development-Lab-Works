function helloWorlds(number) {
    let a = parseInt(number);
    if (isNaN(a)) {
        console.log("Goodbye World");
    } else {
        for (i = 0; i < a; i++)
            console.log("Hello World");
    }
}
helloWorlds(5);
helloWorlds(true);
helloWorlds("Hello");
helloWorlds(null);
helloWorlds(undefined);