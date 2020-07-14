let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
for (var index = 0; index < numbers.length; index++){
    if (numbers[index] > maior){
        maior = numbers[index];

    }
}
 console.log(maior);

 