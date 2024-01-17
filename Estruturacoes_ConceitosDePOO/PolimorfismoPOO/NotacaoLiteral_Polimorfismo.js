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



//Exemplo 1: 


// Objeto base
const formaGeometricaBase = {
    calcularArea: function() {
      throw new Error("Método calcularArea não implementado");
    }
  };
  
  // Objeto Círculo
  const circulo = {
    raio: 5,
    // Implementação específica de calcularArea para Círculo
    calcularArea: function() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  };
  
  // Objeto Quadrado
  const quadrado = {
    lado: 4,
    // Implementação específica de calcularArea para Quadrado
    calcularArea: function() {
      return Math.pow(this.lado, 2);
    }
  };
  
  // Chamando o método calcularArea em objetos diferentes
  console.log("Área do Círculo:", circulo.calcularArea());
  console.log("Área do Quadrado:", quadrado.calcularArea());


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: 

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