let tryCatchFinally = () => {
    try {
        throw new Error("Throwing an error");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Runs Finally");
    }
}
tryCatchFinally();