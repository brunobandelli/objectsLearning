/*POLIMORFISMO COM FUNCTION CONSTRUCTOR*/

/* 
O Polimorfismo em JS pode ser alcançado através da manipulação dinâmica de objetos, sobrescrita de métodos e funções,
permitindo que objetos de diferentes classes respondam ao mesmo método ou propriedade de maneira única. 
*/


/*
O polimorfismo em funções construtoras em JavaScript é frequentemente alcançado através da prototipagem.
A prototipagem é um conceito fundamental em JavaScript que permite que objetos herdem propriedades e métodos de outros objetos. 
Isso é particularmente útil para alcançar polimorfismo, onde diferentes objetos podem compartilhar um método com o mesmo nome.
*/

/* Primeiramente vamos dar um exemplo sem prototipagem*/

//Exemplo 1: Polimorfismo simples com function constructor SEM prototipagem.

// Definindo um construtor de veículo
function Veiculo(fabricante, tipo) {
    this.fabricante = fabricante;
    this.tipo = tipo;
    
    // Método diretamente no objeto (sem prototype)
    this.exibirInformacoes = function () {
      return `Fabricante: ${this.fabricante}, tipo: ${this.tipo}`;
    };
  }
  
  // Definindo um construtor de carro
  function Carro(fabricante, tipo, modelo) {

    // Chamando o construtor do Veiculo
    Veiculo.call(this, fabricante, tipo);
    
    this.modelo = modelo;
    
    // Sobrescrevendo o método exibirInformacoes para Carro
    this.exibirInformacoes = function () {
      return `${this.fabricante} ${this.tipo}, modelo: ${this.modelo}`;
    };
  }
  
  // Criando instâncias de Veiculo e Carro
  const veiculoGenerico = new Veiculo('Genérico', 'Veículo');
  const meuCarro = new Carro('Toyota', 'Sedan', 'Camry');
  
  // Exibindo informações usando o polimorfismo
  console.log(veiculoGenerico.exibirInformacoes()); // Fabricante: Genérico, tipo: Veículo
  console.log(meuCarro.exibirInformacoes());         // Toyota Camry, modelo: Camry
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Polimorfismo com Prototype COM prototipagem.

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    throw new Error("Método speak não implementado");
  };
  

  function Dog(name) {
    Animal.call(this, name);
  }
  
  //Estabelecendo herança prototipica.
  Dog.prototype = Object.create(Animal.prototype);
    
  //Sobrescrevendo o método.
  Dog.prototype.speak = function() {
    return "Au au!";
  };
  

  function Cat(name) {
    Animal.call(this, name);
  }
  
  //Estabelecendo herança prototipica.
  Cat.prototype = Object.create(Animal.prototype);
  
  //Sobrescrevendo o método.
  Cat.prototype.speak = function() {
    return "Miau!";
  };

  
  const dog = new Dog("Rex");
  const cat = new Cat("Mia");
  
  console.log(dog.speak()); // "Au au!"
  console.log(cat.speak()); // "Miau!"
  console.log(Dog.prototype)
  console.log(Object.getOwnPropertyNames(Dog.prototype));
  console.table(Dog.prototype)


  /*
    A escolha entre usar ou não prototipagem depende do contexto. 
    Sem a utilização de prototipagem, o código é mais simples, 
    mas a desvantagem significativa é a duplicação de métodos em cada instância, 
    o que pode ser ineficiente em termos de memória. 
    Se a eficiência de memória é uma preocupação e você deseja compartilhar métodos entre instâncias, 
    a abordagem com prototipagem se torna preferível, mesmo que introduza uma camada adicional de complexidade. 
    O uso cuidadoso da prototipagem pode resultar em código mais eficiente e escalável.
  */

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Polimorfismo com Prototype COM prototipagem e referenciando o constructor.

// Classe base
function Notificacao(titulo, mensagem) {
    this.titulo = titulo;
    this.mensagem = mensagem;
  }
  
  // Método no protótipo da classe base para exibir a notificação
  Notificacao.prototype.exibir = function() {
    console.log(`${this.titulo}: ${this.mensagem}`);
  };
  
  // Classe derivada para notificações por email
  function Email(titulo, mensagem, destinatario) {
    Notificacao.call(this, titulo, mensagem);
    this.destinatario = destinatario;
  }
  
  // Herança prototípica
  Email.prototype = Object.create(Notificacao.prototype);
  Email.prototype.constructor = Email; //Essa linha não é estritamente necessario, no final é explicado isso, se trata de uma boa pratica.
  
  // Implementação específica para notificações por email
  Email.prototype.exibir = function() {
    console.log(`Email enviado para ${this.destinatario}: ${this.titulo} - ${this.mensagem}`);
  };
  
  // Classe derivada para notificações por SMS
  function SMS(titulo, mensagem, numero) {
    Notificacao.call(this, titulo, mensagem);
    this.numero = numero;
  }
  
  // Herança prototípica
  SMS.prototype = Object.create(Notificacao.prototype);
  SMS.prototype.constructor = SMS; //Essa linha não é estritamente necessario, no final é explicado isso, se trata de uma boa pratica.
  
  // Implementação específica para notificações por SMS
  SMS.prototype.exibir = function() {
    console.log(`SMS enviado para ${this.numero}: ${this.titulo} - ${this.mensagem}`);
  };
  
  // Criando instâncias
  const email = new Email("Novo Email", "Você tem uma nova mensagem.", "usuario@example.com");
  const sms = new SMS("Alerta", "Alerta de segurança!", "123456789");
  
  // Chamando o método exibir
  email.exibir(); // Email enviado para usuario@example.com: Novo Email - Você tem uma nova mensagem.
  sms.exibir();   // SMS enviado para 123456789: Alerta - Alerta de segurança!
  

 /*
 A linha 'ClasseDerivada.prototype.constructor = ClasseDerivada' não é estritamente necessária para o funcionamento do código, 
 mas é frequentemente adicionada por conveniência e consistência.

 Quando você cria uma função construtora, como a função ClasseDerivada, 
 o JavaScript automaticamente define a propriedade prototype.constructor para apontar de volta para a própria função construtora. 
 No entanto, ao manipular diretamente o objeto de protótipo, como fazemos com Object.create(ClasseBase.prototype), 
 a referência de constructor é perdida, apontando para  a função construtora da ClasseBase

 Adicionar ClasseDerivada.prototype.constructor = ClasseDerivada; restaura a referência ao construtor da ClasseDerivada,
 garantindo que a propriedade constructor no objeto de protótipo aponte para a função construtora correta,
 deixando o código mais integro e consistente.

 Isso pode ser útil em alguns casos, especialmente se você planeja verificar o construtor de uma instância para determinar sua origem.

 Em resumo, enquanto não é estritamente necessário, incluir ClasseDerivada.prototype.constructor = ClasseDerivada; 
 pode ser uma boa prática para manter a integridade da referência constructor no objeto de protótipo.

 A linha em questão é muitas vezes omitida em exemplos simples, 
 mas pode ser útil em situações mais complexas onde a propriedade constructor pode ser usada para verificar a origem de um objeto.
 */

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

