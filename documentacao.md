````Javascript
OBJETOS:
Em JavaScript, os objetos são fundamentais para organizar e manipular dados de forma eficiente. Eles são uma estrutura de dados chave-valor, onde os valores podem ser de qualquer tipo, incluindo números, strings, funções e até mesmo outros objetos.

São essenciais para a programação orientada a objetos em JavaScript e são amplamente utilizados para representar entidades, conceitos ou entidades do mundo real.

Particularidades dos Objetos em JavaScript:

Estrutura de Dados Chave-Valor.: Os objetos são uma coleção não ordenada de pares chave-valor.

Flexibilidade.: As chaves (propriedades) dos objetos podem ser strings ou símbolos, tornando-os bastante flexíveis.

Dinamismo.: É possível adicionar e remover propriedades de um objeto dinamicamente.

/*-------------------------------------------------------------------------------------------------------------------*/

Criando Objetos.:
Há várias maneiras de criar objetos em JavaScript.:

a)Notação Literal     //Um dos mais usados tambem.
b)Construtor Object
c)Classes (ES6)       //Método mais usado e mais eficaz. 
d)Função Construtora  //Um dos mais usados tambem.
e)Factory Function
f)Método Object.create()

/*Demonstração simples de cada modelo de construção*/

a) Notação Literal.:

const pessoa = {
  nome: 'Carla',
  idade: 27,
  saudacao: function() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
};

/*VER MAIS SOBRE: notacaoLiteral_criandoObjetos.js */

b) Usando o Construtor Object.:

const pessoa = new Object();
pessoa.nome = 'João';
pessoa.idade = 30;

c) Classes (ES6).:

class PessoaClasse {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
}

const pessoaClasse = new PessoaClasse('Rodrigo', 22);

/*VER MAIS SOBRE: ClassConstructor_criandoObjetos.js */

d) Função Construtora.:

function PessoaConstrutora(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoaFuncaoConstrutora = new PessoaConstrutora('Pedro', 35);

/*VER MAIS SOBRE: FunctionConstructor_criandoObjetos.js */


e) Factory Function.:

function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
}

const pessoaFactory = criarPessoa('Laura', 40);


f) Método Object.create().:

const pessoaPrototype = {
  saudacao: function() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
};

const pessoaObjectCreate = Object.create(pessoaPrototype);
pessoaObjectCreate.nome = 'Daniel';
pessoaObjectCreate.idade = 28;


/*---------------------------------------------------------------------------------------------------------------------*/

Acessando Propriedades.:

As propriedades dos objetos podem ser acessadas usando a notação de ponto ou colchetes.:

// Acesso usando ponto
console.log(pessoa.nome);  

// Acesso usando colchetes
console.log(pessoa['idade']);  

/*---------------------------------------------------------------------------------------------------------------------*/

Adicionando e Removendo Propriedades.:

// Adicionando uma propriedade
pessoa.profissao = 'Desenvolvedor';  

// Removendo uma propriedade
delete pessoa.idade;  

/*---------------------------------------------------------------------------------------------------------------------*/

Métodos.:

Os objetos podem conter funções, chamadas de métodos, que podem ser chamadas para executar ações relacionadas ao objeto. Veja um exemplo.:

const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao: function() {
    return 'Olá, meu nome é ' + this.nome + ' e eu tenho ' + this.idade + ' anos.';
  }
};

console.log(pessoa.saudacao());

/*-----------------------------------------------------------------------------------------------------------------------*/

Métodos Uteis pré-definidos.:

*Métodos de Manipulação de Propriedades.:
Esses métodos estão relacionados à adição, remoção ou alteração de propriedades em objetos.
Exemplos:
Object.assign(objDestino, obj1, obj2, ...) "Atribuir" //Copiar propriedades de objetos de origem para um objeto de destino.
Object.create(proto, propriedades) "Criar" //Criar um novo objeto com um protótipo e propriedades adicionais opcionais.
Object.defineProperty(objeto, propriedade, descritor) "DefinirPropriedade" //Definir uma nova propriedade em um objeto com configurações específicas.
Object.defineProperties(objeto, descritores) "DefinirPropriedades" // Definir várias propriedades em um objeto com configurações específicas.
Object.preventExtensions(objeto) "PrevenirExtensões" //Impedir a adição de novas propriedades a um objeto existente.       No entanto, ainda é possível modificar as propriedades existentes.
Object.seal(objeto) "Selar" //Impedir a adição e remoção de propriedades, mas permitir a modificação das propriedades existentes.
Object.freeze(objeto) "Congelar" //Impedir qualquer modificação nas propriedades de um objeto, tornando-o imutável.
/*OS EXEMPLOS ESTÃO NO ARQUIVO: metodosPreDefinidos_ManipulacaoDePropriedades.js*/
Extra:
Para Encapsulamentos.: Getters e Setters. "Obter e Definir" //Geralmente são utilizados em encapsulamento para obter ou definir propriedades que são privadas. VER UTILIZAÇÃO NO ARQUIVO: EncapsulamentoPOO.js.


*Métodos de Introspecção.:
Esses métodos ajudam a obter informações sobre propriedades de um objeto.
Exemplos:
Object.keys(objeto) "Chaves do Objeto" //Retorna um array das chaves (nomes das propriedades) de um objeto.
Object.values(objeto) "Valores do Objeto" // Retorna um array dos valores das propriedades de um objeto.
Object.entries(objeto) "Entradas do Objeto" // Retorna um array de pares chave-valor das propriedades de um objeto.
Object.getOwnPropertyNames(objeto) "Obter Nomes de Propriedade do Objeto" // Retorna um array com os nomes das propriedades próprias do objeto (não inclui propriedades herdadas).
Object.getOwnPropertySymbols(objeto) "Obter Símbolos de Propriedade do Objeto" // Retorna um array com os símbolos das propriedades próprias do objeto (não inclui propriedades de texto).
Object.getOwnPropertyDescriptor(objeto, propriedade) "Obter Descritor de Propriedade do Objeto" // Retorna um objeto com informações sobre a propriedade, como se ela é gravável, enumerável e configurável.
/*OS EXEMPLOS ESTÃO NO ARQUIVO: metodosPreDefinidos_IntrospeccaoDePropriedades.js*/




````