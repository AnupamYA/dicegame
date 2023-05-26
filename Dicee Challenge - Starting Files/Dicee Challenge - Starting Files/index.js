var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber + ".png";

var randomimage = "images/" + randomDice;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomimage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber2 + ".png";

var randomimage2 = "images/" + randomDice;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimage2);
