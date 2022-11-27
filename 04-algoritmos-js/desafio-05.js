let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = 75;
for (i=0; i<=elementos.length; i++){
    if (valor === elementos[i]){
        console.log(`Achei ${valor} na posicao ${i}`);
        break;
    } else if (i===9) {
        console.log(`Numero ${valor} nao encontrado!`);
    };
};