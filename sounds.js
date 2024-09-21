let effectSound = document.getElementById("myAudio");
let soundTrack = document.getElementById("soundTrack");
let sound = '';

function playSound() {
    effectSound.play();
}

function stopSound(){
    effectSound.load();
}


function playCustomSound(sound){
effectSound.setAttribute("src",`resources/sounds/${sound}.wav`);
effectSound.play();
}
    
function playSoundTrack(){
    soundTrack.currentTime = 0;
    soundTrack.play();
}

// Function to handle visibility change
function handleVisibilityChange() {
    if (document.hidden) {
        soundTrack.pause();
    } else {
        soundTrack.play();
    }
}

// Event listener to pause the music if the window is not visible:
document.addEventListener('visibilitychange', handleVisibilityChange, false);