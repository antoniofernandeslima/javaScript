let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


var total = 0;
var mediaArit = 0;
for (var index = 0; index < numbers.length; index++){  
    total = total + numbers[index];
    mediaArit = total / numbers.length
    }

    if (mediaArit > 20){
        console.log("Valor maior que 20");
        console.log(mediaArit);
    } else {
        console.log("Valor menor ou igual a 20");
        console.log(mediaArit);
    }

