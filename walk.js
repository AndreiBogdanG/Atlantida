const floor = document.getElementById('floor');
const form = document.getElementById('alexandriaForm');
let counter=-1;
const valuesArr = [22, 18, 19, 15, 11, 10, 9, 5, 6, 2];
const lettersArr = ['0','S','A', 'X', 'D',
                     'R','I', 'V', 'M',
                     'D','N','A','F',
                     'H','I','X','E',
                    'U', 'L', 'E', 'A',
                    'B','A','X','I'];

// create tiles:
for (let i = 1; i < 25; i++) {
    const tileDiv = document.createElement('div');
    const tile = document.createElement('img'); 

    tileDiv.className = 'tileDiv';

    tile.src = 'resources/tile.jpg';
    tile.width = '75';
    tile.id = `tile${i}`;
    tile.setAttribute('onclick',`checkTile(${i})`);
    // floor.append(tile);
    floor.append(tileDiv);
    tileDiv.appendChild(tile);

    const letter = document.createElement('p');
    letter.setAttribute('id','tileLetters')
    letter.innerText = `${lettersArr[i]}`;
    tileDiv.append(letter);
}


// prevent long press on an image bring the popup menu on phones:
const tileImg = document.getElementsByClassName('tileDiv');
let lastTouchEnd = 0;
for (let i=0; i < tileImg.length; i++){
    tileImg[i].addEventListener('touchstart', function(event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault(); 
        }

        lastTouchEnd = now;
    }, false);
    tileImg[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
}





function checkTile(i){
counter++;
if (valuesArr[counter]===i){
    document.getElementById(`tile${i}`).style.opacity = 0.5;
    playCustomSound('goodStep');
    if (i===2){
        document.getElementById('alexandriaForm').style.visibility = "visible"
    }


} else {
    playCustomSound('badStep');
    counter = -1;
    for (let j=1; j<25; j++) {
        document.getElementById(`tile${j}`).style.opacity = 1;
    }
}
}

// showCustomAlert('Părăsești statuile și te îndrepți către țărm. "Ce o fi cu dalele astea de piatră?", te întrebi. Sub lumina lunii, parcă vezi ceva la capătul lor. Începi să pășești cu grijă, atent și-n stânga și-n dreapta... ','');

showCustomAlert('','');




form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('userAnswer').value;
    
    if (answer.toLowerCase() === "alexandria" ){
        console.log('Corect, raspunsul era ', answer);
        document.getElementById('userAnswer').value = 'Răspuns corect!';
        document.getElementById("alexandriaBtn").setAttribute("value", "Continuă");

    } else if (answer === "Răspuns corect!"){
        window.open('starrynight.html',"_self");

    } else {
        document.getElementById("alexandriaBtn").setAttribute("value", "Trimite");
        document.getElementById('userAnswer').setAttribute('placeHolder','Mai încearcă!');
        document.getElementById('userAnswer').value = '';
        console.log('Raspuns gresit!');
        // form.reset();
    }
});






function showCustomAlert(message, name) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    // alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
    }

function closeAlert() {
    document.getElementById('customAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
    playSoundTrack();
}


