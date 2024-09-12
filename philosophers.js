const form = document.getElementById('myform');

showCustomAlert('Decorul se schimbă, iar în fața ta apar - deodată - statuile mai multor filosofi. Fiecare statuie se conectează cumva la o cifră. Nu prea știi ce ai de făcut, dar peste tot în jur par să fie instrucțiuni...','');




form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('userAnswer').value;
    
    if (answer.toLowerCase() === "ellada" ){
        console.log('Corect, raspunsul era ', answer);
        document.getElementById('userAnswer').value = 'Răspuns corect!';
        document.getElementById("btnSubmitPhilosophers").setAttribute("value", "Continuă");

    } else if (answer === "Răspuns corect!"){
        window.open('walk.html',"_self");

    } else {
        document.getElementById("btnSubmitPhilosophers").setAttribute("value", "Trimite");
        document.getElementById('userAnswer').setAttribute('placeHolder','Mai încearcă!');
        document.getElementById('userAnswer').value = '';
        console.log('Raspuns gresit!');
        // form.reset();
    }
});

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