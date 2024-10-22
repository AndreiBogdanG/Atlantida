const skyContainer = document.getElementById('skyContainer');
const starrySky = document.getElementById('starrySky');
const telescopeLens = document.getElementById('telescopeLens');
const openWindow = document.getElementById('openWindow');
const form = document.getElementById('myform');
const answers = ['basarabia e romania', 'basarabia e românia', 'basarabia e romania!', 'basarabia e românia!'];
const scope = document.getElementById('scope');
let scopeRotation = 0;
let moveDistance = 5; // Distance to move in each direction
let clicks = 0;
const screenWidth = window.innerWidth;
let isAnswerCorrect = false;

let rotationFactor = 1.35;
const windowPicWidth = openWindow.offsetWidth;;

if (screenWidth > 800){
    rotationFactor = 1.50;
    moveDistance = 11;
    telescopeLens.style.width = '150px';
    telescopeLens.style.height = '150px';
}

showCustomAlert('Ajungi în siguranță la capătul aleii pietruite, iar în față ai un cufăr de lemn. Scotocind prin el, găsești o lunetă și o schiță cu niște ruine grecești. Iei luneta și o îndrepți către Acropole, cu speranța că vei găsi ceva.','');



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

// if (detectDevice()==='iOS'){
const imgButtons = document.getElementsByClassName('brassButtons');
let lastTouchEnd = 0;
for (let i=0; i < imgButtons.length; i++){
    imgButtons[i].addEventListener('touchstart', function(event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 400) {
                     moveDistance = 10;
                     event.preventDefault(); 

            moveLens(direction);
        }

        lastTouchEnd = now;
    }, false);
    imgButtons[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
}
// }

function setInitialLensPosition() {
    const windowRect = openWindow.getBoundingClientRect();
    
    telescopeLens.style.left = `${windowRect.left}px`;
    telescopeLens.style.top = `${windowRect.top}px`;
    
    telescopeLens.style.backgroundPosition = 'center';
}

window.onload = setInitialLensPosition;

function moveLens(direction) {
    playSound();
    telescopeLens.style.opacity = "100";
    const lensX = parseFloat(telescopeLens.style.left) || 0;
    const lensY = parseFloat(telescopeLens.style.top) || 0;
    
    let newLensX = lensX;
    let newLensY = lensY;

    // Get the boundaries of the open window
    const windowRect = openWindow.getBoundingClientRect();
    const lensRect = telescopeLens.getBoundingClientRect();
    
    switch (direction) {
        
        case 'left':
            if (clicks >0){
                clicks--;
            }
                  
            if (lensRect.left - moveDistance >= windowRect.left) {
                newLensX -= moveDistance;
                scopeRotation -= rotationFactor;
                scope.style.transform = `rotate(${scopeRotation}deg)`;
                scope.style.transition = 'transform 0.5s'; 
                if (clicks===10) {
                    document.getElementById('friends').style.visibility = "visible"
                } else {
                     document.getElementById('friends').style.visibility = "hidden"
                }

            }
            break;
        case 'right':
            clicks ++;
                       
            if (lensRect.right + moveDistance <= windowRect.right) {
                newLensX += moveDistance;
                scopeRotation += rotationFactor;
                scope.style.transform = `rotate(${scopeRotation}deg)`;
                scope.style.transition = 'transform 0.5s'; 
                if (clicks===10) {
                    document.getElementById('friends').style.visibility = "visible"
                } else {
                     document.getElementById('friends').style.visibility = "hidden"
                }
            }
            break;
        case 'up':
            if (lensRect.top - moveDistance >= windowRect.top) {
                newLensY -= moveDistance;
            }
            break;
        case 'down':
            if (lensRect.bottom + moveDistance <= windowRect.bottom) {
                newLensY += moveDistance;
            }
            break;
    }

    telescopeLens.style.left = `${newLensX}px`;
    telescopeLens.style.top = `${newLensY}px`;

    const skyX = -((newLensX / window.innerWidth) * starrySky.offsetWidth - telescopeLens.offsetWidth / 40);
    const skyY = -((newLensY / window.innerHeight) * starrySky.offsetHeight - telescopeLens.offsetHeight / 40);
    
    telescopeLens.style.backgroundPosition = `${skyX}px ${skyY}px`;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('userAnswer').value;
    
    if (answers.includes(answer.toLowerCase() ) ){
        document.getElementById('userAnswer').value = 'Răspuns corect!';
        isAnswerCorrect = true;
        document.getElementById("btnSubmit").setAttribute("value", "Continua");

    } else if (isAnswerCorrect){
        window.open('antikythera.html',"_self");

    } else {
        document.getElementById("btnSubmit").setAttribute("value", "Trimite");
        document.getElementById('userAnswer').value = '';
       }
});

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