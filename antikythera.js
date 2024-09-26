let element = document.getElementById("cross");
let degree = 0;
let degreeString='';
let toggleOn = true;
let crossPosition = false;
let bigWheelPosition = false;
let outsidePosition = false;
const cross = document.getElementById('cross');
const bigWheel = document.getElementById('bigWheel');
const outside = document.getElementById('outside');

let degrees = {cross: 0, bigWheel: 0, outside: 0, smallWheel: 0, inside: 0, textParagraph: 0};

showCustomAlert('Mergi către ruine, iar la baza unei coloane găsești - pe jumătate ieșit din nisip - un dispozitiv ciudat. Îl ridici și îl întorci pe toate părțile. Pe spate are o serie de butoane din piatră...','');


// Function to detect device:
function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        console.log("User is on Android");
        return "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        console.log("User is on iOS");
        return "iOS";
    } else {
        console.log("User is on another device");
        return "Other";
    }
}


// prevent double-clicking on iPhones (300 ms) and the default menu on long press:
if (detectDevice()==='iOS'){
const imgButtons = document.getElementsByClassName('stoneBtns');
let lastTouchEnd = 0;

for (let i = 0; i < imgButtons.length; i++) {
    imgButtons[i].addEventListener('touchstart', function(event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 180) {
            event.preventDefault(); 
        }

        lastTouchEnd = now;
    }, false);

    imgButtons[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
}
}

function rotateLeft(part){
   
    element = document.getElementById(part.id);
    degrees[part.id] -= 5;
    degreeString = 'rotate(' + degrees[part.id]+ 'deg)';
    element.style.transform = degreeString;
    element.style.transition = 'transform 0.5s'; 

    console.log(degrees[part.id]);
    checkAlignment();
    stopSound();
    playSound();
}

function rotateRight(part){
   
    element = document.getElementById(part.id);
    degrees[part.id] += 5;
    degreeString = 'rotate(' + degrees[part.id] + 'deg)';
    element.style.transform = degreeString;
    element.style.transition = 'transform 0.5s'; 
    console.log(degrees[part.id]);
    checkAlignment();
    playSound();
}

function toggleButtons(){
if (toggleOn){
    
    document.getElementById('btnBigWheelL').style.visibility = 'hidden';
    document.getElementById('btnSmallWheelR').style.visibility = 'hidden';
    document.getElementById('btnInsideL').style.visibility = 'hidden';
    document.getElementById('btnToggle1').style.visibility = 'hidden';
    document.getElementById('btnToggle2').style.visibility = 'visible';
    document.getElementById('btnCrossR').style.visibility = 'visible';
    document.getElementById('btnOutsideR').style.visibility = 'visible';
    document.getElementById('btnSmallWheelL').style.visibility = 'visible';
    toggleOn = false;
} else {
    document.getElementById('btnBigWheelL').style.visibility = 'visible';
    document.getElementById('btnSmallWheelR').style.visibility = 'visible';
    document.getElementById('btnInsideL').style.visibility = 'visible';
    document.getElementById('btnToggle1').style.visibility = 'visible';
    document.getElementById('btnToggle2').style.visibility = 'hidden';
    document.getElementById('btnCrossR').style.visibility = 'hidden';
    document.getElementById('btnOutsideR').style.visibility = 'hidden';
    document.getElementById('btnSmallWheelL').style.visibility = 'hidden';
    toggleOn = true;
   }
}

function checkAlignment(){
              
               if ((degrees.cross + 35) % 360 === 0 ){
                crossPosition = true;
               } else {
                crossPosition = false;
               };
                                 
               if ((degrees.bigWheel + 145) % 360 === 0) {
                bigWheelPosition = true;
               } else {
                bigWheelPosition = false;
               };
               
               if ((degrees.outside -75) % 360 === 0) {
                outsidePosition = true; 
               } else {
                outsidePosition = false;
               };
               if (crossPosition && bigWheelPosition && outsidePosition){
                hideButtons();
                showFinalText()
               }
                lightsOn();
               };
           
function hideButtons(){
    const allButtons = document.getElementsByClassName('stoneBtns');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.visibility = "hidden";
    }
}

function showFinalText(){
    document.getElementById('finalText').style.visibility = "visible";
    document.getElementById('btnOpen').style.visibility = "visible";
}

function openNextPage(){
    window.open('streetmap.html',"_self");
}

function lightsOn(){
    if (crossPosition){
        cross.style.boxShadow = "0px 0px 30px yellow";
        cross.style.borderRadius = "50%";
    } else {
        cross.style.boxShadow = "none";
        cross.style.borderRadius = "50%";
    };
    if (bigWheelPosition){
        bigWheel.style.boxShadow = "0px 0px 30px yellow";
        bigWheel.style.borderRadius = "50%";
    } else {
        bigWheel.style.boxShadow = "none";
        bigWheel.style.borderRadius = "50%";
    };
    if (outsidePosition){
        outside.style.boxShadow = "0px 0px 30px yellow";
        outside.style.borderRadius = "50%";
    } else {
        outside.style.boxShadow = "none";
        outside.style.borderRadius = "50%";
    };
};

// Alert:

function showCustomAlert(message, name) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
}

function closeAlert() {
    document.getElementById('customAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
    playSoundTrack();
}