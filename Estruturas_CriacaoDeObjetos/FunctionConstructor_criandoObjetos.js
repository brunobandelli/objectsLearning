/*CRIANDO OBJETOS COM FUNÇÃO CONSTRUTORA */

/*
Uma função construtora em JavaScript é uma função regular que é usada para criar objetos. 
A principal diferença entre uma função construtora e uma função regular é que você a invoca usando o operador new. 
Quando você usa new com uma função, ela se torna uma função construtora e retorna um novo objeto.
Utilizando função construtora você precisa usar a palavra-chave this para atribuir propriedades e métodos ao objeto.
Além disso, você altera a estrutura, retirando o class, metodo constructor.
*/

/*
Sintaxe básica:

// Definição da função construtora
function NomeDaFuncao(parametro1, parametro2) {
  // Propriedades do objeto são definidas usando 'this'
  this.propriedade1 = parametro1;
  this.propriedade2 = parametro2;

  // Métodos da função construtora
  this.metodo1 = function() {
    // Código do método
  };

  this.metodo2 = function() {
    // Código do método
  };
}

// Instanciando a função construtora
const minhaInstancia = new NomeDaFuncao("Valor 1", "Valor 2");


DEFINIÇÃO DA SINTAXE:

*function NomeDaFuncao(parametro1, parametro2): Define uma nova função construtora com o nome especificado e 
recebe parâmetros que podem ser usados para inicializar as propriedades do objeto criado pela função construtora.

*this.: Dentro da função construtora, as propriedades e métodos do objeto são definidos usando a palavra-chave "this." 
e são referenciados nas instâncias criadas pela função construtora.


*Métodos da função construtora: São definidos dentro da função construtora e é recomendado posicioná-los após a definição das propriedades, 
mas não há uma restrição estrita quanto à ordem.
São funções que podem ser chamadas em instâncias da função construtora para realizar ações ou operações específicas.

*Instância: Use a palavra-chave "new" seguida pelo nome da função construtora para criar uma instância. 
Você pode passar os valores desejados como argumentos para o construtor.

*/

//Exemplo 1: Criando objetos com função construtora e parametros

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.cumprimentar = function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new Pessoa("Bruno", 29);
  const pessoa2 = new Pessoa("Bandelli", 19);
  
  pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
  pessoa2.cumprimentar(); // Saída: Olá, meu nome é Maria e tenho 25 anos.
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Utilizando Prototype para adicionar propriedades e metodos.

/*
A propriedade prototype é usada para adicionar propriedades e 
métodos que podem ser compartilhados por todas as instâncias criadas a partir dessa função construtora.
*/

const Nave=function(energia){
  this.energia=energia
  this.disparos=3
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

/*OBSERVE OS 2 COMENTARIOS ACIMA:
Observe que ao usar console.log em n1, os novos membros criados pelo prototype não serão exibidos diretamente na instância. 
Isso ocorre porque esses membros estão associados ao prototype da classe(Nave) em geral, não a instâncias individuais. 
Para visualizá-los, é necessário acessá-los através do prototype da classe, como em Nave.prototype. 
*/

/*
A propriedade prototype permite compartilhar métodos entre todas as instâncias criadas a partir da mesma função construtora. 
É uma maneira eficiente de evitar a duplicação de métodos em cada instância e economizar espaço na memória.

Portanto, o prototype é uma propriedade especial que pertence à função construtora e não a uma instância específica. 
Ela permite que você defina métodos que estão disponíveis para todas as instâncias criadas a partir dessa função.

RESUMINDO:
Os métodos e propriedades criados usando a propriedade prototype pertencem à função construtora, 
não a instâncias específicas. Eles são compartilhados por todas as instâncias criadas a partir dessa função construtora, 
o que os torna acessíveis a todas as instâncias, mas eles ainda pertencem à classe em geral.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: 

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: 

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: 

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: 


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")