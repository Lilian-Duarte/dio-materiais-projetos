let arr = '64385'.split('');
let arrPar = [];
let arrImpar = [];
for (let i=0; i<arr.length; i++){
    if (arr[i]%2 === 0){
        arrPar.push(arr[i]);
    } else {
        arrImpar.push(arr[i]);
    };
}
arrPar = arrPar.reverse()
const arrFinal = arrPar.concat(arrImpar);

console.log(arrFinal)
/* Essa solução é mais clean:

let arr = gets().split('');
let arrVazio = [];

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
     arrVazio.unshift(arr[i])
    } else {
     arrVazio.push(arr[i])
    }
}
print(arrVazio);*/