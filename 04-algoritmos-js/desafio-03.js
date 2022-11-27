let n = 7;
function somatorio(n) {
    let soma = 0
    if (n<=0){
        return 0;
    } else {
        return (soma = n + somatorio(n-1));
    }
};
console.log(somatorio(n));


    
