/* MÉTODOS UTEIS - PRÉ-DEFINIDOS*/

/*
Métodos de Manipulação de Propriedades.
Esses métodos estão relacionados à adição, remoção ou alteração de propriedades em objetos.
*/


/*"Atribuir"*/
/*
Object.assign(objDestino, obj1, obj2, ...)
Copia propriedades de objetos de origem para um objeto de destino.
Semântica: Copia as propriedades dos objetos de origem para o objeto de destino.
*/

const destino = {};
const origem1 = { a: 1, b: 2 };
const origem2 = { b: 3, c: 4 };

Object.assign(destino, origem1, origem2);

console.log(destino); // { a: 1, b: 3, c: 4 }



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.assign")

/*"Criar"*/
/*
Object.create(proto, propriedades)
Criar um novo objeto com um protótipo e propriedades adicionais opcionais.
Semântica: Cria um novo objeto com um protótipo especificado (proto) e propriedades opcionais (propriedades).
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
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.create")

/*"DefinirPropriedade"*/
/*
Object.defineProperty(objeto, propriedade, descritor)
Define uma nova propriedade com configurações específicas em um objeto.
Semântica: Define uma nova propriedade no objeto com um nome específico e configurações específicas definidas no descritor.
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
/*
Object.defineProperties(objeto, descritores)
Definir várias propriedades em um objeto com configurações específicas.
Semântica: Define várias propriedades no objeto com base nos descritores fornecidos.
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
/*
Object.preventExtensions(objeto)
Impedir a adição de novas propriedades a um objeto existente. No entanto, ainda é possível modificar as propriedades existentes.
Semântica: Impede a adição de novas propriedades a um objeto, mas permite a modificação das propriedades existentes.
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
/*
Object.seal(objeto)
Impedir a adição e remoção de propriedades, mas permitir a modificação das propriedades existentes.
Semântica: Impede a adição e remoção de propriedades, mas permite a modificação das propriedades existentes.
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
/*
Object.freeze(objeto)
Impedir qualquer modificação nas propriedades de um objeto, tornando-o imutável.
Semântica: Impede qualquer modificação nas propriedades de um objeto, tornando-o imutável.
*/

const dados = { altura: 180, peso: 75 };
Object.freeze(dados);

delete dados.altura; // Isso não funcionará
console.log(dados.altura)
dados.peso = 80; // Isso não funcionará
console.log(dados.peso)



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------------------------.freeze")