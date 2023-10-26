/*COMPOSIÇÃO*/

/*
A composição promove a reutilização de código e ajuda a evitar os problemas associados à herança, 
como o acoplamento rígido e a hierarquia de classes complexa.
*/

class Motor {
    ligar() {
      console.log("Motor ligado.");
    }
  
    desligar() {
      console.log("Motor desligado.");
    }
}
  
class Carro {
    constructor() {
      this.motor = new Motor();
    }
  
    dirigir() {
      this.motor.ligar();
      console.log("Carro em movimento.");
    }
  
    parar() {
      console.log("Carro parado.");
      this.motor.desligar();
    }
}
  
const meuCarro = new Carro();
meuCarro.dirigir();
meuCarro.parar();
  

/*
A composição é uma técnica poderosa em POO que ajuda a criar código modular, 
flexível e de fácil manutenção, e é frequentemente preferida sobre a herança quando se trata de projetar sistemas complexos.
*/

/*
Aqui estão alguns pontos-chave sobre composição:

Objetos Componentes:
Na composição, você define objetos que contêm outros objetos como seus componentes. 
Esses objetos componentes geralmente são instâncias de outras classes ou objetos que fornecem funcionalidades específicas.

Flexibilidade:
A composição é mais flexível do que a herança, 
pois você pode escolher quais objetos componentes incluir em um objeto composto. 
Isso permite que você construa objetos complexos com base nas necessidades do seu sistema, 
sem ficar restrito a uma hierarquia de classes fixa.

Reutilização de Código: 
A composição promove a reutilização de código, 
uma vez que você pode usar objetos componentes em várias partes do seu sistema, 
independentemente do objeto composto. Isso leva a um código mais modular e fácil de manter.

Desacoplamento: 
A composição ajuda a evitar o acoplamento rígido, 
um problema comum na herança. Quando você herda de uma classe, 
qualquer alteração na classe pai pode afetar todas as classes filhas. 
Com a composição, as alterações nos objetos componentes geralmente têm um impacto limitado.
 */