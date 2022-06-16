const counter = document.getElementById("counter");
const randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1)
let counterNum = 1;
let num = "";

//console.log(randomNum)


for (let i = 0; i < 3; i++) {
     num = prompt("Digite um número entre 0 a 10!");
    if( num == randomNum) {
        alert("Parabéns você acertou");
        break;
    } else {
        alert("Você errou, tente novamente");
    }
}