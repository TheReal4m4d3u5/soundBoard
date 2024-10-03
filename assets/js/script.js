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
// created all the needed HTML Element objects for event listners and display zones

let time = 0;
let audioTrack = new Audio() //created a new audio object
let currentCard = button1;
let previousCard = button1;
if(localStorage.getItem("audio") == null) { //if no audio is in local storage load default: softPiano


    localStorage.setItem("image", "./assets/images/softPiano.jpg"); //sets to local storage
    localStorage.setItem("audio", "./assets/audio/softPiano.mp3");
    localStorage.setItem("altText", "Person playing a piano");
    localStorage.setItem("currentCard", "button1");
    localStorage.setItem("previousCard", "button1");
    localStorage.setItem("currentDescription", "Piano");
    audioTrack.setAttribute("src", localStorage.getItem("audio")); //sets the audio in audio track to the default that was just set to local storage
    changeImage(); //sets the main image to softPiano and sets the border in the lower image to softPiano
    changeText();
    //console.log("audioTrack:" + audioTrack.getAttribute("src"));  old debug test

} else { //runs if there was audio in local storage

    audioTrack.setAttribute("src", localStorage.getItem("audio")); //sets the audio in audio track to the audio in local storage
    currentCard = document.getElementById(localStorage.getItem("currentCard")); // tells us what card in the lower section correlates to the audio in local storage
    //console.log(document.getElementById(localStorage.getItem("currentCard")));
    changeImage();
    changeText();
}
const timer = setInterval(setTime, 500); // runs setTime every half second

function setTime(){
    timeDisplay.textContent = `Time: ${Math.floor(audioTrack.currentTime)} seconds`; //updates the time display to the current track time
}

function reasign(newImage, newAudio, newAltText, newCurrentCard, currentDescription){ //reasigns all variables in local storage then updates previous/current card. then sets the audio
    localStorage.setItem("image", newImage); 
    localStorage.setItem("audio", newAudio);
    localStorage.setItem("altText", newAltText);
    //localStorage.setItem("previousCard", currentCard);
    localStorage.setItem("currentCard", newCurrentCard)
    localStorage.setItem("currentDescription", currentDescription);
    previousCard = currentCard;
    currentCard = document.getElementById(newCurrentCard);
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
}


button1.addEventListener("click", function() {
    reasign("./assets/images/softPiano.jpg","./assets/audio/softPiano.mp3", "Person playing a piano", "button1", "Piano");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button2.addEventListener("click", function() {
    reasign("./assets/images/typing.png","./assets/audio/typing.mp3", "Typing on a laptop", "button2", "Typing");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button3.addEventListener("click", function() {
    reasign("./assets/images/applause.png","./assets/audio/applause.mp3", "Hands clapping", "button3", "Clapping");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button4.addEventListener("click", function() {
    reasign("./assets/images/heart.jpg","./assets/audio/heart.mp3", "Human heart", "button4", "Heart Beating");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button5.addEventListener("click", function() {
    reasign("./assets/images/sunrise.jpg","./assets/audio/sunrise.mp3", "Sun setting on a lake", "button5", "Sun Setting");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button6.addEventListener("click", function() {
    reasign("./assets/images/police.jpg","./assets/audio/police.mp3", "Police car", "button6", "Police Siren");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button7.addEventListener("click", function() {
    reasign("./assets/images/crystal.jpg","./assets/audio/crystal.mp3", "Blue crystal", "button7", "Futuristic Crystal");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button8.addEventListener("click", function() {
    reasign("./assets/images/thunder.jpg","./assets/audio/thunder.mp3", "Lightning in a storm", "button8", "Lightning");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button9.addEventListener("click", function() {
    reasign("./assets/images/techPiano.jpg","./assets/audio/techPiano.mp3", "Clear piano", "button9", "Dramatic Music");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button10.addEventListener("click", function() {
    reasign("./assets/images/helicopter.jpg","./assets/audio/helicopter.mp3", "Helicopter flying", "button10", "Helicopter");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button11.addEventListener("click", function() {
    reasign("./assets/images/deepOcean.jpg","./assets/audio/deepOcean.mp3", "Jellyfish", "button11", "Jellyfish Swimming");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button12.addEventListener("click", function() {
    reasign("./assets/images/explosion.jpg","./assets/audio/explosion.mp3", "Nuclear bomb mushroom cloud", "button12", "Explosion");
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
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
