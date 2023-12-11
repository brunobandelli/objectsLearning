/*COMPOSIÇÃO*/
/*
---------------------------------------------------------INDICE--------------------------------------------------------------
*INTRODUÇÃO.
*ANALOGIA.
*EXEMPLO 01.
*PONTOS CHAVES SOBRE COMPOSIÇÃO.
*COPOSIÇÃO VS HERANÇA.
*COMPOSIÇÃO COM CLASS CONSTRUCTOR:
  •COM INSTANCIAMENTO DENTRO DA CLASSE.
  └EXEMPLOS 1 À 4 - COMPOSIÇÃO COM CLASSE DENTRO DE OUTRA.
  •SEM INSTANCIAR DENTRO DA CLASSE.
  └EXEMPLOS 5 À 8 - COMPOSIÇÃO SEM CLASSES DENTRO DE OUTRA.
  •COMPOSIÇÃO DINÂMICA.
  └EXEMPLOS 9 À 10 - COMPOSIÇÃO DINÂMICA.

*COMPOSIÇÃO COM FUNCTION CONSTRUCTOR:
  •COM INSTANCIAMENTO DENTRO DA CLASSE.
  └EXEMPLOS 11 À 12 - COMPOSIÇÃO COM CLASSE DENTRO DE OUTRA.
  •SEM INSTANCIAR DENTRO DA CLASSE.
  └EXEMPLOS 13 À 14 - COMPOSIÇÃO SEM CLASSES DENTRO DE OUTRA.
  •COMPOSIÇÃO DINÂMICA.
  └EXEMPLOS 15 À 16 - COMPOSIÇÃO DINÂMICA.

*COMPOSIÇÃO COM NOTAÇÃO LITERAL:
 -
 -
 -
*/

/*-------------------------------------------------------------------------------------------------------------------------*/
/*
-----------------------------------------------------------INTRODUÇÃO--------------------------------------------------------
A composição promove a reutilização de código e ajuda a evitar os problemas associados à herança, 
como o acoplamento rígido e a hierarquia de classes complexa.
A composição é uma técnica poderosa em POO que ajuda a criar código modular, 
flexível e de fácil manutenção, e é frequentemente preferida sobre a herança quando se trata de projetar sistemas complexos.

SIMPLIFICANDO:

A composição em programação é como construir algo maior (uma aplicação) combinando diferentes "blocos" (classes),
como se fosse legos, graças a sua aborgadem modular.

------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------ANALOGIA-------------------------------------------------------
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
/*-----------------------------------COMPOSIÇÃO COM CLASS CONSTRUCTOR------------------------------------------------------*/
console.log("-----------------------------------COMPOSIÇÃO COM CLASS CONSTRUCTOR------------------------------------------------------")
/*----------------------------------------------------EXEMPLOS-------------------------------------------------------------*/

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
meuCarro.ligarCarro(); //ligando o motor e o rádio
/*OUTPUT:
Toyota Corolla ligado.
Motor V8 ligado
Rádio ligado na FM
*/
meuCarro.desligarCarro(); //desligando o motor e o rádio
/*OUTPUT:
Toyota Corolla desligado.
Motor V8 desligado
Rádio desligado
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

/*
OBS:
Enquanto a herança estabelece uma relação "is-a"(é -um) entre classes, 
indicando que uma classe filha herda características da classe pai (por exemplo, Carro é um Veículo), 
a composição cria uma relação "has-a"(tem-um), 
onde uma classe contém instâncias de outras classes (por exemplo, Carro tem um Motor). 
A escolha entre herança e composição depende dos requisitos específicos do projeto e do design desejado.
*/



/*
-----------------------------------------PONTOS CHAVES SOBRE COMPOSIÇÃO---------------------------------------------------
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
------------------------------------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------COPOSIÇÃO VS HERANÇA--------------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------------------------
*/

/*
ALÉM DISSO, EXISTEM ALGUMAS OUTRAS MANEIRAS DE ALCANÇAR A COMPOSIÇÃO:
As três abordagens principais mencionadas são:

Instanciando uma classe dentro da outra: 
Isso é o que geralmente é associado à composição, onde uma classe contém uma instância de outra.

Sem instanciar uma classe dentro de outra: 
Isso pode ser feito passando instâncias de classes como parâmetros para métodos ou construtores, 
injetando dependências sem a necessidade de criar instâncias diretamente dentro de uma classe.

Composição dinâmica: 
Isso pode envolver a combinação de objetos em tempo de execução, seja por meio de funções, 
fábricas de objetos ou outras formas de criação dinâmica de composições.

VEJA MAIS EXEMPLOS ABAIXO:
EXEMPLOS 1 À 4 - COMPOSIÇÃO COM CLASSE DENTRO DE OUTRA.
EXEMPLOS 5 À 8 - COMPOSIÇÃO SEM CLASSES DENTRO DE OUTRA.
EXEMPLOS 9 À 10 - COMPOSIÇÃO DINÂMICA.
*/

//Exemplo 2: Composição de GUI (Interface Gráfica do Usuário)

// Classe Button
class Button {
  click() {
    console.log("Button clicked");
  }
}

// Classe TextBox
class TextBox {
  input(value) {
    console.log(`Entered value: ${value}`);
  }
}

// Classe Form que utiliza composição
class Form {
  constructor() {
    this.button = new Button();
    this.textBox = new TextBox();
  }

  submit() {
    this.button.click();
    this.textBox.input("User input");
    console.log("Form submitted");
  }
}

// Uso da composição
const myForm = new Form();
myForm.submit();
/*Output:
Button clicked
Entered value: User input
Form submitted
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Composição em um Jogo

// Classe Player
class Player {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} is attacking`);
  }
}

// Classe Weapon
class Weapon {
  use() {
    console.log("Weapon used");
  }
}

// Classe PlayerWithWeapon que utiliza composição
class PlayerWithWeapon {
  constructor(name) {
    this.player = new Player(name);
    this.weapon = new Weapon();
  }

  attackWithWeapon() {
    this.player.attack();
    this.weapon.use();
  }
}

// Uso da composição
const myPlayer = new PlayerWithWeapon("Hero");
myPlayer.attackWithWeapon();
/*Output:
Hero is attacking
Weapon used
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Composição em um Sistema de Pagamento

// Classe CreditCard
class CreditCard {
  constructor(number) {
    this.number = number;
  }

  makePayment(amount) {
    console.log(`Payment of $${amount} made with credit card ending in ${this.number}`);
  }
}

// Classe PayPal
class PayPal {
  constructor(email) {
    this.email = email;
  }

  makePayment(amount) {
    console.log(`Payment of $${amount} made with PayPal account ${this.email}`);
  }
}

// Classe PaymentProcessor que utiliza composição
class PaymentProcessor {
  constructor() {
    this.creditCard = new CreditCard("1234");
    this.payPal = new PayPal("user@example.com");
  }

  processCreditCardPayment(amount) {
    this.creditCard.makePayment(amount);
  }

  processPayPalPayment(amount) {
    this.payPal.makePayment(amount);
  }
}

// Uso da composição
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processCreditCardPayment(50);//Output: Payment of $50 made with credit card ending in 1234
paymentProcessor.processPayPalPayment(30);//Output: Payment of $30 made with PayPal account user@example.com

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

/*-----------------------COMPOSIÇÃO SEM INSTANCIAR UMA CLASSE DENTRO DE OTRA-----------------------------CLASS CONSTRUCTOR*/
console.log("------------------COMPOSIÇÃO SEM INSTANCIAR UMA CLASSE DENTRO DE OTRA----------------------CLASS CONSTRUCTOR")

//Exemplo 5: Composição sem instanciar diretamente uma classe dentro de outra.

/*
Uma maneira de realizar composição sem instanciar diretamente uma classe dentro de outra 
é passar instâncias de outras classes como argumentos para o construtor ou para métodos. 
Isso é frequentemente chamado de "injeção de dependência"
*/

class Motor2 {
  constructor(tipo) {
    this.tipo = tipo;
  }

  ligar() {
    console.log(`Motor ${this.tipo} ligado`);
  }
}

class Carro2 {
  constructor(motor) {
    this.motor = motor;
  }

  ligarCarro() {
    console.log('Carro ligado');
    this.motor.ligar();
  }
}

const motorV6 = new Motor2('V6');
const meuCarro2 = new Carro2(motorV6);
meuCarro2.ligarCarro();
/*Output:
Carro ligado
Motor V6 ligado
*/

/*
----------------------------"COMPOSIÇÃO INTERNA VS COMPOSIÇÃO EXTERNA"-------------------------------------------------------
*Composição Interna(Instanciar dentro da classe):
Vantagens:
Encapsulamento forte.
Pode ser mais intuitivo quando os objetos estão fortemente acoplados.

Desvantagens:
Menos flexibilidade se você quiser substituir componentes facilmente.
Pode aumentar o acoplamento entre as classes.


*Composição Externa(Instanciar fora da classe):
Vantagens:
Maior flexibilidade, especialmente quando há necessidade de variações ou diferentes implementações.
Melhor reusabilidade.

Desvantagens:
Pode resultar em maior complexidade, pois os objetos precisam ser criados e gerenciados em algum lugar externo.
A classe que recebe os objetos precisa saber mais sobre a implementação específica.
Recomendação:

Recomendações:
Se os objetos são fortemente acoplados e fazem parte integral do objeto contêiner, 
a composição interna pode ser a escolha mais natural e mais fácil de entender.
Se você está projetando para flexibilidade, reusabilidade e testabilidade, a composição externa pode ser preferível.
Em outras palavras,
Composição interna é indicada para objetos naturalmente acoplados e foco em encapsulamento. 
Já composição externa é preferível para flexibilidade e reusabilidade, facilitando substituição de componentes.

*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Injeção de Dependência por Método (SEM instanciar internamente)

class Sensor {
  detectar() {
    console.log('Sensor detectou algo');
  }
}

class Alarme {
  acionar(sensor) {
    console.log('Alarme acionado');
    sensor.detectar();
  }
}

const sensorDeMovimento = new Sensor();
const sistemaDeAlarme = new Alarme();
sistemaDeAlarme.acionar(sensorDeMovimento);
/*Output:
Alarme acionado
Sensor detectou algo
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

//Exemplo 7: Composição de Funções

function Motor3(tipo) {
  return {
    tipo,
    ligar() {
      console.log(`Motor ${tipo} ligado`);
    }
  };
}

function Carro3(motor) {
  return {
    ligarCarro() {
      console.log('Carro ligado');
      motor.ligar();
    }
  };
}

const motorV8 = Motor3('V8');
const meuCarro3 = Carro3(motorV8);
meuCarro3.ligarCarro();
/*Output:
Carro ligado
Motor V8 ligado
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")

//Exemplo 8: Injeção de Dependência em Módulo

const CameraModule = {
  capturarImagem() {
    console.log('Imagem capturada pela câmera');
  }
};

function Smartphone(camera) {
  return {
    tirarFoto() {
      console.log('Tirando foto com o smartphone');
      camera.capturarImagem();
    }
  };
}

const meuSmartphone = Smartphone(CameraModule);
meuSmartphone.tirarFoto();
/*Output:
Tirando foto com o smartphone
Imagem capturada pela câmera
*/




/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 8")

/*----------------------------------------------------COMPOSIÇÃO DINÂMICA---------------------------------CLASS CONSTRUCTOR*/
console.log("-----------------------------------COMPOSIÇÃO DINÂMICA---------------------------------------CLASS CONSTRUCTOR")

/*
A composição dinâmica refere-se à habilidade de compor objetos ou estruturas flexivelmente em tempo de execução. 
Isso envolve a adição, remoção ou modificação de propriedades, métodos de um objeto e 
até mesmo de outras classes durante a execução do programa, proporcionando maior flexibilidade e adaptabilidade ao sistema.
*/

//Exemplo 9: Composição Dinâmica, Adicionando Classes Dentro de Outra Classe.

class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  fazerBarulho() {
    console.log(`Barulho genérico de ${this.tipo}`);
  }
}

class Jaula {
  constructor() {
    this.animais = [];
  }

  adicionarAnimal(tipo) {
    const novoAnimal = new Animal(tipo);
    this.animais.push(novoAnimal);
    console.log(`${tipo} adicionado à jaula.`);
  }

  fazerBarulhoDosAnimais() {
    console.log("Barulhos dos animais na jaula:");
    this.animais.forEach(animal => {
      animal.fazerBarulho();
    });
  }
}

// Exemplo de composição dinâmica
const jaula = new Jaula();
jaula.adicionarAnimal("Leão");//Output: Leão adicionado à jaula.
jaula.adicionarAnimal("Macaco");//Output: Macaco adicionado à jaula.

// Executando barulhos dos animais na jaula
jaula.fazerBarulhoDosAnimais();
/*Output:
Barulhos dos animais na jaula:
Barulho genérico de Leão
Barulho genérico de Macaco
*/

/*
Neste exemplo, a classe Jaula possui um array dinâmico de animais, 
onde você pode adicionar diferentes tipos de animais dinamicamente. 
Isso também é uma forma de composição dinâmica, 
pois a estrutura da classe Jaula pode ser modificada durante a execução do programa.

Portanto, 
a composição dinâmica pode envolver várias formas de modificação ou extensão de objetos e suas relações em tempo de execução,
incluindo a inclusão dinâmica de instâncias de classes.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 9")

//Exemplo 10: Composição dinâminca, adicionando plugins no sistema.


class Plugin {
  constructor(nome) {
    this.nome = nome;
  }

  executar() {
    console.log(`Executando o plugin ${this.nome}`);
  }
}

class SistemaComPlugins {
  constructor() {
    this.plugins = [];
  }

  adicionarPlugin(plugin) {
    this.plugins.push(plugin);
    console.log(`Plugin ${plugin.nome} adicionado ao sistema.`);
  }

  executarPlugins() {
    console.log("Executando todos os plugins:");
    this.plugins.forEach(plugin => {
      plugin.executar();
    });
  }
}


// Criando instâncias de plugins
const plugin1 = new Plugin("Plugin 1");
const plugin2 = new Plugin("Plugin 2");

// Criando instância do sistema
const sistema = new SistemaComPlugins();

// Adicionando plugins dinamicamente
sistema.adicionarPlugin(plugin1);//Output: Plugin Plugin 1 adicionado ao sistema.
sistema.adicionarPlugin(plugin2);//Output: Plugin Plugin 2 adicionado ao sistema.

// Executando todos os plugins
sistema.executarPlugins();
/*Output:
Executando todos os plugins:
Executando o plugin Plugin 1
Executando o plugin Plugin 2
*/


/*
Neste exemplo, temos duas classes: Plugin e SistemaComPlugins. 
A classe SistemaComPlugins possui uma lista dinâmica de plugins que podem ser adicionados em tempo de execução. 
Cada plugin, representado pela classe Plugin, possui um método executar. 
O sistema pode executar todos os plugins adicionados a ele.

Esse exemplo ilustra como a composição dinâmica pode ser usada para estender e 
modificar o comportamento de um sistema em tempo de execução, permitindo a inclusão dinâmica de funcionalidades adicionais.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 10")

/*--------------------------------COMPOSIÇÃO COM FUNCTION CONSTRUCTOR------------------------------------------------------*/
console.log("-----------------------------------COMPOSIÇÃO COM FUNCTION CONSTRUCTOR------------------------------------------------------")

//Exemplo 11: Composição com Function Constructor, adiconando motor no carro.

// Função construtora para representar um Motor
function Motor4(tipo) {
  this.tipo = tipo;

  this.ligar = function () {
    console.log(`Motor ${this.tipo} ligado.`);
  };

  this.desligar = function () {
    console.log(`Motor ${this.tipo} desligado.`);
  };
}

// Função construtora para representar um Carro
function Carro4() {
  this.motor = new Motor4("4 cilindros"); // Composição: Carro possui um Motor

  this.ligarCarro = function () {
    console.log("Carro ligado.");
    this.motor.ligar(); // Delegando a responsabilidade de ligar ao Motor
  };

  this.desligarCarro = function () {
    console.log("Carro desligado.");
    this.motor.desligar(); // Delegando a responsabilidade de desligar ao Motor
  };
}

// Utilizando as classes
const meuCarro4 = new Carro4();

meuCarro4.ligarCarro();
/*Output:
Carro ligado.
Motor 4 cilindros ligado.
*/
meuCarro4.desligarCarro();
/*Output:
Carro desligado.
Motor 4 cilindros desligado.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 11")

//Exemplo 12: Composição com Function Constructor, adicionando componentes de computador.


// Função construtora para representar uma CPU
function CPU(modelo) {
  this.modelo = modelo;

  this.executarPrograma = function (programa) {
    console.log(`${this.modelo} executando: ${programa}`);
  };
}

// Função construtora para representar uma Memória
function Memoria(tipo) {
  this.tipo = tipo;

  this.armazenarDados = function (dados) {
    console.log(`${this.tipo} armazenando: ${dados}`);
  };
}

// Função construtora para representar um Computador
function Computador() {
  this.cpu = new CPU("Intel i5"); // Composição: Computador possui uma CPU
  this.memoria = new Memoria("DDR4"); // Composição: Computador possui uma Memória

  this.ligar = function () {
    console.log("Computador ligado.");
  };

  this.desligar = function () {
    console.log("Computador desligado.");
  };
}

// Utilizando as classes
const meuComputador = new Computador();

meuComputador.ligar(); //Output: Computador ligado.
meuComputador.cpu.executarPrograma("Calculadora"); //Output: Intel i5 executando: Calculadora
meuComputador.memoria.armazenarDados("Documentos"); //Output: DDR4 armazenando: Documentos
meuComputador.desligar(); //Output: Computador desligado.

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 12")

/*-----------------------COMPOSIÇÃO SEM INSTANCIAR UMA CLASSE DENTRO DE OTRA-----------------------------FUNCTION CONSTRUCTOR*/
console.log("------------------COMPOSIÇÃO SEM INSTANCIAR UMA CLASSE DENTRO DE OTRA----------------------FUNCTION CONSTRUCTOR")


//Exemplo 13: Composição com Function Constructor, SEM instanciar uma classe dentro da outra.

// Função construtora para representar um Motor
function MotorF(tipo) {
  this.tipo = tipo;

  this.ligar = function () {
    console.log(`Motor ${this.tipo} ligado.`);
  };
}

// Função construtora para representar um Carro
function CarroF(motor) {
  this.motor = motor;

  this.ligarCarro = function () {
    console.log('Carro ligado.');
    this.motor.ligar();
  };
}

// Utilizando as funções construtoras
const motorV6F = new MotorF('V6');
const meuCarroF = new CarroF(motorV6F);

meuCarroF.ligarCarro();
/*Output:
Carro ligado.
Motor V6 ligado.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 13")

//Exemplo 14: Composição com Function Constructor, SEM instanciar uma classe dentro da outra, Composição de alarme.

// Função construtora para representar um Sensor
function Sensor2() {
  this.detectar = function () {
    console.log('Sensor detectou algo.');
  };
}

// Função construtora para representar um Alarme
function Alarme2() {
  this.acionar = function (sensor) {
    console.log('Alarme acionado.');
    sensor.detectar();
  };
}

// Utilizando as funções construtoras
const sensorDeMovimento2 = new Sensor2();
const sistemaDeAlarme2 = new Alarme2();

sistemaDeAlarme2.acionar(sensorDeMovimento2);

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 14")

/*----------------------------------------------------COMPOSIÇÃO DINÂMICA--------------------------------FUNCTION CONSTRUCTOR*/
console.log("-----------------------------------COMPOSIÇÃO DINÂMICA---------------------------------------FUNCTION CONSTRUCTOR")

//Exemplo 15: Composição Dinâmica com Function constructor, Adicionando Classes Dentro de Outra Classe.


// Função construtora para representar um Animal
function Animal2(tipo) {
  this.tipo = tipo;

  this.fazerBarulho = function () {
    console.log(`Barulho genérico de ${this.tipo}`);
  };
}

// Função construtora para representar uma Jaula
function Jaula2() {
  this.animais = [];

  this.adicionarAnimal = function (tipo) {
    const novoAnimal = new Animal(tipo);
    this.animais.push(novoAnimal);
    console.log(`${tipo} adicionado à jaula.`);
  };

  this.fazerBarulhoDosAnimais = function () {
    console.log("Barulhos dos animais na jaula:");
    this.animais.forEach(animal => {
      animal.fazerBarulho();
    });
  };
}

// Exemplo de composição dinâmica
const jaula2 = new Jaula2();
jaula2.adicionarAnimal("Leão");   // Output: Leão adicionado à jaula.
jaula2.adicionarAnimal("Macaco"); // Output: Macaco adicionado à jaula.

// Executando barulhos dos animais na jaula
jaula2.fazerBarulhoDosAnimais();
/* Output:
Barulhos dos animais na jaula:
Barulho genérico de Leão
Barulho genérico de Macaco
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 15")

 //Exemplo 16: Composição dinâminca com Function Constructor, adicionando plugins no sistema.

// Função construtora para representar um Plugin
function PluginF(nome) {
  this.nome = nome;

  this.executar = function () {
    console.log(`Executando o plugin ${this.nome}`);
  };
}

// Função construtora para representar um SistemaComPlugins
function SistemaComPluginsF() {
  this.plugins = [];

  this.adicionarPlugin = function (plugin) {
    this.plugins.push(plugin);
    console.log(`Plugin ${plugin.nome} adicionado ao sistema.`);
  };

  this.executarPlugins = function () {
    console.log("Executando todos os plugins:");
    this.plugins.forEach(plugin => {
      plugin.executar();
    });
  };
}

// Criando instâncias de plugins
const plugin1F = new PluginF("Plugin 1");
const plugin2F = new PluginF("Plugin 2");

// Criando instância do sistema
const sistemaF = new SistemaComPluginsF();

// Adicionando plugins dinamicamente
sistemaF.adicionarPlugin(plugin1F); // Output: Plugin Plugin 1 adicionado ao sistema.
sistemaF.adicionarPlugin(plugin2F); // Output: Plugin Plugin 2 adicionado ao sistema.

// Executando todos os plugins
sistemaF.executarPlugins();
/* Output:
Executando todos os plugins:
Executando o plugin Plugin 1
Executando o plugin Plugin 2
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 16")

/*-----------------------------------COMPOSIÇÃO COM OBJETOS LITERAIS------------------------------------------------------*/
console.log("-----------------------------------COMPOSIÇÃO COM OBJETOS LITERAIS----------------------------------------")

//Exemplo 17: "Compondo um carro, com Objetos Literais".

// Objeto literal Radio
const RadioOL = {
  frequencia: "",
  ligar() {
    console.log("Rádio ligado na " + this.frequencia);
  },
  desligar() {
    console.log("Rádio desligado");
  }
};

// Objeto literal Motor
const MotorOL = {
  tipo: "",
  ligar() {
    console.log(`Motor ${this.tipo} ligado`);
  },
  desligar() {
    console.log(`Motor ${this.tipo} desligado`);
  }
};

// Objeto literal Carro utilizando composição
const CarroOL = {
  marca: "",
  modelo: "",
  motor: Object.create(MotorOL), // Composição: Carro possui um Motor
  radio: Object.create(RadioOL), // Composição: Carro possui um Rádio

  ligarCarro() {
    console.log(`${this.marca} ${this.modelo} ligado.`);
    this.motor.ligar(); // Delegando a responsabilidade de ligar ao Motor
    this.radio.ligar(); // Delegando a responsabilidade de ligar ao Rádio
  },

  desligarCarro() {
    console.log(`${this.marca} ${this.modelo} desligado.`);
    this.motor.desligar(); // Delegando a responsabilidade de desligar ao Motor
    this.radio.desligar(); // Delegando a responsabilidade de desligar ao Rádio
  }
};

// Configurando os objetos
RadioOL.frequencia = "FM";
MotorOL.tipo = "V8";
CarroOL.marca = "Toyota";
CarroOL.modelo = "Corolla";

// Exemplo de uso
CarroOL.ligarCarro();
/* OUTPUT:
Toyota Corolla ligado.
Motor V8 ligado
Rádio ligado na FM
*/
CarroOL.desligarCarro();
/* OUTPUT:
Toyota Corolla desligado.
Motor V8 desligado
Rádio desligado
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 17")


//Exemplo 18:  Composição de GUI (Interface Gráfica do Usuário) Com Objeto Literal.

// Objeto literal Button
const ButtonOL = {
  click() {
    console.log("Button clicked");
  }
};

// Objeto literal TextBox
const TextBoxOL = {
  input(value) {
    console.log(`Entered value: ${value}`);
  }
};

// Objeto literal Form utilizando composição
const FormOL = {
  button: Object.create(ButtonOL), // Composição: Form possui um Button
  textBox: Object.create(TextBoxOL), // Composição: Form possui um TextBox

  submit() {
    this.button.click();
    this.textBox.input("User input");
    console.log("Form submitted");
  }
};

// Exemplo de uso
FormOL.submit();
/* Output:
Button clicked
Entered value: User input
Form submitted
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 18")

/*-----------------------COMPOSIÇÃO SEM INSTANCIAR UM OBJETO DENTRO DE OUTRO-----------------------------------OBJETO LITERAL*/
console.log("------------------COMPOSIÇÃO SEM INSTANCIAR UM OBJETO DENTRO DE OUTRO-----------------------------OBJETO LITERAL")

//Exemplo 19: Composição com Objeto Literal, SEM instanciar um Objeto dentro de outro.

// Objeto literal Motor
const motorNLLiteral = {
  tipo: "",
  ligar() {
    console.log(`Motor ${this.tipo} ligado`);
  },
  desligar() {
    console.log(`Motor ${this.tipo} desligado`);
  }
};

// Objeto literal Carro sem composição interna
const carroNLLiteral = {
  motor: {}, // Composição Externa: Carro possui uma referência a um Motor externo
  ligarCarro() {
    console.log('Carro ligado.');
    this.motor.ligar();
  }
};

// Configurando os objetos
motorNLLiteral.tipo = "V8";
carroNLLiteral.motor = Object.create(motorNLLiteral);

// Exemplo de uso
carroNLLiteral.ligarCarro(); // Output: Carro ligado. Motor V8 ligado



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 19")
//Exemplo 20:  Composição com Objeto Literal, SEM instanciar um Objeto dentro da outro, Composição de alarme.

// Objeto literal Sensor
const sensorLiteral = {
  detectar() {
    console.log('Sensor detectou algo.');
  }
};

// Objeto literal Alarme com composição externa
const alarmeLiteral = {
  acionar(sensor) {
    console.log('Alarme acionado.');
    sensor.detectar();
  }
};

// Configurando os objetos
const sensorDeMovimentoLiteral = Object.create(sensorLiteral);
const sistemaDeAlarmeLiteral = Object.create(alarmeLiteral);

// Exemplo de uso
sistemaDeAlarmeLiteral.acionar(sensorDeMovimentoLiteral);


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 20")

/*----------------------------------------------------COMPOSIÇÃO DINÂMICA---------------------------------------OBJETO LITERAL*/
console.log("-----------------------------------COMPOSIÇÃO DINÂMICA---------------------------------------------OBJETO LITERAL")

//Exemplo 21: Composição Dinâmica com Objeto Literal, Adicionando Objeto Dentro de Outra Objeto.


// Objeto literal Animal
const animalLiteral = {
  fazerBarulho() {
    console.log(`Barulho genérico de ${this.tipo}`);
  }
};

// Objeto literal Jaula com composição dinâmica
const jaulaLiteral = {
  animais: [],

  adicionarAnimal(tipo) {
    const novoAnimal = Object.create(animalLiteral);
    novoAnimal.tipo = tipo;
    this.animais.push(novoAnimal);
    console.log(`${tipo} adicionado à jaula.`);
  },

  fazerBarulhoDosAnimais() {
    console.log("Barulhos dos animais na jaula:");
    this.animais.forEach(animal => {
      animal.fazerBarulho();
    });
  }
};

// Exemplo de composição dinâmica
const jaulaDinamica = Object.create(jaulaLiteral);
jaulaDinamica.adicionarAnimal("Leão");   // Output: Leão adicionado à jaula.
jaulaDinamica.adicionarAnimal("Macaco"); // Output: Macaco adicionado à jaula.

// Executando barulhos dos animais na jaula
jaulaDinamica.fazerBarulhoDosAnimais();
/* Output:
Barulhos dos animais na jaula:
Barulho genérico de Leão
Barulho genérico de Macaco
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 21")

//Exemplo 22: Composição dinâminca com Objeto Literal, adicionando plugins no sistema.

// Objeto literal Plugin
const pluginLiteral = {
  executar() {
    console.log(`Executando o plugin ${this.nome}`);
  }
};

// Objeto literal SistemaComPlugins com composição dinâmica
const sistemaComPluginsLiteral = {
  plugins: [],

  adicionarPlugin(plugin) {
    this.plugins.push(plugin);
    console.log(`Plugin ${plugin.nome} adicionado ao sistema.`);
  },

  executarPlugins() {
    console.log("Executando todos os plugins:");
    this.plugins.forEach(plugin => {
      plugin.executar();
    });
  }
};

// Criando instâncias de plugins
const plugin1Literal = Object.create(pluginLiteral);
plugin1Literal.nome = "Plugin 1";

const plugin2Literal = Object.create(pluginLiteral);
plugin2Literal.nome = "Plugin 2";

// Criando instância do sistema com plugins dinamicamente
const sistemaComPluginsDinamico = Object.create(sistemaComPluginsLiteral);

// Adicionando plugins dinamicamente
sistemaComPluginsDinamico.adicionarPlugin(plugin1Literal); // Output: Plugin Plugin 1 adicionado ao sistema.
sistemaComPluginsDinamico.adicionarPlugin(plugin2Literal); // Output: Plugin Plugin 2 adicionado ao sistema.

// Executando todos os plugins
sistemaComPluginsDinamico.executarPlugins();
/* Output:
Executando todos os plugins:
Executando o plugin Plugin 1
Executando o plugin Plugin 2
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 22")
