/* Operadores Aritiméticos 
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. 
Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

let a = 10;
let b = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplicação = a * b;
let divisão = a / b;
let módulo = (a % b)

console.log(adicao)
console.log(subtracao)
console.log(multiplicação)
console.log(divisão)
console.log(módulo)

/*  Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.*/

let valor1 = 10;
let valor2 = 15;

if (valor1 > valor2) {
    console.log(valor1)
} else if ( valor2 > valor1){
    console.log(valor2)
} else {
    console.log ("Os dois valores são iguais")
}

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let num1 = 10;
let num2 = 20;
let num3 = 25;

if (num1 > num2, num1 > num3) {
    console.log(num1)
} else if (num2 > num1, num2 > num3) {
    console.log(num2)
} else if (num3 > num1, num3 > num2) {
    console.log(num3)
} else if (num1 = num2 > num3){
    console.log("Os valores 1 e 2 são os maiores e iguais")
} else if (num1 = num3 > num2) {
    console.log("Os valores 1 e 3 são os maiores e iguais")
} else if (num2 = num3 > num1) {
    console.log("Os valores 2 e 3 são os maiores e iguais")
}

/*  Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

let x = -4;

if (x > 0){
    console.log("positive")
} else if (x<0) {
    console.log("negative")
} else {
    console.log("zero")
}

/*  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

let lado1 = 45;
let lado2 = 90;
let lado3 = 90;

if (lado1 + lado2 + lado3 != 180){
    console.log("Error!!!")
} else if (lado1 == 0) {
    console.log("Error!!!")
} else if (lado2 == 0) {
    console.log("Error!!!")
} else if (lado3 == 0) {
    console.log("Error!!!")
} else if (lado1 + lado2 + lado3 == 180){
    console.log("True")
}