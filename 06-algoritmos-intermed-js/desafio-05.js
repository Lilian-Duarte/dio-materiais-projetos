var s = '[o amor da minha vida (vc)]';
let valid = '';
const regExp = [/\[/, /\]/, /\(/,/\)/,/\{/,/\}/];

function IsValid(){
    if((s.search(regExp[0])!=-1 & s.search(regExp[1])!=-1) || (s.search(regExp[0])==-1 & s.search(regExp[1])==-1)){
            valid = 'true';
        } else { 
            return 'false'};
    if ((s.search(regExp[2])!=-1 & s.search(regExp[3])!=-1) || (s.search(regExp[2])==-1 & s.search(regExp[3])==-1)){
            valid = 'true';
        } else { 
            return 'false'};
    if ((s.search(regExp[4])!=-1 & s.search(regExp[5])!=-1) || (s.search(regExp[4])==-1 & s.search(regExp[5])==-1)){
            valid = 'true';
        } else {
            return 'false';
        };
return valid;
};
  
console.log(IsValid(s, valid, regExp))
