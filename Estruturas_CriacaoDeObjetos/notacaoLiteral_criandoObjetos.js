/*OBJETOS LITERIAS*/

/*
A notação literal em programação orientada a objetos (POO) se refere à forma como você pode criar e 
inicializar objetos diretamente no código, sem a necessidade de usar construtores ou classes. 
Em JavaScript, essa notação é conhecida como "notação literal de objetos". 
A notação literal é uma maneira concisa e conveniente de criar objetos.

A notação literal oferece uma maneira simples e direta de criar e inicializar objetos, 
especialmente útil quando você precisa de objetos ad-hoc para tarefas específicas. 
No entanto, para casos mais complexos, como a criação de várias instâncias de objetos com comportamentos compartilhados, 
classes e construtores podem ser mais apropriados.

SINTAXE BASICA:

const NomeObjeto = {
    propriedade1: "",
    propriedade2: "",
    metodo1: function() {
        // Código do método
    },
    metodo2() {
        // Código do método
    }
};

// Invocando as propriedades e métodos
const N1 = NomeObjeto;
console.log(N1.propriedade1); // Acessando propriedade1 usando a referência N1
console.log(NomeObjeto.propriedade1); // Acessando propriedade1 diretamente
N1.metodo1(); // Chamando método1 usando a referência N1
NomeObjeto.metodo1(); // Chamando método1 diretamente

OBSERVAÇÃO:
Perceba, na notação literal de objetos em JavaScript, quando você está criando um objeto diretamente, 
não há necessidade de usar this, new ou um construtor. 
Esses elementos estão mais associados à criação de objetos usando funções construtoras ou classes.

*/

//Exemplo 1: Criando objeto com parametros e metodos.


const Pessoa={
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade(idade){
        this.idade=idade
    }
}

const p1 = Pessoa
const p2 = Pessoa

p2.nome="Euréca!"
p1["nome"]="Jeckerson"
Pessoa.setNome("Blasterman")
Pessoa.setIdade(29)

console.log(Pessoa.nome)    //Output: Blasterman
console.log(Pessoa.idade)   //Output: 29
console.log(p1.getNome())   //Output: Blasterman
console.log(p1.getIdade())  //Output: 29
console.log(p2.nome)        //Output: Blasterman
console.log(p2.idade)       //Output: 29

/*
IMPORTANTE:
Observe quando você atualiza uma propriedade diretamente ou por meio de uma referência a esse objeto, 
a alteração é refletida em todas as referências para o mesmo objeto. 
Isso ocorre porque as referências apontam para o mesmo local na memória.

Na notação literal de objetos em JavaScript, quando você atualiza o valor de uma chave em um objeto, 
essa alteração afeta todos os objetos criados usando a mesma estrutura. Em outras palavras, 
todos os objetos compartilham a mesma referência para a propriedade, o que pode levar a mudanças globais. 

Isso é diferente do comportamento observado ao usar classes ou funções construtoras, 
onde cada instância mantém suas próprias cópias independentes das propriedades.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Utilizando Prototype para adicionar propriedades e metodos.

/*
IMPORTANTE:
Em JavaScript, embora seja possível adicionar propriedades e métodos ao prototype de objetos criados por notação literal, 
essa prática não é convencional. Manipular diretamente o Object.prototype pode ter impactos globais, 
afetando todos os objetos no código e levando a comportamentos inesperados. 
Em vez disso, é preferível utilizar construtores de função ou classes para criar objetos com herança mais estruturada, 
garantindo uma organização mais clara do código e evitando efeitos colaterais indesejados em outras partes do programa. 
Essas abordagens oferecem um modelo mais controlado e legível para lidar com herança e encapsulamento em JavaScript.
*/

// Objeto literal
const carro1 = {
    modelo: "Fusca",
    ano: 1970
  };

const carro2 = {
    modelo: "HB20S",
    ano: 2015
}
  
  // Adicionando uma propriedade ao prototype
  Object.prototype.cor = "azul";
  
  // Adicionando um método ao prototype
  Object.prototype.exibirDetalhes = function() {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
  };
  
  // Chamando o método do prototype
  carro1.exibirDetalhes(); // Saída: Modelo: Fusca, Ano: 1970, Cor: azul
  carro2.exibirDetalhes(); // Saída: Modelo: HB20S, Ano: 2015, Cor: azul
  
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Adicionando propriedades e metodos em objetos especificos.(Alternativa sem recorrer a prototype)

/*
OBSERVAÇÃO:
Dessa maneira voce pode de adicionar propriedades e métodos diretamente a objetos específicos e individualmente sem recorrer 
ao uso explícito do prototype em Notação Literal.
Essa Abordagem é quando você quer adicionar funcionalidades específicas a objetos individuais e 
não precisa compartilhar essas funcionalidades entre diferentes instâncias de objetos.
Pode ser útil em cenários específicos, onde você deseja uma flexibilidade maior na estrutura de objetos e
não precisa de herança ou compartilhamento de métodos entre várias instâncias. Boa explicação!
*/

// Objeto literal
const car = {
    modelo: "Tesla",
    ano: 2023
  };
const owner = {
    nome: "Scott",
    idade: 21
  };
  
  car.color = "Silver"
  // Adicionando um método diretamente ao objeto
  car.exibirDetalhes = function() {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.color}`);
  };
  
  owner.eyes= "Blue"
  owner.exibirFicha = function(){
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Olhos: ${this.eyes}`)
  }
  console.log(car)
  console.log(owner)
  // Chamando o método adicionado diretamente
  car.exibirDetalhes(); // Saída: Modelo: Tesla, Ano: 2023, Cor: Silver
  owner.exibirFicha(); // Saída: Scott, Idade: 21, Olhos: Blue
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: 

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")