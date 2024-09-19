const floor = document.getElementById('floor');
const form = document.getElementById('alexandriaForm');
let counter=-1;
const valuesArr = [22, 18, 19, 15, 11, 10, 9, 5, 6, 2];
const lettersArr = ['0','S','A', 'X', 'D',
                     'R','I', 'P', 'M',
                     'D','N','A','F',
                     'G','I','X','E',
                    'U', 'L', 'E', 'O',
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
    const rotation = (Math.floor(Math.random() * 4) + 1)*90;


    tile.style.transform = `rotate(${rotation}deg)`;
    // floor.append(tile);
    floor.append(tileDiv);
    tileDiv.appendChild(tile);

    const letter = document.createElement('p');
    letter.setAttribute('class',`tileLetters`);
    letter.setAttribute('id',`tileLetter${i}`);
    letter.innerText = `${lettersArr[i]}`;
    tileDiv.append(letter);
}

// prevent long press on an image bring the popup menu on phones:
const tileImg = document.getElementsByClassName('tileDiv');
let lastTouchEnd = 0;
for (let i=0; i < tileImg.length; i++){
    tileImg[i].addEventListener('touchstart', function(event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 180) {
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
    document.getElementById(`tileLetter${i}`).style.color = 'yellow';
    playCustomSound('goodStep');
    if (i===2){
        document.getElementById('alexandriaForm').style.visibility = "visible";

    }

} else {
    playCustomSound('badStep');
    counter = -1;
    for (let j=1; j<25; j++) {
        document.getElementById(`tile${j}`).style.opacity = 1;
        document.getElementById(`tileLetter${j}`).style.color = 'rgb(113, 84, 22)';

    }
}
}

showCustomAlert('','');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('userAnswer').value;
    
    if (answer.toLowerCase() === "alexandria" ){

        document.getElementById('userAnswer').style.fontFamily = "Aref Ruqaa Ink";
        document.getElementById('userAnswer').value = 'Răspuns corect!';
        document.getElementById("alexandriaBtn").setAttribute("value", "Continuă");

        revealLetters();

    } else if (answer === "Răspuns corect!"){
        window.open('starrynight.html',"_self");

    } else {

        document.getElementById("alexandriaBtn").setAttribute("value", "Trimite");
        document.getElementById('userAnswer').style.fontFamily = "Aref Ruqaa Ink";
        document.getElementById('userAnswer').setAttribute('placeHolder','Mai încearcă!');
        document.getElementById('userAnswer').value = '';
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


function resetUserInput(){
    document.getElementById('userAnswer').setAttribute('placeHolder','');
    document.getElementById('userAnswer').value = '';
    document.getElementById('userAnswer').style.fontFamily = "Greek";
}

// function to reveal letters when answer is found:

function revealLetters(){
    for(i=0; i<valuesArr.length; i++){
        document.getElementById(`tileLetter${valuesArr[i]}`).style.fontFamily = "Aref Ruqaa Ink";
        document.getElementById(`tileLetter${valuesArr[i]}`).style.color = "Red";
        document.getElementById(`tileLetter${valuesArr[i]}`).style.textShadow = "0px 0px 30px yellow";

    }
}

// Prevent submission when pressing Enter
    const userAnswer = document.getElementById('userAnswer');
     const goodLetters = ['a','l','e','x','n','d','r','i'];
    
    userAnswer.addEventListener('input', function(event) {
        const lastChar = userAnswer.value.slice(-1);
            if (!goodLetters.includes(lastChar.toLowerCase())){
                userAnswer.value = userAnswer.value.slice(0, -1);
            // event.preventDefault();
        } 
    });
    
// To handle the "Enter" key press separately:
    userAnswer.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            userAnswer.blur(); // Deselect the input field on Enter key
        }
    });