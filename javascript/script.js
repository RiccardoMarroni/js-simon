 
 /*carico i numeri casuali nel vettore*/
 
 const randomNumbersArray = [];
 let randomNumbers;

for(i = 0; i < 5; i++){
    let i = parseInt(Math.random() * (100 - 1) + 1)
    randomNumbersArray.push(i);
}

console.log(randomNumbersArray)


const numbers = document.getElementById('numbers');
numbers.innerHTML = randomNumbersArray;

// faccio il clock

const timeIsUp = document.getElementById('clock');
let countdown = 5;
const timerCountdown = setInterval(function () {
    countdown--;
    if (countdown === 0) {
        clearInterval(timerCountdown);
    }
    timeIsUp.innerHTML = countdown;
}, 1000);
const waitingTime1 = setTimeout(deleteNumbers, 31000, numbers);


// numeri utente

const guessedNumbers = [];
const userNumberArray = [];


// funzione cercata online
const waitingTime2 = setTimeout(createPrompts, 32000, 5, userNumberArray);


function deleteNumbers(domElement) {
    domElement.innerHTML = 'Te li ricordi?';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPrompts(iterations, array) {
    for (let i = 0; i < iterations; i++) {
        let userNumber = parseInt(prompt('Inserisci uno dei numeri'));
        array.push(userNumber);
    }
    for (let i = 0; i < randomNumbersArray.length; i++) {
        if (userNumberArray.includes(randomNumbersArray[i])) {
            guessedNumbers.push(randomNumbersArray[i]);
        }
    }
    numbers.innerHTML = 'Hai indovinato ' + guessedNumbers.length + ' numeri: ' + guessedNumbers;
}