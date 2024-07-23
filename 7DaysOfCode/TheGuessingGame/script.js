const randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = 0;
let guess;
let guessCount = 0;
let guessLimit = 3;
let outOfGuesses = false;
let guessedNumbers = [];
var respostOfStart = "";

alert("Olá, seja bem-vindo ao jogo de adivinhação!");

respostOfStart = prompt("Vamos comecar?");

if (respostOfStart === "sim" || respostOfStart === "s" || respostOfStart === "Sim" || respostOfStart === "SIM" || respostOfStart === "S") {
    alert("Fico feliz, vamos lá");
    alert("Deixa eu carregar um pouco para que eu possa escolher um número de 1 a 10");
    alert("Estou pensando");
    alert("Já sei!");
    alert("Boa sorte")
    alert("Você terá 3 chances para adivinhar o número");
    guess = prompt("Escolha um número de 1 a 10:");
    guessCount++;
    guessedNumbers.push(guess);
    
    while (guess != randomNumber && !outOfGuesses) {
       if (guessCount < guessLimit) {
        guess = prompt("Escolha um número de 1 a 10:");
        guessCount++;
        guessedNumbers.push(guess);
     } else {
        outOfGuesses = true;
     }
    }

    if (outOfGuesses) {
        alert("Você perdeu! O número era: " + randomNumber);
    } else {
    alert("Você ganhou! O número era: " + randomNumber);
    }

    alert("Os números que você esolheu foram: " + guessedNumbers);
    alert("Você adivinhou " + guessCount + " vezes.");
} else {
    alert(">:(");
    alert("Tchau");
}

alert("Obrigado por jogar");