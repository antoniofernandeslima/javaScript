/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals*/

let peca = "Direita";
let srtPeca = peca.toLowerCase();


switch (srtPeca) {
  case "direita":
    console.log("Mova para direita");
    break;
  case "esquerda":
    console.log("Mova para esquerda");
    break;
  case "diagonal":
    console.log("Mova para diagonal");
        break;
  default:
    console.log("A peca nao pode ser movida");
}