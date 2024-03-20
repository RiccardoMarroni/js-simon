 
 /*carico i numeri casuali nel vettore*/
 
 const randomNumbersArray = [];
 let randomNumbers;

for(i = 0; i < 6; i++){
    let i = parseInt(Math.random() * (100 - 1) + 1)
    randomNumbersArray.push(i);
}

console.log(randomNumbersArray)