/*--------------------------------COMPOSIÇÃO COM FUNCTION CONSTRUCTOR------------------------------------------------------*/

/*
---------------------------------------------------------INDICE--------------------------------------------------------------

*COMPOSIÇÃO COM FUNCTION CONSTRUCTOR:
  •COM INSTANCIAMENTO DENTRO DA CLASSE.
  └EXEMPLOS 11 À 12 - COMPOSIÇÃO COM CLASSE DENTRO DE OUTRA.
  •SEM INSTANCIAR DENTRO DA CLASSE.
  └EXEMPLOS 13 À 14 - COMPOSIÇÃO SEM CLASSES DENTRO DE OUTRA.
  •COMPOSIÇÃO DINÂMICA.
  └EXEMPLOS 15 À 16 - COMPOSIÇÃO DINÂMICA.

*/

/*-------------------------------------------------------------------------------------------------------------------------*/
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
    const novoAnimal = new Animal2(tipo);
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