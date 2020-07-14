//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let num1 = 60;
let num2 = 40;
let num3 = 80;

if(num1 + num2 + num3 == 180){
    console.log("A soma dos 3 valores forma um triangulo");
} else {
    console.log("*** ERRO *** A soma dos 3 valores NAO forma um triangulo");
}