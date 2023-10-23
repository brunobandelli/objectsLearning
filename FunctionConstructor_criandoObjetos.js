/*CRIANDO OBJETOS COM FUNÇÃO CONSTRUTORA */

/*
Sintaxe:
As funções construtoras usam uma função regular para definir o construtor do objeto.
Utilizando função construtora você precisa usar a palavra-chave this para atribuir propriedades e métodos ao objeto.
Além disso, você altera a estrutura, retirando o class, metodo constructor.

Herança:
Para criar herança, você precisa adicionar métodos e propriedades ao protótipo da função construtora. 
A herança é feita manualmente, adicionando propriedades e métodos ao protótipo.
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

//Exemplo 2: 


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