/*Herança com Função Construtora*/

/*
Em JavaScript, você pode simular herança  por meio de funções construtoras e protótipos, 
também chamada de herança prototípica. No entanto, é importante notar que, apesar dessa abordagem ser válida, 
o uso de heranças com classes tornou-se mais convencional e alinhado com as práticas modernas de programação em JavaScript.
*/



//Exemplo 5: Herança com função construtora SEM Prototype

// Função construtora para a classe Pai
function Pai(nome) {
    this.nome = nome;
  
    // Método da classe Pai
    this.apresentar = function() {
      console.log("Meu nome é " + this.nome);
    };
  }
  
  // Função construtora FILHO
  function Filho(nome, idade) {
    
    Pai.call(this, nome); // Chamando o construtor da classe Pai com o contexto adequado
    
    this.idade = idade; // Propriedades específicas da classe Filho
  
    // Método específico da classe Filho
    this.dizerIdade = function() {
      console.log("Minha idade é " + this.idade + " anos");
    };
  }
  
  // Criando as instâncias
  const pai = new Pai("Pai");
  const filho = new Filho("Filho", 10);
  
  // Usando os métodos das instâncias
  pai.apresentar(); // Saída: Meu nome é Pai
  filho.apresentar(); // Saída: Meu nome é Filho
  filho.dizerIdade(); // Saída: Minha idade é 10 anos
  
  
  /*
  OBS:
  ***Pai.call(this, nome):
  A expressão Pai.call(this, nome) é uma forma de chamar o construtor da classe Pai na função construtora da classe Filho. 
  Vamos quebrar essa expressão para entender cada parte:
  
  Pai: Refere-se à função construtora da classe Pai.
  
  .call(this, nome): O método call é usado para chamar uma função em um determinado contexto, 
  substituindo o valor de this na função chamada.
  
  this: Refere-se ao contexto no qual a função Pai será executada. Neste caso, 
  queremos que this se refira à instância da classe Filho que está sendo criada.
  
  nome: É o argumento que será passado para o construtor da classe Pai.
  
  Então, Pai.call(this, nome) está efetivamente chamando o construtor da classe Pai, 
  mas garantindo que ele seja executado no contexto da instância da classe Filho (this se refere à instância de Filho). 
  
  Isso é necessário porque, quando você herda de uma classe para outra em JavaScript, 
  o construtor da classe pai não é chamado automaticamente, então você precisa fazer isso explicitamente.
  
  */
  
  
  
  /*------------------------------------------------------------------------------------------------------------------------*/
  console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")
  
  //Exemplo 6: Herança com função construtora COM Prototype
  
  // Função construtora para a classe Pai
  function PaiCP(nome) {
    this.nome = nome;
  }
  
  // Adicionando um método à classe Pai usando prototype
  PaiCP.prototype.apresentar = function() {
    console.log("Meu nome é " + this.nome + ", Idade: " + this.idade);
  };
  
  // Função construtora para a classe Filho, que herda de Pai
  function FilhoCP(nome, idade) {
    PaiCP.call(this, nome); // Chamando o construtor da classe Pai com o contexto adequado
    this.idade = idade;
  }
  
  // Herdar os métodos do protótipo da classe Pai
  FilhoCP.prototype = Object.create(PaiCP.prototype);
  
  // Criando instâncias da classe Filho
  const filho1 = new FilhoCP("Filho1", 5);
  const filho2 = new FilhoCP("Filho2", 8);
  
  // Usando os métodos das instâncias
  filho1.apresentar(); // Saída: Meu nome é Filho1, Idade: 5
  filho2.apresentar(); // Saída: Meu nome é Filho2, Idade: 8
  
  //Verificando se a herança está funcionando corretamente, se true, essas instâncias podem ser tratadas como instâncias da classe pai.
  console.log(filho1 instanceof PaiCP); // true
  console.log(filho2 instanceof PaiCP); // true
  
  
  /*
  OBS:
  Quando você adiciona métodos ao prototype da função construtora (Pai.prototype.apresentar),
  esses métodos são compartilhados entre todas as instâncias criadas a partir dessa função construtora.
  Isso significa que todas as instâncias compartilham a mesma referência para esses métodos no protótipo. 
  As instâncias têm acesso ao método, mas não têm uma cópia própria do método em sua própria estrutura de objeto.
  
  
  ***Filho.prototype = Object.create(Pai.prototype)
  Essa linha de código Filho.prototype = Object.create(Pai.prototype); 
  é essencial para estabelecer a herança correta entre a classe Pai e a classe Filho.
  
  Vamos entender cada parte dela:
  
  *Pai.prototype: 
  Refere-se ao protótipo da classe Pai. 
  O protótipo é um objeto especial em JavaScript que contém propriedades e 
  métodos que são compartilhados por todas as instâncias criadas a partir daquela função construtora.
  
  *Object.create(Pai.prototype): 
  Cria um novo objeto com o protótipo fornecido. 
  Neste caso, estamos criando um novo objeto que tem o protótipo de Pai, ou seja, 
  compartilha as propriedades e métodos do protótipo de Pai.
  
  *Filho.prototype = ...: 
  Isso está atribuindo o objeto criado com o protótipo de Pai ao protótipo da classe Filho. 
  Isso é fundamental para estabelecer a cadeia de protótipos e permitir que instâncias de Filho herdem os métodos e 
  propriedades definidos no protótipo de Pai.
  
  Ao fazer isso, qualquer método ou propriedade que seja adicionado ao 
  protótipo de Pai será automaticamente herdado pelas instâncias de Filho. 
  Isso é uma forma de implementar herança em JavaScript, 
  permitindo que as classes filhas herdem o comportamento das classes pai.
  
  
  
  IMPORTANTE:
  DIFERENÇAS PRINCIPAIS ENTRE USAR OU NÃO PROTOTYPE EM HERANÇAS FEITAS COM FUNÇÕES CONSTRUTORAS.
  
  *Método apresentar na Função Construtora Pai:
  No primeiro código(EXEMPLO 6), o método apresentar é adicionado diretamente à função construtora Pai.
  No segundo código(EXEMPLO 5), o método apresentar é adicionado ao protótipo da classe Pai usando Pai.prototype.apresentar.
  
  *Herança de Métodos (Isso vale para propriedades também):
  Em ambos os casos, o método apresentar está disponível para as instâncias da classe Filho. 
  No entanto, no primeiro código, cada instância da classe Filho terá sua própria cópia do método apresentar.
  Ambos os códigos fazem a herança do método apresentar, 
  mas o segundo é geralmente preferido por ser mais eficiente em termos de memória, 
  já que o método é compartilhado entre todas as instâncias através do protótipo.
  
  */
  
  
  
  
  
  /*------------------------------------------------------------------------------------------------------------------------*/
  console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")