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

//restituisci quanti e quali elementi hanno in comune due array (conta anche la posizione)
function sameElementArray(array1, array2) {
    //controllo
    if (array1.length != array2.length) {
        console.log('Gli array da confrontare devono avere lo stesso numero di elementi!');
        return false;
    }
    //eseguo
    //creo un contatore
    let counter = 0;
    //creo un array per salvare i numeri in comune
    const sameElements = [];
    //confronto gli elementi dei due array e mi segno quando corrispondono
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            counter++;
            sameElements.push(array1[i]);
        }
    }
    //creo un array col risultato da restituire sotto forma di array
    const result = [counter, sameElements];
    return result;
}


//--------------------------------------------------------------

//vado a prendere la number box
const numberBox = document.getElementById('number-box');
//vado a prendere la timer box
const timerBox = document.getElementById('timer-box');

//creo un array in cui inserire i numeri da memorizzare
const gameArray = [];

//mostro 5 numeri casuali e li salvo in un array
for (let i = 1; i <= 5; i++) {
    //creo uno span
    const span = createSpan();
    //ci metto dento un numero casuale da 1 a 10
    span.innerText = randomNum(1, 10);
    //metto lo span nella number box
    numberBox.append(span);
    //metto il contenuto della span nell'array
    gameArray.push(span.innerText);
}

//mostro un timer di 30 secondi
//creo il contatore dei secondi
let seconds = 30;

let timer = setInterval(function() {
    //scrivo in html i secondi rimanenti
    document.getElementById('seconds').innerText = seconds;

    //decremento i secondi
    seconds--;

    //quando arrivo a 0
    if (seconds == 0) {
        clearInterval (timer);
    }
}, 1000)

//dopo 30 secondi nascondo la number box
setTimeout (function() {
    //rendo invisibili le box
    numberBox.classList.add('invisible');
    timerBox.classList.add('invisible');

    //dopo 1 secondo chiedo i 5 numeri
    setTimeout (function() {
        //creo un array in cui inserire i numeri
        const inputArray = [];
    
        //chiedo all'utente i cinque numeri e li inserisco nell'array
        for (let i = 1; i <= 5; i++) {
            const numberInput = prompt('inserisci il ' + i + '° numero:');
            inputArray.push(numberInput);
        }
    
        //comunico quanti numeri sono stati indovinati
        console.log('Hai indovinato ' + sameElementArray(inputArray, gameArray)[0] + ' numeri su 5!');
        //ricordo all'utente quali erano i numeri da indovinare
        console.log('In numeri da memorizzare erano: ' + gameArray);

        //se ha invovinato qualcosa
        if (sameElementArray(inputArray, gameArray)[1].length != 0 ) {
            console.log('I numeri che hai ricordato correttamente sono: ' + sameElementArray(inputArray, gameArray)[1]);
            if (sameElementArray(inputArray, gameArray)[1].length == gameArray.length) {
                //se hai indovinato tutto
                console.log('Hai vinto!!');
            }
            else {
                console.log('Potevi fare di meglio...');
            }
        }
        else {
            console.log('Non hai memorizzato neanche un numero. Hai perso!');
        }
    }, 1000);

}, 30000);









