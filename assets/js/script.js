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

let time = 0; // does nothing just a relic of devlopment
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
    reasign("./assets/images/softPiano.jpg","./assets/audio/softPiano.mp3", "Person playing a piano", "button1", "Piano"); //calls reasign to set variables to this buttons
    audioTrack.pause(); //pauses the audio
    audioTrack.currentTime = 0; //sets audio to begining for reasignment
    audioTrack.play(); //plays new audio
    changeImage();// updates what image is highlighted and what image is displayed in main image
    changeText();// sets the text under main image to be the new text
    //these comments apply to all button 1 - 12 event listeners
});

button2.addEventListener("click", function() {
    reasign("./assets/images/typing.png","./assets/audio/typing.mp3", "Typing on a laptop", "button2", "Typing");//calls reasign to set variables to this buttons
    audioTrack.pause(); 
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button3.addEventListener("click", function() {
    reasign("./assets/images/applause.png","./assets/audio/applause.mp3", "Hands clapping", "button3", "Clapping");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button4.addEventListener("click", function() {
    reasign("./assets/images/heart.jpg","./assets/audio/heart.mp3", "Human heart", "button4", "Heart Beating");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button5.addEventListener("click", function() {
    reasign("./assets/images/sunrise.jpg","./assets/audio/sunrise.mp3", "Sun setting on a lake", "button5", "Sun Setting");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button6.addEventListener("click", function() {
    reasign("./assets/images/police.jpg","./assets/audio/police.mp3", "Police car", "button6", "Police Siren");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button7.addEventListener("click", function() {
    reasign("./assets/images/crystal.jpg","./assets/audio/crystal.mp3", "Blue crystal", "button7", "Futuristic Crystal");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button8.addEventListener("click", function() {
    reasign("./assets/images/thunder.jpg","./assets/audio/thunder.mp3", "Lightning in a storm", "button8", "Lightning");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button9.addEventListener("click", function() {
    reasign("./assets/images/techPiano.jpg","./assets/audio/techPiano.mp3", "Clear piano", "button9", "Dramatic Music");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button10.addEventListener("click", function() {
    reasign("./assets/images/helicopter.jpg","./assets/audio/helicopter.mp3", "Helicopter flying", "button10", "Helicopter");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button11.addEventListener("click", function() {
    reasign("./assets/images/deepOcean.jpg","./assets/audio/deepOcean.mp3", "Jellyfish", "button11", "Jellyfish Swimming");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

button12.addEventListener("click", function() {
    reasign("./assets/images/explosion.jpg","./assets/audio/explosion.mp3", "Nuclear bomb mushroom cloud", "button12", "Explosion");//calls reasign to set variables to this buttons
    audioTrack.pause();
    audioTrack.currentTime = 0;
    audioTrack.play();
    changeImage();
    changeText();
});

buttonPlay.addEventListener("click", function() { //runs when the play button is pressed
    audioTrack.pause(); //pauses audio to ensure audio is paused and not resarted
    audioTrack.play(); //plays the paused audio
});

buttonPause.addEventListener("click", function(){ //runs when the pause button is pressed
    audioTrack.pause(); //pauses the current audio
});

buttonStop.addEventListener("click", function (){
    audioTrack.pause(); //pauses the audio to stop it from playing after reset
    audioTrack.currentTime = 0; //resets the audio to time 0
});

function changeImage (){// makes all changes to images that are displayed
    
    //console.log(currentCard.getAttribute("border-color"));

    let currentImage = document.querySelector(`.cardImage[src='${localStorage.getItem("image")}']`); //gets the HTML Element of the current audio image in the below button section
    let images = document.querySelectorAll('img') //gets all HTML elements that are of tag img in the lower button section and assigns them to an array call images
    
    images.forEach(img => img.style.backgroundColor = "#092b46") // for each element of the array set the background color to #092b46
    mainImage.setAttribute("src", localStorage.getItem("image")); //sets main image to the currinet image in local storage
    currentImage.style.backgroundColor = "red"; //sets the background of the selected audios corresponding image to red
    mainImage.setAttribute("alt", localStorage.getItem("altText")); //sets the alt text of main image to the new alt text in local storage
}

function changeText(){ //changes the text under main image
    let text = localStorage.getItem("currentDescription"); //gets new description from local storage
    currentDescription.innerHTML = text;  //displays new description
}
