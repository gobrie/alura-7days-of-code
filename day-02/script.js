let nome;
let idade;
let linguagem;

nome = prompt ("Qual o seu nome?");
idade = prompt ("Quantos anos você tem?");
linguagem = prompt("Qual linguagem de programação você está estudando?");

document.write(`<h2 id="jstext"> Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</h2>`);