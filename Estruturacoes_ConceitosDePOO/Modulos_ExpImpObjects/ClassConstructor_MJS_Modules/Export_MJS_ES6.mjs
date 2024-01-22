/*MODULOS - EXPORTANDO OBJETOS*/

/*
Em programação orientada a objetos (POO) em JavaScript, 
a ideia de módulos refere-se à capacidade de organizar e encapsular código em unidades independentes e reutilizáveis. 
Isso é particularmente útil para gerenciar a complexidade de grandes projetos, 
promover a reutilização do código e facilitar a manutenção.
*/

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
