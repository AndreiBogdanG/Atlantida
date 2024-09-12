
showCustomAlert('Se vede că aparatul nu a mai fost folosit de mii de ani. Îl forțezi puțin, mai bagi unghia, mai bușești cu el de o piatră - important e ca la final să reușești. ','');


function showCustomAlert(message, name) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
    document.getElementById('okBtn').style.width = '85px';
}

function closeAlert() {
    document.getElementById('customAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
    playSoundTrack();
}


const screenWidth = window.innerWidth;
console.log(screenWidth);
if (screenWidth > 400){
   document.getElementById('generalText').innerText = 'Mecanismul s-a deschis, iar în interior a apărut un ecran de cristal. Imaginea din el poate fi mișcată trăgând-o cu mouse-ul!';
}
