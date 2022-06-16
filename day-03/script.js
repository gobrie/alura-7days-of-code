const stack = prompt("Quer seguir a área de 'Front-End' ou 'Back-End'?")
let linguagem = "";

if (stack === "Front-End") {
    linguagem = prompt ("Você quer aprender React ou Vue?")
} else if (stack === "Back-End") {
    linguagem = prompt ("Você quer aprender C# ou Java?")
} else {
    alert("Você não adicionou um dado válido!")
    location.reload();
}

const area = prompt("Você quer continuar na sua área ou se tornar 'Full-Stack'?")

let i = prompt("Tem uma tecnologia que gostaria de aprender?");
let tecnologia = "";

while (i != "ok" ){
    tecnologia = prompt ("Qual?")
    i = prompt ("Gostaria de adicionar mais uma? Caso não, digite 'ok'!")
}

document.write(`Você escolheu a área de ${stack}, e quer aprender ${linguagem}!`)