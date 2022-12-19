let liness = '\n4\n3\n2\n1'.split("\n"); 
let lines = liness.map((x)=>+x);
console.log(typeof lines);
let n = parseInt(lines.shift()); 
let operators = ['*','/','+','-'];
let i = 0;
console.log(i);
while (i>=0){

    var op = (lines[i])*(lines[i+1])/(lines[i+2])+(lines[i+3]);
    if ((lines.length-1)%4===0){
        var r = (lines.length-1)/4;
        op = op - (lines[i])*(lines[i+1])/(lines[i+2])+(lines[i+3]);
        i = i+3;
    }
}
console.log(parseInt(op,10));


// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
/*Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando 
as operações de multiplicação por uma rotação fixa de operações cuja ordem é: 

multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 

Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. 
Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de 
operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por 
exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.*/