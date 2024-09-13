let lastWonder = 0;
document.getElementById("nextBtnWonders").style.display = "none";
document.getElementById("wondersFinalText").style.display = "none";
const wonders = ['Marea Piramidă din Giza', 'Gradinile suspendate ale Semiramidei', 'Templul zeiței Artemis din Efes', 'Statuia lui Zeus din Olympia', 'Mausoleul din Halicarnas', 'Colosul din Rhodos', 'Farul din Alexandria'];


showCustomAlert('Adâncindu-te în vis,  observi un peisaj incredibil, o adevărată minune. Nu l-ai mai văzut până acum, dar parcă îl cunoști de o viață.','');

// prevent long press on an image bring the popup menu on phones:
const imgButtons = document.getElementsByClassName('wonder');
for (let i=0; i < imgButtons.length; i++){
    imgButtons[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
}

const smallWonders = document.getElementsByClassName('smallWonder');
for (let i=0; i < smallWonders.length; i++){
    smallWonders[i].addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
}








function checkWonder(wonder) {
   
    if (wonder - lastWonder === 1){
               console.log('hide image');
               document.getElementById(`wonder${wonder}`).style.display = 'none';
               document.getElementById(`w${wonder}`).style.display = 'none';
               document.getElementById('wondersParagraph').innerText = `Corect, ai selectat ${wonders[wonder-1]}`
               lastWonder = wonder;
               playSound();
               if (wasLastWonder()){
                   document.getElementById("nextBtnWonders").style.display = "initial";
                   document.getElementById("wondersFinalText").style.display = "initial";
               }
   } else {
       console.log("Reset Wonders");
       resetWonders();
       playSound();
   }
}

function resetWonders(){
   for (let i=1; i<8; i++){
       document.getElementById(`wonder${i}`).style.display = "initial";
       document.getElementById(`w${i}`).style.display = "initial";
       lastWonder = 0;
   };
   document.getElementById('wondersParagraph').innerText = `Ai greșit, încearcă din nou!`
}

function wasLastWonder(){
   if (lastWonder === 7){
       return true;
   }
   return false;
}

function showNextBtnWonders(){
   document.getElementById("")

}


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

