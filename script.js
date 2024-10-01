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
let previousCard = null;
if(localStorage.getItem("currentTrack") == null) {


    localStorage.setItem("image", "./images/softPiano.jpg");
    localStorage.setItem("audio", "./audio/softPiano.mp3");
    localStorage.setItem("altText", "Person playing a piano");
    localStorage.setItem("currentCard", "button1");
    localStorage.setItem("previousCard", null);
    audioTrack.setAttribute("src", localStorage.getItem("audio"));

    console.log("audioTrack:" + audioTrack.getAttribute("src"));

} else {
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
    currentCard = document.getElementById(localStorage.getItem("currentCard"));
    changeImage();
}

function reasign(newImage, newAudio, newAltText, newCurrentCard){
    localStorage.setItem("image", newImage);
    localStorage.setItem("audio", newAudio);
    localStorage.setItem("altText", newAltText);
    localStorage.setItem("previousCard", currentCard);
    localStorage.setItem("currentCard", newCurrentCard)
    currentCard = newCurrentCard;
    audioTrack.setAttribute("src", localStorage.getItem("audio"));
}


button1.addEventListener("click", function() {
    reasign("./images/softPiano.jpg","./audio/softPiano.mp3", "Person playing a piano", button1);
    audioTrack.play();
    changeImage();
});
buttonPlay.addEventListener("click", function() {
    audioTrack.stop();
    audioTrack.play();
});
buttonStop.addEventListener("click", function (){
    audioTrack.stop();
});

function changeImage (){
    mainImage.setAttribute("src", localStorage.getItem("image"));
    previousCard.setAttribute("border-color", "black");
    currentCard.style.borderColor = "red";
    mainImage.setAttribute("alt", localStorage.getItem("altText"));
}