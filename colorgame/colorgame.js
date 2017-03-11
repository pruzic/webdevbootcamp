var numSquars = 6;
var colors = generateRandomColors(numSquars);
var colorSq = document.querySelectorAll("div.square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#resetColors");
var messageDisplay = document.querySelector("#messageDisplay");
var pickColor = pickedColor();
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

init();

function init() {
    colorDisplay.textContent = pickColor;
    for (var c = 0; c < colorSq.length; c++) {
        colorSq[c].style.background = colors[c];
        colorSq[c].addEventListener("click", function() {
            var styleColor = this.style.background;
            if (styleColor === pickColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(pickColor);
                h1.style.background = pickColor;
                btnReset.textContent = "Play Again?";

            } else {
                this.style.background = "none";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

easyBtn.addEventListener("click", function() {
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquars = 3;
    colors = generateRandomColors(numSquars);
    pickColor = pickedColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickColor;
    h1.style.background = "steelblue";
    for (var i = 0; i < colorSq.length; i++) {
        if (i < colors.length) {
            colorSq[i].style.background = colors[i];
        } else {
            colorSq[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquars = 6;
    generateColors();
});

btnReset.addEventListener("click", function() {
    generateColors();
});

function generateColors() {
    colors = generateRandomColors(numSquars);
    pickColor = pickedColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickColor;
    h1.style.background = "steelblue";
    btnReset.textContent = "New Color";
    for (var i = 0; i < colors.length; i++) {
        colorSq[i].style.background = colors[i];
        colorSq[i].style.display = "block";
    }
}

function changeColors(color) {
    for (var i = 0; i < colorSq.length; i++) {
        colorSq[i].style.background = color;
    }
}

function pickedColor() {
    var colorIndx = Math.floor((Math.random() * colors.length));
    return colors[colorIndx];
}

function generateRandomColors(num) {
    var randomColor = [];
    for (var i = 0; i < num; i++) {
        var red = randomNum();
        var green = randomNum();
        var blue = randomNum();
        randomColor[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
    return randomColor;
}

function randomNum() {
    return Math.floor(Math.random() * 256).toString();
}