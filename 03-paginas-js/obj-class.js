/*--OBJETO--

Um objeto é uma coleção dinâmica de chave e valor. Exemplo

const pessoa = {
    nome 'Vitor';
    idade'25';
    descrever function (){
    console.log('Meu nome é ${this.nome} e minha idade é ${this.idade} ');
    };
*/


/*--CLASSE--

Classes são definições e uma instância é uma ocorrência de classe. Exemplo

class Pessoa = {
    nome;
    idade;
 descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade} '); // para declarar um método, não precisa colocar 'function';

    }
}

Dentro de uma classe, é interessante inserir o método 'construtor' - um método especial para criar e inicializar uma instância de objeto dessa classe. 
Ele permite fornecer qualquer inicialização personalizada que deve ser feita *antes* que qualquer outro método possa ser chamado em um objeto instanciado.
Exemplo*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    };
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, nasci em ${this.anoDeNascimento}`); //para declarar um método, não precisa colocar 'function'
    };
};

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha(o) que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velha(o) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    };
}
const lilian = new Pessoa('Lílian', 27);
const vitor = new Pessoa('Vitor', 30);

compararPessoas(lilian,vitor);