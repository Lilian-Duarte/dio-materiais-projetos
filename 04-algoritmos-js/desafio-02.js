let resultado = 27;
console.log(fizzBuzz(resultado));
function fizzBuzz(resultado){
    var resto3 = resultado%3;
    var resto5 = resultado%5;
      if (resto3 === 0 && resto5 === 0){
        return 'FizzBuzz';
      } else if (resto3 === 0){
        return 'Fizz';
      } else if (resto5 === 0){
        return 'Buzz';
      } else { 
        return resultado;
      };
    };
    