function startClock() {
    let shouldRun = false;
    do {
        let date = new Date();
        for (i = 0; i < 10; i++) {
            console.log("Current time is :" + date);
        }
        shouldRun =confirm("Do you want to stop the clock?"); 
    }
    while (shouldRun);
}
startClock();