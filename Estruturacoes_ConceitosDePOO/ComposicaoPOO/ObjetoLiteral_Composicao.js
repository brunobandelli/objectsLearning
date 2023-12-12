/*-----------------------------------COMPOSIÇÃO COM OBJETOS LITERAIS------------------------------------------------------*/

/*
---------------------------------------------------------INDICE--------------------------------------------------------------

*COMPOSIÇÃO COM NOTAÇÃO LITERAL:
  •COM INSTANCIAMENTO DENTRO DO OBJETO.
  └EXEMPLOS 17 À 18 - COMPOSIÇÃO COM OBJETO DENTRO DE OUTRO.
  •SEM INSTANCIAR DENTRO DO OBJETO.
  └EXEMPLOS 19 À 20 - COMPOSIÇÃO SEM OBJETOS DENTRO DE OUTRO.
  •COMPOSIÇÃO DINÂMICA.
  └EXEMPLOS 21 À 22 - COMPOSIÇÃO DINÂMICA.
*/

/*-------------------------------------------------------------------------------------------------------------------------*/

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