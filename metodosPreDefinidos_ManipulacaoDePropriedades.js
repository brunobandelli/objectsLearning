/* MÉTODOS UTEIS - PRÉ-DEFINIDOS*/

/*
Métodos de Manipulação de Propriedades.
Esses métodos estão relacionados à adição, remoção ou alteração de propriedades em objetos.
*/


//Exemplo 1: Object.assign(objDestino, obj1, obj2, ...)
//Copia propriedades de objetos de origem para um objeto de destino.
/*
Semântica: Copia as propriedades dos objetos de origem para o objeto de destino.
*/

const destino = {};
const origem1 = { a: 1, b: 2 };
const origem2 = { b: 3, c: 4 };

Object.assign(destino, origem1, origem2);

console.log(destino); // { a: 1, b: 3, c: 4 }



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Object.create(proto, propriedades)
//Criar um novo objeto com um protótipo e propriedades adicionais opcionais.
/*
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
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Object.defineProperty(objeto, propriedade, descritor)
//Define uma nova propriedade com configurações específicas em um objeto.
/*
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