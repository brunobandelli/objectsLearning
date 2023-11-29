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

/*Herança com Função Construtora*/

/*
Em JavaScript, você pode simular herança  por meio de funções construtoras e protótipos, 
também chamada de herança prototípica. No entanto, é importante notar que, apesar dessa abordagem ser válida, 
o uso de heranças com classes tornou-se mais convencional e alinhado com as práticas modernas de programação em JavaScript.
*/



//Exemplo 5: Herança com função construtora SEM Prototype

// Função construtora para a classe Pai
function Pai(nome) {
  this.nome = nome;

  // Método da classe Pai
  this.apresentar = function() {
    console.log("Meu nome é " + this.nome);
  };
}

// Função construtora FILHO
function Filho(nome, idade) {
  
  Pai.call(this, nome); // Chamando o construtor da classe Pai com o contexto adequado
  
  this.idade = idade; // Propriedades específicas da classe Filho

  // Método específico da classe Filho
  this.dizerIdade = function() {
    console.log("Minha idade é " + this.idade + " anos");
  };
}

// Criando as instâncias
const pai = new Pai("Pai");
const filho = new Filho("Filho", 10);

// Usando os métodos das instâncias
pai.apresentar(); // Saída: Meu nome é Pai
filho.apresentar(); // Saída: Meu nome é Filho
filho.dizerIdade(); // Saída: Minha idade é 10 anos


/*
OBS:
***Pai.call(this, nome):
A expressão Pai.call(this, nome) é uma forma de chamar o construtor da classe Pai na função construtora da classe Filho. 
Vamos quebrar essa expressão para entender cada parte:

Pai: Refere-se à função construtora da classe Pai.

.call(this, nome): O método call é usado para chamar uma função em um determinado contexto, 
substituindo o valor de this na função chamada.

this: Refere-se ao contexto no qual a função Pai será executada. Neste caso, 
queremos que this se refira à instância da classe Filho que está sendo criada.

nome: É o argumento que será passado para o construtor da classe Pai.

Então, Pai.call(this, nome) está efetivamente chamando o construtor da classe Pai, 
mas garantindo que ele seja executado no contexto da instância da classe Filho (this se refere à instância de Filho). 

Isso é necessário porque, quando você herda de uma classe para outra em JavaScript, 
o construtor da classe pai não é chamado automaticamente, então você precisa fazer isso explicitamente.

*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Herança com função construtora COM Prototype

// Função construtora para a classe Pai
function PaiCP(nome) {
  this.nome = nome;
}

// Adicionando um método à classe Pai usando prototype
PaiCP.prototype.apresentar = function() {
  console.log("Meu nome é " + this.nome + ", Idade: " + this.idade);
};

// Função construtora para a classe Filho, que herda de Pai
function FilhoCP(nome, idade) {
  PaiCP.call(this, nome); // Chamando o construtor da classe Pai com o contexto adequado
  this.idade = idade;
}

// Herdar os métodos do protótipo da classe Pai
FilhoCP.prototype = Object.create(PaiCP.prototype);

// Criando instâncias da classe Filho
const filho1 = new FilhoCP("Filho1", 5);
const filho2 = new FilhoCP("Filho2", 8);

// Usando os métodos das instâncias
filho1.apresentar(); // Saída: Meu nome é Filho1, Idade: 5
filho2.apresentar(); // Saída: Meu nome é Filho2, Idade: 8

//Verificando se a herança está funcionando corretamente, se true, essas instâncias podem ser tratadas como instâncias da classe pai.
console.log(filho1 instanceof PaiCP); // true
console.log(filho2 instanceof PaiCP); // true


/*
OBS:
Quando você adiciona métodos ao prototype da função construtora (Pai.prototype.apresentar),
esses métodos são compartilhados entre todas as instâncias criadas a partir dessa função construtora.
Isso significa que todas as instâncias compartilham a mesma referência para esses métodos no protótipo. 
As instâncias têm acesso ao método, mas não têm uma cópia própria do método em sua própria estrutura de objeto.


***Filho.prototype = Object.create(Pai.prototype)
Essa linha de código Filho.prototype = Object.create(Pai.prototype); 
é essencial para estabelecer a herança correta entre a classe Pai e a classe Filho.

Vamos entender cada parte dela:

*Pai.prototype: 
Refere-se ao protótipo da classe Pai. 
O protótipo é um objeto especial em JavaScript que contém propriedades e 
métodos que são compartilhados por todas as instâncias criadas a partir daquela função construtora.

*Object.create(Pai.prototype): 
Cria um novo objeto com o protótipo fornecido. 
Neste caso, estamos criando um novo objeto que tem o protótipo de Pai, ou seja, 
compartilha as propriedades e métodos do protótipo de Pai.

*Filho.prototype = ...: 
Isso está atribuindo o objeto criado com o protótipo de Pai ao protótipo da classe Filho. 
Isso é fundamental para estabelecer a cadeia de protótipos e permitir que instâncias de Filho herdem os métodos e 
propriedades definidos no protótipo de Pai.

Ao fazer isso, qualquer método ou propriedade que seja adicionado ao 
protótipo de Pai será automaticamente herdado pelas instâncias de Filho. 
Isso é uma forma de implementar herança em JavaScript, 
permitindo que as classes filhas herdem o comportamento das classes pai.



IMPORTANTE:
DIFERENÇAS PRINCIPAIS ENTRE USAR OU NÃO PROTOTYPE EM HERANÇAS FEITAS COM FUNÇÕES CONSTRUTORAS.

*Método apresentar na Função Construtora Pai:
No primeiro código(EXEMPLO 6), o método apresentar é adicionado diretamente à função construtora Pai.
No segundo código(EXEMPLO 5), o método apresentar é adicionado ao protótipo da classe Pai usando Pai.prototype.apresentar.

*Herança de Métodos (Isso vale para propriedades também):
Em ambos os casos, o método apresentar está disponível para as instâncias da classe Filho. 
No entanto, no primeiro código, cada instância da classe Filho terá sua própria cópia do método apresentar.
Ambos os códigos fazem a herança do método apresentar, 
mas o segundo é geralmente preferido por ser mais eficiente em termos de memória, 
já que o método é compartilhado entre todas as instâncias através do protótipo.

*/





/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")