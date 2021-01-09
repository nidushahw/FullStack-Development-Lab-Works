window.onload = (event) => {
    console.log("window loaded..");
    clearInputs();
};

let startTime, endTime;

function strartClock() {
    startTime = new Date();
    console.log("Start timer :" + startTime.toLocaleTimeString());
    document.getElementById("txtEndTime").value = "";
    document.getElementById("txtStartTime").value = startTime.toLocaleTimeString();
}

function stopClock() {
    if (startTime) {
        endTime = new Date();
        console.log("end timer : " + endTime.toLocaleTimeString());
        document.getElementById("txtEndTime").value = endTime.toLocaleTimeString();
        calculateDuration();
    }
}

function reset() {
    console.log("Reset button clicked ");
    clearInputs();
    clearDurationLabels();
}

function clearInputs() {
    document.getElementById("txtStartTime").value = "";
    document.getElementById("txtEndTime").value = "";
}

function clearDurationLabels() {
    let timerElement = document.getElementById("timer");
    while (timerElement.firstChild) {
        timerElement.removeChild(timerElement.firstChild);
    }
}

function calculateDuration() {
    let duration = (endTime - startTime) / 1000;
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    let formattedDuration = "Duration => " + " minutes " + min + " seconds " + sec;
    console.log(formattedDuration);
    let p = document.createElement("p");
    p.classList.add("container-item");
    p.innerText = formattedDuration;
    document.getElementById("timer").appendChild(p);
}


document.getElementById("btnStart").addEventListener("click", strartClock);
document.getElementById("btnStop").addEventListener("click", stopClock);
document.getElementById("btnReset").addEventListener("click", reset);
