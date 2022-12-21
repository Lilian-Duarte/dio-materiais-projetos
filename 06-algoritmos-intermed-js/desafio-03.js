// desafio dos quadrados perfeitos
let lines = '10,9,8,7,6,5,4,3,2,1'.split(","); 
let n = 10;

const dp = lines.map((x)=>+x);
for (let i=0;i<dp.length;i++){
    if(!Number.isInteger(Math.sqrt(dp[i]))){
       dp.splice(i,1);
       i--;
    }
}
dp.push(0);
for (let i=1;i<dp.length;i++){
    var r = dp[0]+dp[i];
    var d = n/r;
    if(n%r===0){

    }
}




console.log(dp);