/*CRIANDO OBJETOS COM FUNÇÃO CONSTRUTORA */

/*
Uma função construtora em JavaScript é uma função regular que é usada para criar objetos. 
A principal diferença entre uma função construtora e uma função regular é que você a invoca usando o operador new. 
Quando você usa new com uma função, ela se torna uma função construtora e retorna um novo objeto.
Utilizando função construtora você precisa usar a palavra-chave this para atribuir propriedades e métodos ao objeto.
Além disso, você altera a estrutura, retirando o class, metodo constructor.
*/

/*
Sintaxe básica:

// Definição da função construtora
function NomeDaFuncao(parametro1, parametro2) {
  // Propriedades do objeto são definidas usando 'this'
  this.propriedade1 = parametro1;
  this.propriedade2 = parametro2;

  // Métodos da função construtora
  this.metodo1 = function() {
    // Código do método
  };

  this.metodo2 = function() {
    // Código do método
  };
}

// Instanciando a função construtora
const minhaInstancia = new NomeDaFuncao("Valor 1", "Valor 2");


DEFINIÇÃO DA SINTAXE:

*function NomeDaFuncao(parametro1, parametro2): Define uma nova função construtora com o nome especificado e 
recebe parâmetros que podem ser usados para inicializar as propriedades do objeto criado pela função construtora.

*this.: Dentro da função construtora, as propriedades e métodos do objeto são definidos usando a palavra-chave "this." 
e são referenciados nas instâncias criadas pela função construtora.


*Métodos da função construtora: São definidos dentro da função construtora e é recomendado posicioná-los após a definição das propriedades, 
mas não há uma restrição estrita quanto à ordem.
São funções que podem ser chamadas em instâncias da função construtora para realizar ações ou operações específicas.

*Instância: Use a palavra-chave "new" seguida pelo nome da função construtora para criar uma instância. 
Você pode passar os valores desejados como argumentos para o construtor.

*/

//Exemplo 1: Criando objetos com função construtora com parametros e metodo.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.cumprimentar = function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new Pessoa("Bruno", 29);
  const pessoa2 = new Pessoa("Bandelli", 19);
  
  pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
  pessoa2.cumprimentar(); // Saída: Olá, meu nome é Maria e tenho 25 anos.
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Utilizando Prototype para adicionar propriedades e metodos.

/*
A propriedade prototype é usada para adicionar propriedades e 
métodos que podem ser compartilhados por todas as instâncias criadas a partir dessa função construtora.
*/

const Nave=function(energia){
  this.energia=energia
  this.disparos=3
}

const n1= new Nave(100)

Nave.prototype.vidas=3
Nave.prototype.disparar=function(){
  if(this.disparos > 0){
    this.disparos--
  }
}

n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave) //OUTPUT: [Function: Nave]
console.log(n1) //OBSERVE //OUTPUT: Nave { energia: 100, disparos: 0 }
console.log(Nave.prototype) //OBSERVE //OUTPUT: { vidas: 3, disparar: [Function (anonymous)] }
console.log(n1.vidas) //OUTPUT: 3
console.log(n1.disparos) //OUTPUT: 0

/*OBSERVE OS 2 COMENTARIOS ACIMA:
Observe que ao usar console.log em n1, os novos membros criados pelo prototype não serão exibidos diretamente na instância. 
Isso ocorre porque esses membros estão associados ao prototype da classe(Nave) em geral, não a instâncias individuais. 
Para visualizá-los, é necessário acessá-los através do prototype da classe, como em Nave.prototype. 
*/

/*
 Utilidade: A propriedade prototype é usada em funções construtoras para definir métodos e 
 propriedades compartilhados por todas as instâncias criadas a partir da função construtora.
 Quando usar:
 *Quando você deseja compartilhar métodos ou propriedades comuns entre todas as instâncias da mesma função construtora.
 *Quando você deseja economizar memória, pois os métodos e propriedades compartilhados não são duplicados para cada instância.
 *Para criar herança entre funções construtoras, permitindo que as instâncias herdem métodos e propriedades do prototype de 
 outras funções construtoras.

 Em resumo, os métodos e propriedades criados usando a propriedade prototype pertencem à função construtora, 
 não a instâncias específicas. Eles são compartilhados por todas as instâncias criadas a partir dessa função construtora, 
 promovendo a reutilização de código, economizando memória e facilitando a implementação de herança em JavaScript.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Criando classes de forma dinâmica

/*
O uso dinâmico de classes e construtores em JavaScript, é mais comum em situações avançadas, 
especialmente quando se lida com bibliotecas ou frameworks que precisam criar abstrações complexas de forma dinâmica.
Veja um exemplo abaixo:
*/

/*Exemplo: 3-A*/

function criarClasse(nomeDaClasse) {
  return class {
      constructor(parametro) {
          this.nome = parametro;
      }

      exibirNome() {
          console.log(`Nome da ${nomeDaClasse}: ${this.nome}`);
      }
  };
}

const MinhaClasseDinamica = criarClasse("Instância Dinâmica");
const instancia = new MinhaClasseDinamica("Exemplo");
instancia.exibirNome(); //Output: Nome da Instância Dinâmica: Exemplo


/*
Vamos analisar esse trecho de código passo a passo:

const MinhaClasseDinamica = criarClasse("Instância Dinâmica");
const instancia = new MinhaClasseDinamica("Exemplo");
instancia.exibirNome();

Passo a passo:

*const MinhaClasseDinamica = criarClasse("Instância Dinâmica");
Aqui, você está chamando a função criarClasse e passando o argumento "Instância Dinâmica". 
Essa função retorna uma classe dinâmica (uma função construtora). 
Então, MinhaClasseDinamica se torna uma referência para essa classe.

*const instancia = new MinhaClasseDinamica("Exemplo");
Aqui, você está criando uma nova instância da classe dinâmica usando o operador new. 
Essa instância é armazenada na variável instancia. Você também está passando o argumento "Exemplo" para o construtor da classe.

*instancia.exibirNome();
Agora, você está chamando o método exibirNome() da instância criada. Dentro desse método, 
há uma instrução de log que exibe uma mensagem contendo o nome da classe (passado durante a criação da classe) e 
o nome passado durante a criação da instância.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3-A")

//Exemplo 3-B*/

/*
Vamos supor que você tenha um sistema de plugins, e cada plugin pode ter uma lógica específica. 
Você poderia usar uma função para dinamicamente criar classes de plugins com base nas configurações fornecidas. 
Isso permite que você adicione novos plugins sem ter que definir explicitamente uma classe para cada um.
*/

// Função que cria dinamicamente classes de plugins
function criarClasseDePlugin(nomeDoPlugin) {
  return class {
      constructor(config) {
          this.nome = nomeDoPlugin;
          this.config = config;
      }

      executar() {
          console.log(`Executando ${this.nome} com configurações:`, this.config);
      }
  };
}

// Uso da função para criar classes de plugins dinamicamente
const PluginA = criarClasseDePlugin("PluginA");
const PluginB = criarClasseDePlugin("PluginB");

// Instâncias de plugins
const instanciaPluginA = new PluginA({ opcaoA: true });
const instanciaPluginB = new PluginB({ opcaoB: "valor" });

// Execução dos plugins
instanciaPluginA.executar(); // Saída: Executando PluginA com configurações: { opcaoA: true }
instanciaPluginB.executar(); // Saída: Executando PluginB com configurações: { opcaoB: "valor" }

/*
Neste exemplo, a função criarClasseDePlugin retorna uma classe para cada tipo de plugin, 
e você pode criar instâncias dessas classes dinamicamente com base nos nomes dos plugins e suas configurações. 
Esse é um caso simplificado, mas em sistemas mais complexos, a criação dinâmica de classes pode ser uma ferramenta poderosa.

O objetivo desse padrão é permitir a criação de classes e instâncias de forma dinâmica, 
o que pode ser útil em certos cenários, como sistemas de plugins ou extensões, 
onde você pode adicionar novos tipos de plugins sem a necessidade de definir explicitamente uma nova classe para cada um.
*/


/*Passo a passo:

*const PluginA = criarClasseDePlugin("PluginA"); e const PluginB = criarClasseDePlugin("PluginB");
Aqui, você está usando a função criarClasseDePlugin para criar dinamicamente duas classes de plugins: PluginA e PluginB.
PluginA e PluginB são agora referências para classes geradas pela função criarClasseDePlugin, 
cada uma representando um tipo diferente de plugin.

*const instanciaPluginA = new PluginA({ opcaoA: true });
Agora, você está criando uma instância da classe PluginA utilizando o operador new.
A função construtora da classe é chamada, e você está passando um objeto de configuração { opcaoA: true } como argumento para o construtor.
A instância resultante é armazenada na variável instanciaPluginA.

*const instanciaPluginB = new PluginB({ opcaoB: "valor" });
Da mesma forma, você está criando uma instância da classe PluginB com uma configuração diferente { opcaoB: "valor" }.
A instância resultante é armazenada na variável instanciaPluginB.

Resumindo, 
as linhas mencionadas estão criando dinamicamente duas classes de plugins (PluginA e PluginB) usando a função criarClasseDePlugin, e, 
em seguida, estão instanciando essas classes para criar objetos específicos (instanciaPluginA e instanciaPluginB) com diferentes configurações.

*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3-B")

//Exemplo 5: 

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 6: 


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")