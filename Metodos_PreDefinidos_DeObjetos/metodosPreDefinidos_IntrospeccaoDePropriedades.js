/* MÉTODOS UTEIS - PRÉ-DEFINIDOS*/

/*
Métodos de Introspecção.
Esses métodos ajudam a obter informações sobre propriedades de um objeto.
*/

/*VEJA OS EXEMPLOS*/

/*"Chaves do Objeto"*/
//Retorna um array das chaves (nomes das propriedades) de um objeto.
/*
Semântica: 

Object.keys(objeto)
*/

const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Programador"
};
  
const chaves = Object.keys(pessoa);
console.log(chaves); // ["nome", "idade", "profissao"]
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("--------------------------------------------------------------------------------------------------------.keys")

/*"Valores do Objeto" */
//Retorna um array dos valores das propriedades de um objeto.
/*
Semântica: 

Object.values(objeto)
*/

const carro = {
    marca: "Toyota",
    modelo: "Camry",
    ano: 2022
};
  
const valores = Object.values(carro);
console.log(valores); // ["Toyota", "Camry", 2022]
  



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.values")

/*"Entradas do Objeto"*/
//Retorna um array de pares chave-valor das propriedades de um objeto.
/*
Semântica: 

Object.entries(objeto)
*/

const fruta = {
    nome: "Maçã",
    cor: "Vermelha",
    sabor: "Doce"
};
  
const entradas = Object.entries(fruta);
console.log(entradas); // [["nome", "Maçã"], ["cor", "Vermelha"], ["sabor", "Doce"]]
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------.entries")

/*"Obter Nomes de Propriedade do Objeto" */
//Retorna um array com os nomes das propriedades próprias do objeto (não inclui propriedades herdadas).
/*
Semântica: 

Object.getOwnPropertyNames(objeto)
*/

function Animal(nome) {
    this.nome = nome;
}
  
Animal.prototype.tipo = "Desconhecido";
  
const gato = new Animal("Whiskers");
  
const propriedades = Object.getOwnPropertyNames(gato);
console.log(propriedades); // ["nome"]
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------.getOwnPropertyNames")

/*"Obter Símbolos de Propriedade do Objeto" */
//Retorna um array com os símbolos das propriedades próprias do objeto (não inclui propriedades de texto e propriedades herdadas).
/*
Semântica: 

Object.getOwnPropertySymbols(objeto)
*/

const simbolo1 = Symbol("descricao");
const simbolo2 = Symbol("outra Descricao");

const objeto = {
  [simbolo1]: "Valor 1",
  [simbolo2]: "Valor 2"
};

const simbolos = Object.getOwnPropertySymbols(objeto);
console.log(simbolos); // [Symbol(descricao), Symbol(outraDescricao)]

//Outro Exemplo:

const chaveTexto = "minhaChaveTexto";
const chaveSimbolo = Symbol("minhaChaveSimbolo");

const objetoS = {
  [chaveTexto]: "Esta é uma propriedade de texto",
  [chaveSimbolo]: "Esta é uma propriedade de símbolo"
};

const propriedadesS = Object.getOwnPropertySymbols(objetoS);

console.log(propriedadesS); // [Symbol(minhaChaveSimbolo)]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("---------------------------------------------------------------------------------------.getOwnPropertySymbols")

/*"Obter Descritor de Propriedade do Objeto" */
//Retorna um objeto com informações sobre a propriedade, como se ela é gravável, enumerável e configurável.
/*
Semântica: 

Object.getOwnPropertyDescriptor(objeto, propriedade)
*/

const pessoaDescriptor = {
    nome: "Maria",
    idade: 25
  };
  
  const descritor = Object.getOwnPropertyDescriptor(pessoaDescriptor, "nome");
  console.log(descritor);
  /*
  {
    value: "Maria",
    writable: true,
    enumerable: true,
    configurable: true
  }
  */
  



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------.getOwnPropertyDescriptor")