const form = document.getElementById('myform');

showCustomAlert('','');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('userAnswerPh').value;
    
    if (answer.toLowerCase() === "ellada" ){
        console.log('Corect, raspunsul era ', answer);
        document.getElementById('userAnswerPh').value = 'Răspuns corect!';
        document.getElementById("btnSubmitPhilosophers").setAttribute("value", "Continuă");

    } else if (answer === "Răspuns corect!"){
        window.open('walk.html',"_self");

    } else {
        document.getElementById("btnSubmitPhilosophers").setAttribute("value", "Trimite");
        document.getElementById('userAnswerPh').setAttribute('placeHolder','Mai încearcă!');
        document.getElementById('userAnswerPh').value = '';
        console.log('Raspuns gresit!');
        // form.reset();
    }
});

// Alert:

function showCustomAlert(message, name) {
    const alertBox = document.getElementById('customAlert');
    // const alertMessage = document.getElementById('alertMessage');
    // alertMessage.textContent = `${name}  ${message}`;
    document.getElementById('overlay').style.visibility = "visible";
}

function closeAlert() {
    document.getElementById('customAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
    playSoundTrack();
}

function toggleScroll(){
   const scroll = document.getElementById('scroll');

   if (scroll.getAttribute('src') === 'resources/scroll1.png'){
    scroll.setAttribute('src','resources/scroll2.png');
    scroll.style.width = "50%";
   } else {
    scroll.setAttribute('src','resources/scroll1.png');
    scroll.style.width = "10%";
   }
}