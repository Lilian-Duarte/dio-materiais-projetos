let lines = '\n4\n3\n2\n1'.split("\n"); 
let n = 4;

const dp = new Array(n + 1).fill(n); 
dp[0] = 0; 
console.log(dp);