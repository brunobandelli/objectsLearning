/*Encapsulamento /e com Getters e Setters*/

/*
O encapsulamento refere-se à prática de ocultar detalhes internos da implementação de um objeto e 
restringir o acesso direto a certos componentes. 
Isso é alcançado por meio da criação de membros privados, como propriedades e métodos, que não podem ser acessados fora da classe.

O uso do símbolo # para criar propriedades e metodos privados oferece uma maneira mais segura de encapsular dados em uma classe, 
tornando essas propriedades e metodos inacessíveis de fora da classe, o que ajuda a garantir a integridade e a segurança dos dados.

É importante destacar que o símbolo # é específico para classes em JavaScript e 
não pode ser utilizado em funções construtoras ou objetos literais. 
Nestes casos, a convenção do sublinhado _ ainda é comumente empregada,
servindo apenas para comunicar a outros desenvolvedores a natureza privada da propriedade ou método. 
No entanto essa prática é apenas simbólica e não fornece uma proteção real contro acesso externo, 
enquanto o Simbolo # oferece um verdadeiro encapsulamento tornando propriedades e metodos inacessiveis a partir do exterior da calsse.

*/

//Exemplo 1: Encapsulamento de propriedades de metodos em classes, usando #.

class PessoaComCerquilha {
    #nome; // Propriedade privada
  
    constructor(nome) {
      this.#nome = nome;
    }

    #metodoPrivado(){  //Metodo Privado
      console.log("Metodo Privado")
    }
  
    letsPlay(){
      this.#metodoPrivado();
    }
    getNome() {
      return this.#nome;
    }
  }
  
  const pessoa2 = new PessoaComCerquilha("Bob");
/* 
Desta maneira ambos geram erro, pois a propriedade e o metodo são privados
// console.log(pessoa2.#nome); 
// pessoa2.#metodoPrivado(); 
*/
// Recomendado: Acessos de forma indireta através de método : 
console.log(pessoa2.getNome()); 
pessoa2.letsPlay()
  


console.log("----------------------------------------------------------------------------------------------------------1")
/*----------------------------------------------------------------------------------------------------------------------*/

//Exemplo 2: Encapsulamento com Herança.


class Vehicle {
  #speed;

  constructor(speed) {
      this.#speed = speed;
  }

  getSpeed() {
      return this.#speed;
  }

  setSpeed(speed) {
      this.#speed = speed;
  }
}

class Car extends Vehicle {
  #accelerate() {
      // Acessando a propriedade #speed através do método setSpeed da classe base
      this.setSpeed(super.getSpeed() + 10);
  }

  accelerateAndLog() {
      this.#accelerate();
      console.log(`Car speed: ${this.getSpeed()}`);
  }
}

const myCar = new Car(50);
myCar.accelerateAndLog();  // Saída: Car speed: 60



console.log("----------------------------------------------------------------------------------------------------------2")
/*----------------------------------------------------------------------------------------------------------------------*/

//Exemplo 3: Encapsulamento com Composição.


class MotorVeiculo {
  ligar() {
      console.log('Motor ligado.');
  }

  desligar() {
      console.log('Motor desligado.');
  }
}

class CarroVeiculo {
  #motor;

  constructor() {
      this.#motor = new MotorVeiculo();
  }

  ligar() {
      this.#motor.ligar();
      console.log('Carro em movimento.');
  }

  desligar() {
      this.#motor.desligar();
      console.log('Carro parado.');
  }
}

// Exemplo de uso
const meuCarroVeiculo = new CarroVeiculo();

meuCarroVeiculo.ligar();  // Ligar o carro e começar a se movimentar
meuCarroVeiculo.desligar();  // Desligar o carro e parar


console.log("----------------------------------------------------------------------------------------------------------3")
/*----------------------------------------------------------------------------------------------------------------------*/


/* GETTERS E SETTERS*/

/*
Getters e setters são métodos especiais em uma classe que são usados para acessar e modificar propriedades privadas. 
Eles são frequentemente associados a propriedades, 
mas podem ser usados de maneira mais ampla para fornecer acesso e controle específicos sobre os dados da classe, 
incluindo o acesso a métodos privados.


Getters: 
Um getter é um método que permite recuperar o valor de uma propriedade privada. 
Eles são definidos usando a palavra-chave get. 
Os getters são especialmente úteis quando você deseja realizar alguma lógica antes de retornar o valor.
Um getter é uma função que não recebe parâmetros. 


Setters:
Um setter é um método que permite modificar o valor de uma propriedade privada. 
Eles são definidos usando a palavra-chave set. 
Os setters são úteis quando você precisa realizar alguma validação ou lógica antes de atribuir um novo valor.
Um setter é uma função que não recebe parâmetros. 

Veja um exemplo:
*/

//Exemplo 4: Encapsulamento com Getters

class Pessoa {
    #nome;
    #idade
    constructor(nome, idade) {
      this.#nome = nome;
      this.#idade = idade;
    }
  
    get nome() {
      return this.#nome;
    }
    get idade() {
        return this.#idade
    }
  }
  
  const pessoa = new Pessoa("Alice", 30);
  console.log(`Nome: ${pessoa.nome} e idade: ${pessoa.idade}`); // Chama o getter nome
  
console.log("----------------------------------------------------------------------------------------------------------4")
/*------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 5: Encapsulamento com Setters e Getters

class PessoaDois {
    #nome;
    constructor(nome) {
      this.#nome = nome;
    }
  
    get nome() {
      return this.#nome;
    }
  
    set nome(novoNome) {
      this.#nome = novoNome;
    }
  }
  
  const pessoaDoias = new PessoaDois("Alice");
  //Obtendo o nome com o getter
  console.log(pessoaDoias.nome); // "Alice"
  
  // Usando o setter para definir o nome
  pessoaDoias.nome = "Bob";
  console.log(pessoaDoias.nome); // "Bob"
  
/*
Os métodos getters e setters são frequentemente utilizados para encapsulamento, 
mas sua utilidade não se limita a esse propósito. 
Embora o encapsulamento (o conceito de ocultar os detalhes de implementação 
e fornecer uma interface para interagir com os objetos) seja uma das principais razões para usar getters e setters, 
eles também oferecem outros benefícios e usos:

Encapsulamento: 
Como mencionado, os getters e setters ajudam a controlar o acesso e a modificação de propriedades, 
permitindo que você aplique lógica personalizada, validações e restrições. 
Isso ajuda a manter os dados privados e garante que a manipulação dos objetos ocorra de maneira consistente.

Validação de Dados: 
Os setters são especialmente úteis para garantir que os dados inseridos em uma propriedade atendam a critérios específicos. 
Por exemplo, você pode validar se uma data é válida antes de atribuí-la a uma propriedade.

Formatação de Dados: 
Getters permitem que você formate os dados antes de serem lidos. Por exemplo, 
você pode formatar uma data em um formato legível antes de retorná-la.

Criação de Propriedades Virtuais: 
Você pode usar getters para criar propriedades virtuais que derivam seu valor com base em outras propriedades do objeto. 
Isso é útil para calcular valores derivados.

Comunicação e Depuração: 
Getters e setters podem ser úteis para adicionar pontos de interrupção, 
mensagens de depuração e lógica de registro que facilitam o rastreamento do comportamento de propriedades.

Interoperabilidade: 
Em alguns casos, os getters e setters podem ser usados para interoperabilidade com APIs ou 
bibliotecas externas que esperam métodos especiais para acessar propriedades.

Controle de Acesso: 
Você pode usar getters e setters para controlar quem pode acessar e modificar determinadas propriedades, 
aplicando lógica de controle de acesso.
*/

console.log("----------------------------------------------------------------------------------------------------------5")
/*------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 6: Encapsulamento usando Getters e Setters

class Retangulo {
    #comprimento;
    #largura;
    constructor(comprimento, largura) {
      this.#comprimento = comprimento;
      this.#largura = largura;
    }
  
    get area() {
      return this.#comprimento * this.#largura;
    }
  
    set comprimento(novoComprimento) {
      this.#comprimento = novoComprimento;
    }
  
    set largura(novaLargura) {
      this.#largura = novaLargura;
    }
  }
  
  const retangulo = new Retangulo(5, 10);
  console.log(retangulo.area); // 50
  
  retangulo.comprimento = 8; // Usando o setter para definir o comprimento
  retangulo.largura = 6; // Usando o setter para definir a largura
  
  console.log(retangulo.area); // 48
  

console.log("----------------------------------------------------------------------------------------------------------6")
/*------------------------------------------------------------------------------------------------------------------------*/