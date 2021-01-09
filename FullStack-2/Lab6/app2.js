var numSquares = 6; var colors = []; var pickedColor;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = ["rgb(255, 0, 0)", "rgb(255, 0, 255)", "rgb(255, 225, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];
var squares = document.querySelectorAll(".squares");
for (i = 0; i < squares.length; i++) { squares[i].style.backgroundColor = colors[i] }
for (i = 0; i < squares.length; i++) {
    squares[i].addeventListeners('click', function () {
        alert('option was clicked');
    });
}


for (i = 0; i < squares.length; i++) {
    squares[i].addeventListeners('click', function () {
        //if correct block is clicked do something....    
        //if wrong block is clicked do something....  });
    }
pickedColor = colors[3]; for (i = 0; i <= squares.length; i++) { //apply background colour to all the squares... squares[i].style.backgroundColor = colors[i]  
        //enable click event on each square.....     squares[i].addEventListener('click', function() {
        //if the user selected the right colour....       
        var clickedColor = this.style.backgroundColor;
        //check if the selected colour matches the default colour...
        if (pickedColor === clickedColor) { changeColors(pickedColor); }
        //if the user user selected wrong colour....      
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.text = "Wrong Choice!";
        }
    })
};
function changeColors(color) {
    for (i = 0; i <= squares.length; i++) {
        squares[i].style.backgroundColor = color;
        messageDisplay.text = "You are good at guessing!";
    }
}
      else {
    this.style.backgroundColor = "#232323"; messageDisplay.text = "Wrong Choice!";
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function reset() {  //create a new array of 6 random colors  //pick new random color  //fill the squares with new set of generated colors}