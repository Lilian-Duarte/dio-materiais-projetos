const a = 5;
const n = 40;
var soma = 0;
for (let i=1; i<=n; i++){
  var resto = (i%a);
  if (resto === 0){
    soma = soma + i;
  };
};
console.log(soma);