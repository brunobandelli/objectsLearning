/*Encapsulamento*/

/*
O uso do símbolo # para criar propriedades privadas oferece uma maneira mais segura de encapsular dados em uma classe, 
tornando essas propriedades inacessíveis de fora da classe, o que ajuda a garantir a integridade e a segurança dos dados.

Antigamente, era comum usar o caractere sublinhado _ como uma convenção para indicar propriedades privadas. 
No entanto, essa prática era principalmente simbólica e não fornecia uma proteção real contra o acesso externo. 
O sublinhado servia principalmente para comunicar a outros desenvolvedores que se tratava de uma propriedade privada.

É importante observar que o símbolo # é projetado para criar campos de classe privados e não pode ser aplicado a métodos. 
Para métodos privados, a convenção mais comum é usar o sublinhado _ como prefixo, 
mas tenha em mente que isso é uma prática de nomenclatura e não fornece proteção real contra acesso externo.

Em resumo, a principal diferença entre o uso de sublinhados _ e o símbolo #:
Os sublinhados são uma convenção que indica que uma propriedade é considerada privada,mas não impede o acesso direto a ela.
Enquanto o símbolo # oferece uma verdadeira encapsulação, tornando as propriedades de classe inacessíveis a partir do exterior da classe."
*/

//Exemplo 1: Encapsulamento com #

class PessoaComCerquilha {
    #nome; // Propriedade privada
  
    constructor(nome) {
      this.#nome = nome;
    }
  
    getNome() {
      return this.#nome;
    }
  }
  
  const pessoa2 = new PessoaComCerquilha("Bob");
//   console.log(pessoa2.#nome); // Isso gera um erro, pois #nome é privado
  console.log(pessoa2.getNome()); // Acesso através de método (recomendado)
  
/* 
O uso de # torna a propriedade #nome verdadeiramente privada e inacessível fora da classe.
Sendo possivel acessar apenas de forma indireta através de um metodo, como nesse caso: getNome().
*/

console.log("----------------------------------------------------------------------------------------------------------1")
/*----------------------------------------------------------------------------------------------------------------------*/


/* GETTERS E SETTERS*/

/*
Getters e setters são métodos especiais em classes ou 
objetos que permitem controlar o acesso e a modificação de propriedades. 
Eles são usados para encapsular o acesso a dados e realizar ações específicas antes ou depois de ler ou 
gravar valores em uma propriedade. Em JavaScript, você pode usar getters e 
setters para criar uma camada de abstração sobre as propriedades de um objeto, 
garantindo assim uma manipulação segura e consistente dos dados.

Getters: 
Um getter é um método que permite a leitura de uma propriedade de um objeto como se fosse uma propriedade comum. 
Ele é definido usando a palavra-chave get seguida do nome da propriedade desejada. 
Um getter é uma função que não recebe parâmetros. 
Veja um exemplo:
*/

//Exemplo 2: Encapsulamento com Getters

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
  
console.log("----------------------------------------------------------------------------------------------------------2")
/*------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 3: Encapsulamento com Setters e Getters

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
  console.log(pessoaDoias.nome); // "Alice"
  
  pessoaDoias.nome = "Bob"; // Usando o setter para definir o nome
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

console.log("----------------------------------------------------------------------------------------------------------3")
/*------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 4: Encapsulamento usando Getters e Setters

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
  

console.log("----------------------------------------------------------------------------------------------------------4")
/*------------------------------------------------------------------------------------------------------------------------*/