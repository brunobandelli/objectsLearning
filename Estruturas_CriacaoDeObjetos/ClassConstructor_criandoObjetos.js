/*CRIANDO OBJETOS COM CLASSES CONSTRUTORAS */

/*
As classes construtoras são usadas para criar objetos com propriedades e métodos.
Foram introduzidas no ECMAScript 6 (ES6) e fornecem uma sintaxe mais orientada a objetos. 
A sintaxe é mais declarativa e semelhante a outras linguagens de programação orientada a objetos.

Sintaxe básica:

class NomeDaClasse {
  // Método especial chamado construtor para inicializar o objeto
  constructor(parametro1, parametro2) {
    this.propriedade1 = parametro1;
    this.propriedade2 = parametro2;
  }

  // Métodos da classe
  metodo1() {
    // Código do método
  }

  metodo2() {
    // Código do método
  }
}

// Instanciando a classe
const minhaInstancia = new NomeDaClasse("Valor 1", "Valor 2");


DEFINIÇÃO DA SINTAXE:
*class NomeDaClasse: define uma nova classe com o nome especificado.

*Constructor: É o método especial usado para inicializar um objeto quando é criado a partir da classe. 
Ele recebe os parâmetros que podem ser usados para definir as propriedades do objeto.

*this.: Dentro do constructor as propriedades do objeto são definidas usando a palavra-chave "this." e chamadas nos métodos
da classe da mesma maneira.

*Métodos da classe: são definidos após o constructor. 
Eles são funções que podem ser chamadas em instâncias da classe para realizar ações ou operações específicas.

*Instância: Use o operador "new" seguido pelo nome da classe para criar uma instância da classe. 
Você pode passar os valores desejados como argumentos para o construtor. 

------------------------------------------------------------------------------------------------------------------------

REITERANDO:
Em JavaScript, uma classe em si não é um objeto, mas um modelo ou um plano para criar objetos. 
Uma classe é uma descrição da estrutura e do comportamento que os objetos criados a partir dela terão. 
Para criar um objeto real com base nessa classe, você precisa instanciá-la usando a palavra-chave new. 
A instância é o objeto concreto que segue o modelo definido pela classe.

Portanto, uma classe define como os objetos que serão criados a partir dela devem se parecer e 
quais propriedades e métodos eles terão. 
A criação de uma instância com new é o momento em que um objeto real é criado com base nessa definição de classe.

ANALOGIA:
class: É o Modelo, Como a planta da casa que descreve a estrutura da casa, onde os quartos estarão, as dimensões, etc.
constructor: Como as especificações de construção que definem os detalhes, como a cor das paredes, o tipo de piso, os móveis, etc.
Instância (objeto): A casa real construída com base na planta e nas especificações.

-----------------------------------------------------------------------------------------------------------------------------
*/

/*EXEMPLOS:*/

//Exemplo 1: Criando objetos com classes construtoras e parametros

// A palavra-chave 'class' é usada para definir uma classe chamada 'Pessoa'
class Pessoa{                       
    // O constructor é um método especial que inicializa as propriedades da instância.
    // Neste caso, 'nome' é uma propriedade da instância da classe Pessoa.
    constructor(pnome){                    
        this.nome=pnome                  //Inicializa as propriedade
    }
}
 
// Criando uma instância (objeto) da classe 'Pessoa' com o nome 'Bruno'.
let p1= new Pessoa("Bruno")                 // Instanciando a classe com um nome específico.
let p2= new Pessoa("Bandelli")
let p3= new Pessoa("Vieira")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Criando dois objetos usando classe construtora,com parametros e metodo.

class Individuo {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

    setIndividuo(nome,idade){
        this.nome=nome
        this.idade=idade
    }


  }
  
  // Criando as instâncias da classe Individuo
  const Individuo1 = new Individuo("Alcione", 27);
  const Individuo2 = new Individuo("Bruno", 29);
  
  // Usando o método da classe
  Individuo1.saudacao(); // Saída: Olá, meu nome é Alcione e eu tenho 27 anos.
  Individuo2.saudacao(); // Saída: Olá, meu nome é Bruno e eu tenho 29 anos.
  Individuo2.setIndividuo("Bandelli",19); //Modificando os valores das propriedades da intancia Individuo2.
  Individuo2.saudacao(); // Saída: Olá, meu nome é Bruno e eu tenho 29 anos.

  
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")


//Exemplo 3: Criando objetos usando classes construtoras, parametros e metodos para obter e setar informações.

class Carro {
    constructor(pnome, ptipo){
        this.nome=pnome
        // this.canal="Instagram"
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }
        else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }
        else {
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTIpo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }
    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max.: ${this.velmax}`)
        console.log("--------------------------------")
    }
}

let c1= new Carro("Rapidão",1)
let c2= new Carro("Super Luxo",2)
let c3= new Carro("bombadão",4)
let c4= new Carro("Carrego tudo",3)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
c1.info()
c2.info()
c3.info()
console.log("--------------------------")
/*-----------------------------------------------------*/
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelMax())
console.log("--------------------------")
/*----------------------------------------------------*/
console.log(c1.getInfo())
console.log(c1.getInfo()[0])
console.log("--------------------------")
/*----------------------------------------------------*/
c1.setNome("Super Veloz")
c1.setTIpo("Luxo Esportivo Premium")
c1.setVelMax(500)
c1.info()

/*---------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")


// Exemplo 4: Propriedades definidas fora do construtor

/*
NA VARIAVEL FORA DO CONSTRUCTOR, CADA INSTÂNCIA DA CLASSE TERÁ UMA CÓPIA DESSA VARIAVEL, MAS O VALOR DELA
NÃO SERA COMPARTILHADA ENTRE AS INSTÂNCIAS. OU SEJA CADA INSTANCIA PODE TER SEU PRÓPRIO VALOR PARA A VARIÁVEL.
*/

class PessoaP {
    // Propriedades definidas fora do construtor
    nome= "nome?";
    idade= "idade?";
  
    constructor() {
        this.Individuo="Individuo"
    }
  
    cumprimentar() {
      console.log(`Olá ${this.Individuo}, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

    setIndividuo(Individuo){
        this.Individuo=Individuo
    }
}
  

/*
Cada instância da classe PessoaP terá uma cópia da propriedade nome e idade, mas ela não será compartilhada entre as instâncias. 
Ou seja, cada pessoa pode ter seu próprio valor nome e idade.
*/

const pessoa1 = new PessoaP();
pessoa1.cumprimentar() //Output: Olá Individuo, meu nome é nome? e eu tenho idade? anos.
  
pessoa1.nome="Bruno"
pessoa1.idade=29
pessoa1.cumprimentar() //Output: Olá Individuo, meu nome é Bruno e eu tenho 29 anos.
console.log("-------------------------")


const pessoa2 = new PessoaP();
pessoa2.cumprimentar() //Output: Olá Individuo, meu nome é nome? e eu tenho idade? anos.


pessoa2.nome="Bandelli"
pessoa2.idade=19
pessoa2.cumprimentar() //Output: Olá Individuo, meu nome é Bandelli e eu tenho 19 anos.
console.log("-------------------------")

pessoa2.setIndividuo("Pessoa")
pessoa2.cumprimentar() //Output: Olá Pessoa, meu nome é Bandelli e eu tenho 19 anos.

  
/*
Utilidade: Cada instância da classe pode ter seu próprio valor para a variável.
Quando usar:
*Quando você deseja que cada objeto da classe tenha uma cópia independente da variável.
*Quando diferentes instâncias precisam armazenar informações diferentes na mesma variável.
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Utilizando membros Static.

/*
Os membros estáticos pertencem à classe em si e não a instâncias específicas da classe.
Perceba que a invocar-lo você não chama a instância e sim a classe.
*/

class Npc{
    static alerta=false
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log("------------------------------------")
    }
    static alertar=function(){
        Npc.alerta=true
    }
}

const npc1= new Npc(100)
const npc2= new Npc(80)
const npc3= new Npc(30)

Npc.alertar() // Altera o valor da pripriedade para true, e deixa todos os NPC em alerta.

npc1.info() // Energia: 100 Alerta: Sim
npc2.info() // Energia: 80 Alerta: Sim
npc3.info() // Energia: 30 Alerta: Sim

/*
Os membros estáticos, sejam eles métodos ou propriedades, 
pertencem à classe como um todo, em oposição às instâncias específicas da classe. 
Eles são compartilhados entre todas as instâncias da classe e são chamados diretamente na classe, 
não em instâncias individuais.
*/

/*
Utilidade: A variável é compartilhada por todas as instâncias da classe, ou seja, 
todas as instâncias têm o mesmo valor para a variável.
Quando usar:
*Quando você deseja que todas as instâncias compartilhem o mesmo valor para a variável.
*Quando a variável representa uma propriedade ou configuração que deve ser consistente em todas as instâncias.
*Quando você deseja economizar memória, uma vez que apenas uma cópia da variável é compartilhada por todas as instâncias.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Utilizando Prototype para adicionar propriedades e metodos.

/*
A propriedade prototype é usada para adicionar propriedades e 
métodos que podem ser compartilhados por todas as instâncias criadas a partir dessa função construtora.
*/

class Nave {
    constructor(energia) {
      this.energia = energia;
      this.disparos = 3;
    }
}
  
const n1= new Nave(100)
  
Nave.prototype.vidas=3
Nave.prototype.disparar=function(){
    if(this.disparos > 0){
      this.disparos--
    }
}
  
n1.disparar()
n1.disparar()
n1.disparar()
  
console.log(Nave)
console.log(Nave.prototype) //OBSERVE
console.log(n1) //OBSERVE
console.log(n1.vidas)
console.log(n1.disparos)
  
/*OBSERVE OS 2 COMENTARIOS ACIMA (//OBSERVE):
  Observe que ao usar console.log em n1, os novos membros criados pelo prototype não serão exibidos diretamente na instância. 
  Isso ocorre porque esses membros estão associados ao prototype da classe(Nave) em geral, não as instâncias individuais. 
  Para visualizá-los, é necessário acessá-los através do prototype da classe, como em Nave.prototype. 
*/
  

/*
 Utilidade: A propriedade prototype é usada em funções construtoras para definir métodos e 
 propriedades compartilhados por todas as instâncias criadas a partir da função construtora.
 Quando usar:
 *Quando você deseja compartilhar métodos ou propriedades comuns entre todas as instâncias da mesma função construtora.
 *Quando você deseja economizar memória, pois os métodos e propriedades compartilhados não são duplicados para cada instância.
 *Para criar herança entre funções construtoras, permitindo que as instâncias herdem métodos e propriedades do prototype de 
 outras funções construtoras.

 Em resumo, os métodos e propriedades criados usando a propriedade prototype pertencem à função construtora, 
 não a instâncias específicas. Eles são compartilhados por todas as instâncias criadas a partir dessa função construtora, 
 promovendo a reutilização de código, economizando memória e facilitando a implementação de herança em JavaScript.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")
