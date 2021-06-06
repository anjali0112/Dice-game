var num1=Math.floor(Math.random()*6) + 1;
var num2=Math.floor(Math.random()*6) + 1;
var diceimage1src = "images/dice"+num1+".png";
var diceimage2src= "images/dice"+num2+".png";
if(num1 === num2)
document.getElementsByTagName('h1')[0].innerHTML="Draw!";
else if(num1 > num2)
document.getElementsByTagName('h1')[0].innerHTML="Player 1 wins!";
else
document.getElementsByTagName('h1')[0].innerHTML="Player 2 wins!";

document.getElementsByClassName('img1')[0].src=diceimage1src;
document.getElementsByClassName('img2')[0].src=diceimage2src;
