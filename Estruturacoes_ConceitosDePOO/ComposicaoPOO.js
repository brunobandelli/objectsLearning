/*COMPOSIÇÃO*/

/*
A composição promove a reutilização de código e ajuda a evitar os problemas associados à herança, 
como o acoplamento rígido e a hierarquia de classes complexa.

A composição em programação é como construir algo maior (uma aplicação) combinando diferentes "blocos" (classes),
como se fosse legos, graças a sua aborgadem modular.



ANALOGIA:
Construindo uma Casa com LEGO

Imagine que você está construindo uma casa usando blocos de LEGO. Cada bloco de LEGO é como uma classe em programação.

Blocos Individuais (Classes):
Cada bloco de LEGO tem uma função específica. Por exemplo, há blocos que representam janelas, portas, telhados, etc. 
Cada um desses blocos é como uma classe individual em programação.

Composição (Combinando Blocos):
Agora, para construir uma casa completa, você começa a combinar diferentes blocos de LEGO. 
Por exemplo, você pega blocos de janelas, portas e telhados e os une para criar a estrutura da casa. 
Isso é semelhante à composição em programação.

Reutilização (Usando os Mesmos Blocos em Outras Construções):
Os mesmos blocos de janelas, portas e telhados podem ser usados em diferentes construções de casas. 
Da mesma forma, em programação, você pode reutilizar classes em diferentes partes do seu código.

Atualizações e Modificações (Troca de Blocos):
Se quiser mudar o design da casa, você pode facilmente trocar um bloco por outro sem precisar reconstruir toda a casa.
Da mesma forma, em programação, você pode modificar ou 
adicionar novas classes sem afetar drasticamente o restante do seu código.

Encapsulamento (Cada Bloco Tem sua Função):
Cada bloco de LEGO tem uma função bem definida, 
e você não precisa saber os detalhes internos de como cada bloco foi fabricado. 
Isso é semelhante ao encapsulamento em programação, onde uma classe pode ter sua própria implementação interna,
mas fornece uma interface externa clara.


Assim, a composição em programação é como construir algo maior (uma aplicação) combinando diferentes "blocos" (classes), 
da mesma forma que você construiria uma casa combinando diferentes blocos de LEGO. Isso torna o código modular, 
reutilizável e fácil de atualizar, assim como a construção com LEGO permite flexibilidade na criação de diferentes estruturas.
*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*Exemplos:*/


// Classe Radio
class Radio {
  constructor(frequencia){
    this.frequencia=frequencia
  }

  ligar() {
    console.log("Rádio ligado na " + this.frequencia);
  }

  desligar() {
    console.log("Rádio desligado");
  }
}

// Definindo a classe Motor
class Motor {
  constructor(tipo) {
    this.tipo = tipo;
  }

  ligar() {
    console.log(`Motor ${this.tipo} ligado`);
  }

  desligar() {
    console.log(`Motor ${this.tipo} desligado`);
  }
}

// Atualização da classe Carro para incluir um rádio
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = new Motor("V8"); // Composição: Carro possui um Motor
    this.radio = new Radio("FM");     // Composição: Carro possui um Rádio
  }

  ligarCarro() {
    console.log(`${this.marca} ${this.modelo} ligado.`);
    this.motor.ligar(); // Delegando a responsabilidade de ligar ao Motor
    this.radio.ligar(); // Delegando a responsabilidade de ligar ao Rádio
  }

  desligarCarro() {
    console.log(`${this.marca} ${this.modelo} desligado.`);
    this.motor.desligar(); // Delegando a responsabilidade de desligar ao Motor
    this.radio.desligar(); // Delegando a responsabilidade de desligar ao Rádio
  }
}

// Exemplo de uso
const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.ligarCarro();
meuCarro.desligarCarro();



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