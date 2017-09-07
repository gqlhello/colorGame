//var game = {};
//game.init = function(){
//    setupModeButtons();
//    setupSquares();
//    reset();
//}
//
//game.init();

var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i =0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //        if(this.textContent === "Easy"){
            //            numberSquares = 3;
            //        }else{
            //            numberSquares = 6;
            //        }

            this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;

            reset();
            //figure out how many squares to show
            //pick new color
            //pick a new pickedColor
            //updates page to reflect changes
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                //alert("correct");
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else{
                //alert("wrong");
                //same as body backgraound color
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}



function reset(){
    //generate new colors
    colors = generateRandomColors(numberSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color;
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});


//easyBtn.addEventListener("click", function(){
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numberSquares = 3;
//    colors = generateRandomColors(numberSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.backgroundColor = colors[i];
//        }else{
//            squares[i].style.display = "none";
//        }
//    }
//
//});
//

//hardBtn.addEventListener("click", function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numberSquares = 6;
//    colors = generateRandomColors(numberSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//    }
//});




function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var array = [];
    //add num random colors to array
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        array.push(randomColor());
    }
    //return that array
    return array;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    // pay atterntion to the space!!!!
    return "rgb(" + r + ", " + g + ", " + b +")";
}
