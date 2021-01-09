function displayAlert() {
    window.alert("Hi this is an alert box");
}

function displayPrompt() {
    window.prompt("Hi, This is a prompt box");
}

function displayConfirm() {
    let close = window.confirm("Do you really want to close the browser?");
    if (close === true) {
        window.close();
    }

}