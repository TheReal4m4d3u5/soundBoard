const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const buttonPlay = document.getElementById("buttonPlay");
const buttonStop = document.getElementById("buttonStop");
const mainImage = document.getElementById("mainImage");

let time = 0;
let audioTrack = new Audio()
let currentCard = button1;
let previousCard = button1;
if(localStorage.getItem("audio") == null) {


    localStorage.setItem("image", "./images/softPiano.jpg");
    localStorage.setItem("audio", "./audio/softPiano.mp3");
    localStorage.setItem("altText", "Person playing a piano");
    localStorage.setItem("currentCard", "button1");
    localStorage.setItem("previousCard", "button1");
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
    
    //console.log("audioTrack:" + audioTrack.getAttribute("src"));

} else {

    audioTrack.setAttribute("src", localStorage.getItem("audio"));
    currentCard = document.getElementById(localStorage.getItem("currentCard"));
    //console.log(document.getElementById(localStorage.getItem("currentCard")));
    changeImage();
}

function reasign(newImage, newAudio, newAltText, newCurrentCard){
    localStorage.setItem("image", newImage);
    localStorage.setItem("audio", newAudio);
    localStorage.setItem("altText", newAltText);
    //localStorage.setItem("previousCard", currentCard);
    localStorage.setItem("currentCard", newCurrentCard)
    previousCard = currentCard;
    currentCard = document.getElementById(newCurrentCard);
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
}


button1.addEventListener("click", function() {
    reasign("./images/softPiano.jpg","./audio/softPiano.mp3", "Person playing a piano", "button1");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button2.addEventListener("click", function() {
    reasign("./images/typing.png","./audio/typing.mp3", "Typing on a laptop", "button2");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button3.addEventListener("click", function() {
    reasign("./images/applause.png","./audio/applause.mp3", "Hands clapping", "button3");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button4.addEventListener("click", function() {
    reasign("./images/heart.jpg","./audio/heart.mp3", "Human heart", "button4");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button5.addEventListener("click", function() {
    reasign("./images/sunrise.jpg","./audio/sunrise.mp3", "Sun setting on a lake", "button5");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button6.addEventListener("click", function() {
    reasign("./images/police.jpg","./audio/police.mp3", "Police car", "button6");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button7.addEventListener("click", function() {
    reasign("./images/crystal.jpg","./audio/crystal.mp3", "Blue crystal", "button7");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button8.addEventListener("click", function() {
    reasign("./images/thunder.jpg","./audio/thunder.mp3", "Lightning in a storm", "button8");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button9.addEventListener("click", function() {
    reasign("./images/techPiano.jpg","./audio/techPiano.mp3", "Clear piano", "button9");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button10.addEventListener("click", function() {
    reasign("./images/helicopter.jpg","./audio/helicopter.mp3", "Helicopter flying", "button10");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button11.addEventListener("click", function() {
    reasign("./images/deepOcean.jpg","./audio/deepOcean.mp3", "Jellyfish", "button11");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button12.addEventListener("click", function() {
    reasign("./images/explosion.jpg","./audio/explosion.mp3", "Nuclear bomb mushroom cloud", "button12");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

buttonPlay.addEventListener("click", function() {
    audioTrack.pause();
    audioTrack.play();
});
buttonStop.addEventListener("click", function (){
    audioTrack.pause();
    audioTrack.currentTime = 0;
});

function changeImage (){
    
    //console.log(currentCard.getAttribute("border-color"));
    let currentImage = document.querySelector(`img[src='${localStorage.getItem("image")}']`);
    let images = document.querySelectorAll('img')
    images.forEach(img => img.style.backgroundColor = "black")
    mainImage.setAttribute("src", localStorage.getItem("image"));
    currentImage.style.backgroundColor = "red";
    mainImage.setAttribute("alt", localStorage.getItem("altText"));
}