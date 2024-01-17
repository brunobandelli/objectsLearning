/*Abstração com Function Constructor*/

//Exemplo 1: Abstração com Function Construction com metodo e propriedade obrigatório.

function AnimalF(name) {
    //Abstraindo a classe
    if (this.constructor === AnimalF) {
      throw new Error("Não pode instanciar uma clase abstrada");
    }
  
    this.name = name;
  
    //Tornando a propriedade obrigatória a implementação na classe derivada
    if(this.name === undefined){ //Verificando se o método foi implementada na classe derivada.
      throw new Error("É obrigatório implementar a propriedade 'name'.");
    }
  
    //Tornando o método obrigatório a implementação na classe derivada
    this.makeSound = function () { //Verificando se a propriedade foi implementada na classe derivada.
      throw new Error("Método 'makeSound' deve ser implementado na classe derivada");
    };
  
    //Método comum
    this.comando = function(){ //Não precisa implementar esse metodo na classe derivada.
      console.log("Sentar!")
    }
  
  }
  
  function Dog(breed, name) {
    AnimalF.call(this, name);
    this.breed = breed;
  
    this.makeSound = function () {
      return `O ${this.breed} chamado ${name} fez Woof! e sentou.`;
    };
  }
  
  // Tentativa de criar uma instância da classe Animal resultará em um erro
  // const animalF = new AnimalF("Generic Animal"); // Erro: Não pode instanciar uma clase abstrada.
  
  // Tentativa de instanciar a classe derivada sem fornecer a propriedade 'name' resultará em um erro
  // const dog = new Dog("Golden Retriever"); // Erro: É obrigatório implementar a propriedade 'name'.
  
  // Tentativa de chamar o método 'makeSound' sem implementar na classe derivada resultará em um erro
  // console.log(dog.makeSound()); // Erro: Método 'makeSound' deve ser implementado na classe derivada.
  
  // Criar uma instância da classe derivada Dog 
  const dog = new Dog( "Golden Retriever", "Buddy");
  dog.comando(); // Output: Sentar!
  console.log(dog.makeSound()); // Output: O Golden Retriever chamado Buddy fez Woof!

  
console.log("----------------------------------------------------------------------------------------------------------1")
/*------------------------------------------------------------------------------------------------------------------------*/