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
const buttonPause = document.getElementById("buttonPause");
const buttonStop = document.getElementById("buttonStop");
const mainImage = document.getElementById("mainImage");
const timeDisplay = document.getElementById("displayTime");
const currentDescription = document.getElementById("currentSong");

let time = 0;
let audioTrack = new Audio()
let currentCard = button1;
let previousCard = button1;
if(localStorage.getItem("audio") == null) {


    localStorage.setItem("image", "./assets/images/softPiano.jpg");
    localStorage.setItem("audio", "./assets/audio/softPiano.mp3");
    localStorage.setItem("altText", "Person playing a piano");
    localStorage.setItem("currentCard", "button1");
    localStorage.setItem("previousCard", "button1");
    localStorage.setItem("currentDescription", "Piano");
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
    changeImage();
    changeText();
    //console.log("audioTrack:" + audioTrack.getAttribute("src"));

} else {

    audioTrack.setAttribute("src", localStorage.getItem("audio"));
    currentCard = document.getElementById(localStorage.getItem("currentCard"));
    //console.log(document.getElementById(localStorage.getItem("currentCard")));
    changeImage();
    changeText();
}
const timer = setInterval(setTime, 500);

function setTime(){
    timeDisplay.textContent = `Time: ${Math.floor(audioTrack.currentTime)} seconds`;
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
    reasign("./assets/images/softPiano.jpg","./assets/audio/softPiano.mp3", "Person playing a piano", "button1");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button2.addEventListener("click", function() {
    reasign("./assets/images/typing.png","./assets/audio/typing.mp3", "Typing on a laptop", "button2");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button3.addEventListener("click", function() {
    reasign("./assets/images/applause.png","./assets/audio/applause.mp3", "Hands clapping", "button3");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button4.addEventListener("click", function() {
    reasign("./assets/images/heart.jpg","./assets/audio/heart.mp3", "Human heart", "button4");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button5.addEventListener("click", function() {
    reasign("./assets/images/sunrise.jpg","./assets/audio/sunrise.mp3", "Sun setting on a lake", "button5");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button6.addEventListener("click", function() {
    reasign("./assets/images/police.jpg","./assets/audio/police.mp3", "Police car", "button6");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button7.addEventListener("click", function() {
    reasign("./assets/images/crystal.jpg","./assets/audio/crystal.mp3", "Blue crystal", "button7");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button8.addEventListener("click", function() {
    reasign("./assets/images/thunder.jpg","./assets/audio/thunder.mp3", "Lightning in a storm", "button8");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button9.addEventListener("click", function() {
    reasign("./assets/images/techPiano.jpg","./assets/audio/techPiano.mp3", "Clear piano", "button9");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button10.addEventListener("click", function() {
    reasign("./assets/images/helicopter.jpg","./assets/audio/helicopter.mp3", "Helicopter flying", "button10");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button11.addEventListener("click", function() {
    reasign("./assets/images/deepOcean.jpg","./assets/audio/deepOcean.mp3", "Jellyfish", "button11");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

button12.addEventListener("click", function() {
    reasign("./assets/images/explosion.jpg","./assets/audio/explosion.mp3", "Nuclear bomb mushroom cloud", "button12");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
});

buttonPlay.addEventListener("click", function() {
    audioTrack.pause();
    audioTrack.play();
});

buttonPause.addEventListener("click", function(){
    audioTrack.pause();
});

buttonStop.addEventListener("click", function (){
    audioTrack.pause();
    audioTrack.currentTime = 0;
});

function changeImage (){
    
    //console.log(currentCard.getAttribute("border-color"));

    let currentImage = document.querySelector(`.cardImage[src='${localStorage.getItem("image")}']`);
    let images = document.querySelectorAll('img')
    
    images.forEach(img => img.style.backgroundColor = "#092b46")
    mainImage.setAttribute("src", localStorage.getItem("image"));
    currentImage.style.backgroundColor = "red";
    mainImage.setAttribute("alt", localStorage.getItem("altText"));
}

function changeText(){
    let text = localStorage.getItem("currentDescription");
    currentDescription.innerHTML = text;  
}
