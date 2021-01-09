
function displayMessage(message) {
    if (message === null) {
        console.log("message is null");
    } else if (message === "") {
        console.log("message is empty");
    } else {
        console.log(message);
    }
}
function promptUser() {
    var result = window.prompt("Enter a message to display");
    displayMessage(result);
}

promptUser();

