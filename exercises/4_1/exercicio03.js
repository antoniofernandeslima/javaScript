//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let num1 = 2;
let num2 = 30;
let num3 = 20;

if (num1 > num2 && num1 > num3){
   console.log('num1' + " e igual a " + num1 + " maior que " + num2 + " e " + num3);
   //console.log(num1 + " e maior que " + num2 + " e " + num3);
}else if (num2 > num1 && num2 > num3){
    console.log('num2' + " e igual a " + num2 + " maior que " + num1 + " e " + num3);
}else{
    console.log('num3' + " e igual a " + num3 + " ele e o numero maior");
}