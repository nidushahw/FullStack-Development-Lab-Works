var numSquares = 6;
var colors = ["rgb(255, 0, 0)", "rgb(100, 0, 170)", "rgb(255, 225, 0)", "rgb(255, 0, 255)", "rgb(0, 230, 200)", "rgb(0, 255, 0)"];
var pickedColor;
var squares = document.querySelectorAll(".square");
for (i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
}
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelectorAll("#message");
var h1 = document.querySelector("h1");

/* init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
 */
pickedColor = pickColor();
for (i = 0; i < squares.length; i++) {
	//apply background colour to all the squares... 
	squares[i].style.backgroundColor = colors[i];
	//enable click event on each square.....     
	squares[i].addEventListener('click', function () {
		//if the user selected the right colour....   
		var clickedColor = this.style.backgroundColor;
		//check if the selected colour matches the default colour...
		if (pickedColor === clickedColor) {
			changeColors(pickedColor);
		}
		//if the user user selected wrong colour....         
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.text = "Wrong Choice!";
		}
	});
}

function changeColors(color) {
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		messageDisplay.text = "You are good at guessing!";
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function reset() {
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}

resetButton.addEventListener("click", function () {
	reset();
})

function generateRandomColor(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}
function randomColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

var easy = document.getElementsByName("easy")[0];
var hard = document.getElementsByName("hard")[0];
easy.addEventListener("click", function () {
	numSquares = 3;
	this.classList.add("selected");
	hard.classList.remove("selected");
	reset();
});

hard.addEventListener("click", function () {
	numSquares = 6;
	this.classList.add("selected");
	easy.classList.remove("selected");
	reset();
});

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}


function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}
