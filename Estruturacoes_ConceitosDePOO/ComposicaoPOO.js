/*COMPOSIÇÃO*/

/*
INTRODUÇÃO:
A composição promove a reutilização de código e ajuda a evitar os problemas associados à herança, 
como o acoplamento rígido e a hierarquia de classes complexa.
A composição é uma técnica poderosa em POO que ajuda a criar código modular, 
flexível e de fácil manutenção, e é frequentemente preferida sobre a herança quando se trata de projetar sistemas complexos.

SIMPLIFICANDO:

A composição em programação é como construir algo maior (uma aplicação) combinando diferentes "blocos" (classes),
como se fosse legos, graças a sua aborgadem modular.

------------------------------------------------------------------------------------------------------------------------

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

/*EXEMPLOS:*/

//Exemplo 1: "Compondo um carro".

// Definindo a classe Radio
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

// Compondo a classe Carro com as classes anteriores
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

// Criando uma instância da classe Carro e utilizando os métodos de composição.
const meuCarro = new Carro("Toyota", "Corolla");
//ligando o motor e o rádio
meuCarro.ligarCarro();
//desligando o motor e o rádio
meuCarro.desligarCarro();



/*
OBS:
Enquanto a herança estabelece uma relação "is-a"(é -um) entre classes, 
indicando que uma classe filha herda características da classe pai (por exemplo, Carro é um Veículo), 
a composição cria uma relação "has-a"(tem-um), 
onde uma classe contém instâncias de outras classes (por exemplo, Carro tem um Motor). 
A escolha entre herança e composição depende dos requisitos específicos do projeto e do design desejado.
*/



/*
PONTOS CHAVES SOBRE COMPOSIÇÃO:
Aqui estão alguns pontos-chave sobre composição.

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



/*
COPOSIÇÃO VS HERANÇA:
Herança e composição são duas abordagens diferentes na construção de relacionamentos entre classes em POO.
Aqui estão as principais diferenças entre elas:

Herança:
Relacionamento "É-UM" (is-a): Na herança, uma classe herda características de outra classe, 
indicando um relacionamento "é-um". Por exemplo, se temos uma classe Carro que herda de Veículo, 
estamos dizendo que um carro é um tipo específico de veículo.

Reutilização de Código: A herança permite reutilizar código de uma classe pai na classe filha.
A classe filha herda métodos e propriedades da classe pai.

Hierarquia de Classes: A herança cria uma hierarquia de classes, 
onde as classes filhas podem herdar de múltiplas classes, formando uma cadeia hierárquica.

Composição:
Relacionamento "Tem-um" (has-a): Na composição, uma classe é composta por instâncias de outras classes, 
indicando um relacionamento "tem-um". Por exemplo, se temos uma classe Carro que tem uma instância de Motor, 
estamos dizendo que um carro tem um motor.

Flexibilidade: A composição é mais flexível do que a herança. 
Pode-se alterar o comportamento de uma classe composta mais facilmente, adicionando ou removendo componentes.

Evita Problemas de Herança: Herança pode levar a problemas como a herança múltipla, 
onde uma classe herda de várias classes, tornando o código mais complexo e difícil de manter. 
Composição evita esses problemas.

Acoplamento Fraco: Composição muitas vezes resulta em acoplamento mais fraco entre as classes, 
pois uma classe não precisa conhecer os detalhes internos de outra classe, apenas interage com sua interface pública.

Escolha entre Herança e Composição:
Use Herança quando:

Existe uma clara relação "é-um" entre as classes.
Há uma necessidade real de reutilizar o código da classe pai.
A hierarquia de classes faz sentido no domínio do problema.
Use Composição quando:

A relação "tem-um" é mais apropriada.
É necessária uma maior flexibilidade.
Deseja-se evitar problemas associados à herança, como a herança múltipla.
Em muitos casos, uma combinação de herança e composição pode ser a abordagem mais eficaz, 
dependendo dos requisitos específicos do projeto. 
É importante entender as vantagens e desvantagens de cada abordagem para tomar decisões informadas durante 
o design do sistema.
*/