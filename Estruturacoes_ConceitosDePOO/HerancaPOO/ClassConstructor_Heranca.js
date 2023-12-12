/*CRIANDO OBJETOS COM CLASSES CONSTRUTORAS E HERANÇAS */

/*
Herança:
Herança permite que uma classe herde propriedades e métodos de outra. 
Em JavaScript, a herança é prototípica, onde os objetos herdam de outros objetos. 
A introdução das classes no ES6 proporcionou uma sintaxe mais familiar para implementar a herança, 
mas o mecanismo subjacente permanece baseado em protótipos.

As classes oferecem uma sintaxe mais clara para definir herança. 
Você pode estender outras classes usando a palavra-chave extends e 
usar o método super() para chamar o construtor da classe pai.
*/


/*Herança com Classe construtora*/

/*EXEMPLOS*/

//Exemplo 1: Herança Simples em Classes


// Classe base
class Animal {
    fazerBarulho() {
      console.log('Barulho genérico do animal');
    }
  }
  
  // Classe derivada (herda de Animal)
  class Cachorro extends Animal {
    latir() {
      console.log('Au au!');
    }
  }
  
  // Classe derivada (herda de Animal)
  class Gato extends Animal {
    miar() {
      console.log('Miau!');
    }
  }
  
  
  const meuCachorro = new Cachorro(); // Intanciando classe filha Cachorro
  meuCachorro.fazerBarulho(); // Chama o método da classe Animal (PAI/BASE) - Output: Barulho genérico do animal
  meuCachorro.latir(); // Chama o método específico da classe Cachorro - Output: Au au!
  
  const meuGato = new Gato(); //Instanciando classe filha Gato
  meuGato.fazerBarulho(); // Chama o método da classe Animal (PAI/BASE) - Output: Barulho genérico do animal
  meuGato.miar(); // Chama o método específico da classe Gato - Output: Miau!

  const meuPet = new Animal(); // Instanciando classe PAI Animal
  meuPet.fazerBarulho(); // Chama o metodo especifico da classe PAI Animal - Output: Barulho genérico do animal

/*
Note que não há necessidade de criar uma função nova (.fazerBarulho()) para cada classe, 
assim economizando espaço na memória e reutilizando o código da classe pai dentro das classes filhas.
*/

/*
OBS:
Ao herdar de uma classe pai em JavaScript, 
os métodos definidos na classe pai são geralmente acessíveis na classe filha através da instância da classe filha. 
No entanto, as propriedades não são herdadas da mesma maneira. 
As propriedades são normalmente definidas no construtor da classe e 
não são acessíveis diretamente na instância da classe filha.
*/
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Herdando propriedades da classe pai.

// Definindo a classe PAI Celular
class Celular{
  constructor(marca, categoria){
    this.marca = marca;
    this.categoria = categoria;
  }
}

// Definindo a classe derivada FILHA, que herda de Celular
class Galaxy extends Celular {
  constructor(marca, categoria, modelo){
    super(marca, categoria); // Chama o construtor da classe PAI Celular
    this.modelo=modelo 
  }
}

// Criando uma instância da classe FILHA
const Smart = new Galaxy("Samsung", "Linha S", "Galaxy S")
console.log(`Marca: ${Smart.marca}, Categoria: ${Smart.categoria}, Modelo: ${Smart.modelo}`)
//Output: Marca: Samsung, Categoria: Linha S, Modelo: Galaxy S

// Criando uma instância da classe PAI
const Cell = new Celular("Qualquer marca", "Qualquer Categoria")
console.log(`Marca: ${Cell.marca}, Categoria: ${Cell.categoria}`)
//Output: Marca: Qualquer marca, Categoria: Qualquer Categoria



/*
OBS:
Se a classe pai possui parâmetros no construtor, 
esses parâmetros devem ser passados antes de qualquer outro parâmetro no construtor da classe filha, 
tanto no construtor quanto na chamada super(...). 

Essa ordem é crucial para estabelecer uma herança adequada e garantir que o contexto this seja inicializado corretamente.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Herdando metodo da classe pai.


// Classe BASE/PAI
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Classe derivada (FILHA)
class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade); // Chama o construtor da classe PAI
    this.curso = curso;
  }

  apresentarEstudante() {
    super.apresentar(); // Chama o método da classe PAI
    console.log(`Estou cursando ${this.curso}.`);
  }
}

// Criando a instância da classe FILHA
const estudante1 = new Estudante('Ana', 20, 'Engenharia');
estudante1.apresentarEstudante(); // Chama o método da classe Estudante, que agora também exibe o curso
/*
Output:
Olá, meu nome é Ana e tenho 20 anos.
Estou cursando Engenharia.
*/


/*
OBS:
Para invocar o método da classe pai dentro da classe filha, 
é necessário utilizar a palavra-chave super antes do nome do método.
Além disso, não é possível chamar o método da classe pai, super.metodo, diretamente dentro da classe filha. 
O uso de super.metodo ocorre geralmente dentro de funções na classe filha,
possibilitando que a chamada seja feita de forma indireta. 
Essa abordagem evita problemas associados à herança e ao contexto de execução.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")


//Exemplo 4: Completão herdando propriedades e metodos da classe pai e outras funcionalidades.


class Carro{ //Classe PAI / BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
    
}

class Militar extends Carro { //Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.cor=("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }

}

class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}

const c1=new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

const c2= new Militar("Lutador",1,100,50)
c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

const c3= new Utilitario("Pickup",5,7)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("--------------------------------------C1")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("--------------------------------------C2")

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${(c3.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log(`Lugares: ${c3.lugares}`)
console.log("--------------------------------------C3")


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")