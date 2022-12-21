
let n = 11;
console.log(n)

function primeira(n){
    if (n>0 & n <= 2) { 
        return n;
       } 
    if (n === 1){
        return 1;
    }
    if(n<=0){
        return 0;
    }
    return parseInt(n*(n-1)/(n-2)) + (n-3) + segunda(n-4);
}
function segunda(n){
    if (n>0 & n <= 2) { 
        return -n;
       } 
    if (n === 1){
        return 1;
    }
    if(n<=0){
        return 0;
    }
    return parseInt(-n*(n-1)/(n-2)) + (n-3) + segunda(n-4);
}

console.log(primeira(n));


// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
/*Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando 
as operações de multiplicação por uma rotação fixa de operações cuja ordem é: 

multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 

Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. 
Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de 
operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por 
exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.*/