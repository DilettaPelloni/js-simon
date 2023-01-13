//qua metto le funzioni ---------------------------------------

//crea uno span
function createSpan() {
    const span = document.createElement('span');
    return span;
}

//restituisci un numero casuale
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//--------------------------------------------------------------

//vado a prendere la number box
const numberBox = document.getElementById('number-box');

//mostro 5 numeri casuali
for (let i = 1; i <= 5; i++) {
    //creo uno span
    const span = createSpan();
    //ci metto dento un numero casuale da 1 a 10
    span.innerText = randomNum(1, 10);
    //metto lo span nella number box
    numberBox.append(span);
}

//timer di 30 secondi
setTimeout (function() {
    //rendo invisibile la numebr box
    numberBox.classList.add('invisible')

}, 2000);




