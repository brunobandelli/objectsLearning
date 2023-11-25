/*MODULOS - EXPORTANDO OBJETOS*/

/*
VERSÃO ES6
Em versões mais recentes do Node.js (a partir da versão 13 e posteriores), os módulos ES6 são suportados por padrão. 
*/

// Pessoa.js
export default class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
/*
VERSÃO ANTES DO ES6
Se você estiver trabalhando no ambiente Node.js ou em qualquer outro ambiente que use o sistema de módulos CommonJS, 
você pode importar módulos usando o require. Aqui está como você pode fazer isso:
OBS:mudar a extensão para .js
*/

// // Pessoa.js
// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   saudacao() {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   }
// }

// module.exports = Pessoa; // Exporta a classe Pessoa
