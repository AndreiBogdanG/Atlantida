document.getElementById("nextBtnFirstQuiz").style.display = "none";

showCustomAlert('','');


function startGame() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('notAlex').style.display = 'none';
    document.getElementById('puzzle1').style.display = 'block';
    document.getElementById('mapsImg').setAttribute('src', 'resources/atlantis.png');
    document.getElementById('h1Welcome').innerText = 'Începutul călătoriei către';
}

function checkAnswer(answer) {
    if (answer === 'C') {
        document.getElementById('atlantisDescription').style.display = "none";
        document.getElementById('theBtns').style.display = "none";
        
        document.getElementById('response').innerText = 'Corect, Plato a menționat pentru prima dată Atlantida în dialogul Timaeus.';
        document.getElementById('nextBtnFirstQuiz').style.display = "initial";
    } else {
        document.getElementById('response').innerText = "Mai încearcă!";
    }
}

function openWondersPage(){
    window.open('wonders.html',"_self");
}


// Alert:

function showCustomAlert(message, name) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
}

function closeAlert() {
    document.getElementById('introAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
    document.getElementById('notAlexPopup').style.visibility = "hidden";
    playSoundTrack();
}

function notAlex(message, name){
    const alertBox = document.getElementById('notAlexPopup');
    const alertMessage = document.getElementById('notAlexAlertMessage');
    alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
    alertBox.style.visibility = "visible";
}