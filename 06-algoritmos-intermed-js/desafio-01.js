let lines = '\n4\n3\n2\n1'.split("\n"); 
let n = parseInt(lines.shift()); 
let operators = ['*','/','+','-'];
const elements = ['2',*, '3',-, '1'];
const resultado = elements.join('');
console.log(resultado);



 console.log(n); 




console.log(lines)

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
/*Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando 
as operações de multiplicação por uma rotação fixa de operações cuja ordem é: 

multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 

Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. 
Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de 
operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por 
exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.*/