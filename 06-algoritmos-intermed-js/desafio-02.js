let resultado = 'radar';
console.log(checaPalindromo(resultado));

function checaPalindromo(entrada){
    const word = Array.from(entrada);
    const reversedWord = word.reverse();
    if (entrada === reversedWord.join('')){
        return 'TRUE';
    } else { 
        return 'FALSE';
    };
}