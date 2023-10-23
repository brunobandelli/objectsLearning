````Javascript
OBJETOS:
Em JavaScript, os objetos são fundamentais para organizar e manipular dados de forma eficiente. Eles são uma estrutura de dados chave-valor, onde os valores podem ser de qualquer tipo, incluindo números, strings, funções e até mesmo outros objetos.

São estruturas de dados fundamentais que permitem armazenar e organizar informações de forma eficiente. Eles são essenciais para a programação orientada a objetos em JavaScript e são amplamente utilizados para representar entidades, conceitos ou entidades do mundo real.

Particularidades dos Objetos em JavaScript:

Estrutura de Dados Chave-Valor.: Os objetos são uma coleção não ordenada de pares chave-valor.

Flexibilidade.: As chaves (propriedades) dos objetos podem ser strings ou símbolos, tornando-os bastante flexíveis.

Dinamismo.: É possível adicionar e remover propriedades de um objeto dinamicamente.

/*-------------------------------------------------------------------------------------------------------------------*/

Criando Objetos.:
Há várias maneiras de criar objetos em JavaScript.:

a)Notação Literal
b)Construtor Object
c)Classes (ES6)
d)Função Construtora
e)Factory Function
f)Método Object.create()


a) Notação Literal.:

const pessoa = {
  nome: 'João',
  idade: 30
};

//USANDO METODO
const pessoaComMetodo = {
  nome: 'Carla',
  idade: 27,
  saudacao: function() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
};


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


d) Função Construtora.:

function PessoaConstrutora(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoaFuncaoConstrutora = new PessoaConstrutora('Pedro', 35);

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
Object.assign(objDestino, obj1, obj2, ...)
Object.create(proto, propriedades)
Object.defineProperty(objeto, propriedade, descritor)
Object.defineProperties(objeto, descritores)
Object.preventExtensions(objeto)
Object.seal(objeto)
Object.freeze(objeto)

*Métodos de Introspecção.:
Esses métodos ajudam a obter informações sobre propriedades de um objeto.
Exemplos:
Object.keys(objeto)
Object.values(objeto)
Object.entries(objeto)
Object.getOwnPropertyNames(objeto)
Object.getOwnPropertySymbols(objeto)
Object.getOwnPropertyDescriptor(objeto, propriedade)




````