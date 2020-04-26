// create a rondom number to connect to the dices it has to be from 1-6
var randomNumber1= Math.floor(Math.random()* 6) + 1;
// create a dice image  1-6
var randomDiceImage="dice" +randomNumber1+ ".png";
//  create the dice images path images/dice1.png-images/dice6.png
var randomImageSources= "images/" + randomDiceImage;
//practice change the element diffrent from the solution
//document.querySelector("img").getAttribute("src");
//document.querySelector("img").setAttribute("src",randomImageSources);
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSources);
// for the second image of dice to changing it
var randomNumber2= Math.floor(Math.random()* 6) + 1;

var randomImageSources2= "images/dice" + randomNumber2 +".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSources2);

// create an if else statement to dicalare the winner and change the html
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" player 1 wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" player 2 wins!";
}else{
    document.querySelector("h1").innerHTML=" it is a draw!";
}


