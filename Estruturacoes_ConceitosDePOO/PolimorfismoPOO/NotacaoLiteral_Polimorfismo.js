/*POLIMORFISMO COM NOTAÇÃO LITERAL*/

/* 
O Polimorfismo em JS pode ser alcançado através da manipulação dinâmica de objetos, sobrescrita de métodos e funções,
permitindo que objetos de diferentes classes respondam ao mesmo método ou propriedade de maneira única. 
*/

/*
O polimorfismo com notação literal em JavaScript é semelhante ao polimorfismo com class constructors, 
pois ambos se baseiam no mecanismo de prototipagem da linguagem ou seja, não é necessario manipular 'prototype' de maneira explicita
como em function constructor. 
Tanto objetos criados com notação literal quanto objetos criados com class constructors podem compartilhar métodos através de
protótipos, permitindo que diferentes instâncias respondam ao mesmo método, mas com implementações específicas.
*/



//Exemplo 1: Polimorfismo simples com notação literal.

// Objeto base
const Veiculo = {
    fazerBarulho: function() {
      throw new Error("Método fazerBarulho não implementado");
    }
  };
  
  // Objeto Carro
  const Carro = {
    //Sobrescrevendo o método fazerBarulho
    fazerBarulho: function() {
      return "Vrum vrum!";
    }
  };
  
  // Objeto Bicicleta
  const Bicicleta = {
    //Sobrescrevendo o método fazerBarulho
    fazerBarulho: function() {
      return "Ring ring!";
    }
  };
    
  // Chamando o método fazerBarulho em objetos diferentes
  console.log("Barulho do Carro:", Carro.fazerBarulho()); //Output: Barulho do Carro: Vrum vrum!
  console.log("Barulho da Bicicleta:", Bicicleta.fazerBarulho()); //Output: Barulho da Bicicleta: Ring ring!


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Animal em falar. Polimorfismo simples com notação literal.

// Objeto base
const Animal = {
    falar: function() {
      return "Som genérico de animal";
    }
  };
  
  // Objeto Cachorro, sobrescrevendo o método falar
  const Cachorro = {
    falar: function() {
      return "Au au!";
    }
  };
  
  // Objeto Gato, sobrescrevendo o método falar
  const Gato = {
    falar: function() {
      return "Miau!";
    }
  };
  
  // Objeto Pássaro, sobrescrevendo o método falar
  const Passaro = {
    falar: function() {
      return "Piu piu!";
    }
  };
  
  // Chamando o método falar em objetos diferentes
  console.log("Som do Cachorro:", Cachorro.falar());
  console.log("Som do Gato:", Gato.falar());
  console.log("Som do Pássaro:", Passaro.falar());
  
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Personagem em atacar. Polimorfismo simples com notação literal.

// Objeto base
const Personagem = {
    atacar: function() {
      return "Ataque genérico";
    }
  };
  
  // Objeto Guerreiro, sobrescrevendo o método atacar
  const Guerreiro = {
    atacar: function() {
      return "Golpe de espada!";
    }
  };
  
  // Objeto Mago, sobrescrevendo o método atacar
  const Mago = {
    atacar: function() {
      return "Bola de fogo!";
    }
  };
  
  // Objeto Arqueiro, sobrescrevendo o método atacar
  const Arqueiro = {
    atacar: function() {
      return "Disparo de flechas!";
    }
  };
  
  // Chamando o método atacar em personagens diferentes
  console.log("Ataque do Guerreiro:", Guerreiro.atacar());
  console.log("Ataque do Mago:", Mago.atacar());
  console.log("Ataque do Arqueiro:", Arqueiro.atacar());
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

