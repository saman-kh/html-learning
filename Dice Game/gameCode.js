// window.onload = randDice;

function randDice(){
var randNum1 = Math.floor(Math.random()*6) + 1;
var randDiceImg = "dice"+randNum1+".png";
var randImgSrc1 = "http://jirinco.ir/project-image/"+randDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randImgSrc1);

var randNum2 = Math.floor(Math.random()*6 )+1;
var randDiceImg2 = "dice"+randNum2+".png";
var randImgSrc2 = "http://jirinco.ir/project-image/"+randDiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randImgSrc2);

var result = document.getElementsByTagName("p")[1];
result.style.paddingTop = "1rem";
result.style.fontSize = "2rem";

if(randNum1 > randNum2){
    result.innerHTML = "نفر اول برندس";
}
else if(randNum1 < randNum2){
    result.innerHTML = "نفر دوم برندس";
}
else{
    result.innerHTML = " جفتتون مساوی شدین!";
}


}
