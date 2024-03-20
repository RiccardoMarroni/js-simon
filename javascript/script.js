 
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
let countdown = 31;
const timerCountdown = setInterval(function () {
    countdown--;
    if (countdown === 0) {
        clearInterval(timerCountdown);
    }
    timeIsUp.innerHTML = countdown;
}, 1000);
const waitingTime1 = setTimeout(deleteNumbers, 31000, numbers);

const guessedNumbers = [];
const userNumberArray = [];
