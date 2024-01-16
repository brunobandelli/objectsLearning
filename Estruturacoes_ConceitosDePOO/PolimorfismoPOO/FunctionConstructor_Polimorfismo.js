/*POLIMORFISMO COM FUNCTION CONSTRUCTOR*/

/* 
O Polimorfismo em JS pode ser alcançado através da manipulação dinâmica de objetos, sobrescrita de métodos e funções,
permitindo que objetos de diferentes classes respondam ao mesmo método ou propriedade de maneira única. 
*/

/*
O polimorfismo em JavaScript pode ser implementado de várias maneiras, 
e uma delas é usando function constructors (ou construtores de função) 
e geralmente com juntamente com protótipos para otimização de memória. 
*/

//Exemplo 1: Polimorfismo simples com function constructor.

// // Definindo um construtor de veículo
// function Veiculo(fabricante, modelo) {
//     this.fabricante = fabricante;
//     this.modelo = modelo;
    
//     // Método diretamente no objeto (sem prototype)
//     this.exibirInformacoes = function () {
//       return `Fabricante: ${this.fabricante}, Modelo: ${this.modelo}`;
//     };
//   }
  
//   // Definindo um construtor de carro
//   function Carro(fabricante, modelo, ano) {

//     // Chamando o construtor do Veiculo
//     Veiculo.call(this, fabricante, modelo);
    
//     this.ano = ano;
    
//     // Sobrescrevendo o método exibirInformacoes para Carro
//     this.exibirInformacoes = function () {
//       return `${this.fabricante} ${this.modelo}, Ano: ${this.ano}`;
//     };
//   }
  
//   // Criando instâncias de Veiculo e Carro
//   const veiculoGenerico = new Veiculo('Genérico', 'Veículo');
//   const meuCarro = new Carro('Toyota', 'Camry', 2022);
  
//   // Exibindo informações usando o polimorfismo
//   console.log(veiculoGenerico.exibirInformacoes()); // Fabricante: Genérico, Modelo: Veículo
//   console.log(meuCarro.exibirInformacoes());         // Toyota Camry, Ano: 2022
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Polimorfismo com Prototype.

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    throw new Error("Método speak não implementado");
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }

  
  
  Dog.prototype = Object.create(Animal.prototype);
  
  
  Dog.prototype.speak = function() {
    return "Au au!";
  };
  
  Dog.prototype.fareja = function(){
    console.log("Farejando")
  }

  function Cat(name) {
    Animal.call(this, name);
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  
  Cat.prototype.speak = function() {
    return "Miau!";
  };

 
  
  const dog = new Dog("Rex");
  const cat = new Cat("Mia");
  
  console.log(dog.speak()); // "Au au!"
  console.log(cat.speak()); // "Miau!"
  console.log(Dog.prototype)
  console.log(Object.getOwnPropertyNames(Dog.prototype));
  console.table(Dog.prototype)


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
