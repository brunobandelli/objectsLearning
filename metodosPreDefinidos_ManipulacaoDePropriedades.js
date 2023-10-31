/* MÉTODOS UTEIS - PRÉ-DEFINIDOS*/

/*
Métodos de Manipulação de Propriedades.
Esses métodos estão relacionados à adição, remoção ou alteração de propriedades em objetos.
*/

/*VEJA OS EXEMPLOS*/

/*"Atribuir"*/
//Copia propriedades de objetos de origem para um objeto de destino.
/*
Semântica: 

Object.assign(objDestino, obj1, obj2, ...)

objDestino: O primeiro objeto é o objeto de destino, para o qual as propriedades dos objetos de origem serão copiadas.
obj1, obj2, ...: Os objetos subsequentes são as origens dos quais as propriedades serão copiadas para o objeto de destino.
*/

const destino = {};
const origem1 = { a: 1, b: 2 };
const origem2 = { b: 3, c: 4 };

Object.assign(destino, origem1, origem2);

console.log(destino); // { a: 1, b: 3, c: 4 }



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.assign")

/*"Criar"*/
//Criar um novo objeto com um protótipo e propriedades adicionais opcionais.
/*
Semântica: 

Object.create(proto, propriedades)

Cria um novo objeto com um protótipo especificado (proto) e propriedades opcionais (propriedades).
proto: O objeto que servirá como protótipo do novo objeto criado.
propriedades: Um objeto que define as propriedades adicionais a serem incluídas no novo objeto.
*/

const animal = {
    som: "indefinido"
  };
  
  const gato = Object.create(animal, {
    som: {
      value: "Miado"
    }
});
  
console.log(gato.som); // "Miado"

/*
Sendo:
Object.create(animal, { som: { value: "Miado" } });: Aqui, o primeiro objeto animal é o protótipo do novo objeto gato. 
O segundo argumento, { som: { value: "Miado" } }, são as propriedades adicionais que são definidas diretamente no objeto gato.
Portanto, o animal é o protótipo (objeto de destino) e o { som: { value: "Miado" } } é o objeto de origem que adiciona propriedades ao gato.
*/
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.create")

/*"DefinirPropriedade"*/
//Define uma nova propriedade com configurações específicas em um objeto.
/*
Semântica: 

Object.defineProperty(objeto, propriedade, descritor)

objeto: O objeto no qual uma nova propriedade será definida.
propriedade: O nome da nova propriedade a ser definida no objeto.
descritor: Um objeto que contém configurações específicas para a nova propriedade, como seu valor, se é gravável, enumerável e configurável.
*/

const produto = {};

Object.defineProperty(produto, 'nome', {
  value: "Camiseta",
  writable: false
});

console.log(produto.nome); // "Camiseta"
produto.nome = "Calça"; // Isso não terá efeito devido à propriedade não ser gravável


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("----------------------------------------------------------------------------------------------.defineProperty")

/*"DefinirPropriedades"*/
//Definir várias propriedades em um objeto com configurações específicas.
/*
Semântica: 

Object.defineProperties(objeto, descritores)

objeto: O objeto no qual as novas propriedades serão definidas.
descritores: Um objeto que contém definições de várias propriedades a serem adicionadas ao objeto.
*/

const livro = {};

Object.defineProperties(livro, {
  título: { value: "Aventuras de Sherlock Holmes", writable: true },
  autor: { value: "Arthur Conan Doyle", writable: true }
});

console.log(livro.título); // "Aventuras de Sherlock Holmes"
console.log(livro.autor); // "Arthur Conan Doyle"


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("--------------------------------------------------------------------------------------------.defineProperties")

/*"PrevenirExtensões"*/
//Impedir a adição de novas propriedades a um objeto existente. 
//No entanto, ainda é possível modificar as propriedades existentes.
/*
Semântica: 

Object.preventExtensions(objeto)

objeto: O objeto ao qual as extensões (adição de novas propriedades) estão sendo impedidas.
*/

const objeto = { a: 1, b: 2 };
Object.preventExtensions(objeto);

objeto.c = 3; // Isso não funcionará
console.log(objeto.c)
objeto.a = 42; // Isso funciona
console.log(objeto.a)



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------------.preventExtensions")

/*"Selar"*/
//Impedir a adição e remoção de propriedades, mas permitir a modificação das propriedades existentes.
/*
Semântica: 

Object.seal(objeto)

objeto: O objeto que está sendo "selado" para impedir adições e remoções de propriedades, 
mas ainda permitir modificações nas propriedades existentes.
*/

const pessoa = { nome: "Maria", idade: 30 };
Object.seal(pessoa);

delete pessoa.nome; // Isso não funcionará
console.log(pessoa.nome)
pessoa.endereco = "123 Rua Principal"; // Isso não funcionará
console.log(pessoa.endereco)
pessoa.idade = 35; // Isso funciona
console.log(pessoa.idade)



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("--------------------------------------------------------------------------------------------------------.seal")

/*"Congelar"*/
//Impedir qualquer modificação nas propriedades de um objeto, tornando-o imutável.
/*
Semântica: 

Object.freeze(objeto)

objeto: O objeto que está sendo "congelado" para impedir qualquer modificação em suas propriedades, tornando-o imutável.
*/

const dados = { altura: 180, peso: 75 };
Object.freeze(dados);

delete dados.altura; // Isso não funcionará
console.log(dados.altura)
dados.peso = 80; // Isso não funcionará
console.log(dados.peso)



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.freeze")