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

let time = 0;
const audioTrack = new Audio(".audio/softPiano.mp3");

let audioElement = {
    
    image: "softPiano.jpg",
    audio: ".audio/softPiano.mp3",
    altText: "Person playing a piano",
    currentCard: 1,
    previousCard: null,

    reasign: function(newImage, newAudio, newAltText, newCurrentCard){
        this.image = newImage;
        this.audio = newAudio;
        this.altText = newAltText;
        this.previousCard = this.currentCard;
        this.currentCard = newCurrentCard;
    }

};

button1.addEventListener("click", function() {
    audioElement.reasign("softPiano.jpg", new Audio("Audio/softPiano.mp3"), "Person playing a piano", 1);
    
    audioTrack.play();
});