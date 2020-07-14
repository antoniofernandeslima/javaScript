let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


var total = 0;
var mediaArit = 0;
for (var index = 0; index < numbers.length; index++){  
    total = total + numbers[index];
    mediaArit = total / numbers.length
    }
console.log(mediaArit);

