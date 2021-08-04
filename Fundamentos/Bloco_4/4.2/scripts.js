/* 
1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* 1 */
console.log (numbers);

/* 2 */
let somaValores = 0;
for(let contador = 0; contador < numbers.length; contador++) {
    somaValores += numbers[contador]
}
console.log(somaValores);

/* 3 */
let somaValor = 0
for(let contador = 0; contador < numbers.length; contador++) {
    somaValor += numbers[contador]
}
let media = somaValor / numbers.length
console.log(media)

/* 4 */
let soma = 0
for(let contador = 0; contador < numbers.length; contador++) {
    soma += numbers[contador]
}
let mediaAri = soma / numbers.length
if (mediaAri > 20){
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

/* 5 */
let maior = 0;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maior){
        maior = numbers[index]
    }
}
console.log(maior);

/* 6 */
let impar = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ==0){
       impar++}
}if (impar > 0){
    console.log(impar)
} else {
    console.log("Nenhum valor ímpar encontrado")
}


/* 7 */
let menor = numbers[0];
for(let cont = 0; cont < numbers.length; cont++) {
    if(numbers[cont]< menor){
        menor = numbers[cont]
    }
}
console.log(menor)


/* 8 */
