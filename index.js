//DOM
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}//var random1=Math.floor(Math.random()*6)+1;
var rand1=getRandomNumber(1,6);
var randdice="dice"+rand1+".png";//select image
var randimg="images/"+randdice;//select image from folder

var image1=document.querySelectorAll("img")[0];//select first query
image1.setAttribute("src",randimg);

var randdice2="dice"+rand2+".png";//select image
var randimg2="images/"+randdice2;//select image from folder

var image2=document.querySelectorAll("img")[1];//select first query
image2.setAttribute("src",randimg2);



if(rand1>rand2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
if(rand1<rand2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
if(rand1==rand2){
    document.querySelector("h1").innerHTML="Match drawn";
}