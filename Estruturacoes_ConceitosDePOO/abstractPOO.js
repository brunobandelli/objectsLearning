/*ABSTRACT*/

/*
Classes abstratas são classes que não podem ser instanciadas diretamente e 
geralmente contêm métodos abstratos (métodos sem implementação). 
Elas servem como modelos para outras classes derivadas, que devem implementar os métodos abstratos definidos na classe abstrata. 
Em JavaScript, que é uma linguagem orientada a objetos baseada em protótipos, não existe uma construção de classe abstrata nativa, 
mas é possível simular esse conceito.
*/

//Exemplo 1: Abstração de classe simples.

class Mercado {
    constructor(produto){
        //Assim a classe se tornará abstrata, não sendo possivel instancia-lá.
        if(new.target === Mercado){ //Ou você pode optar pela maneira antiga: this.constructor === Veiculo, porém a atual é mais confiavel.
            throw new TypeError("Mercado é uma classe abstrata e não pode ser instanciada diretamente.")
        }
        this.produto = produto
    }
}

class Pratileira extends Mercado {
    constructor(setor, produto){
        super(produto);
        this.setor=setor
    }

    localizacao(){
        console.log(`O produto ${this.produto} está localizado na pratileira do setor de ${this.setor}`)
    }
}

// Tentativa de instanciar a classe abstrata (gerará um erro)
//const mercado = new Mercado("Laranja") // Erro: Mercado é uma classe abstrata e não pode ser instanciada diretamente.

const pratileira = new Pratileira("frutas", "laranja")
pratileira.localizacao() //Output: O produto laranja está localizado na pratileira do setor de frutas


/*
Diferente formas de verificar a identidade do construtor:

•new.target === ClassAbstract
O operador new.target é uma referência ao construtor chamado. Ele retorna undefined fora de uma função chamada com new.
Essa abordagem verifica diretamente se o construtor chamado é igual ao construtor desejado (ClassAbstract).
A utilização de new.target é uma característica mais moderna introduzida no ECMAScript 6 (ES6) e 
pode ser preferida em cenários mais avançados ou quando se deseja aproveitar as funcionalidades específicas do ES6. 
No entanto, é importante notar que a compatibilidade com navegadores mais antigos pode ser uma consideração ao escolher esta abordagem.

•this.constructor === ClassAbstract
Essa abordagem verifica se o construtor da instância é o mesmo que o construtor desejado (ClassAbstract).
Pode ser menos confiável em casos de herança complexa, pois depende do valor correto para this.constructor.
A verificação this.constructor === ClassAbstract é menos comum e pode ser menos confiável em cenários de herança complexa. 
Ela depende do valor de this.constructor, que pode ser modificado.

*/


console.log("----------------------------------------------------------------------------------------------------------1")
/*------------------------------------------------------------------------------------------------------------------------*/


//Exemplo 2: Abstração de classe, com implementação de metodo necessária caso uso.


// Definindo uma "classe abstrata" em JavaScript (simulação)
class Animal {
    constructor(nome) {
      if (this.constructor === Animal) { //Ou você pode optar pela maneira atual e confiavel: new.target === Animal
        throw new Error("Não é possível instanciar uma classe abstrata");
      }
  
      this.nome = nome;
    }
  
    // Dessa maneira NÃO é obrigatorio implementar o metodo dentro da classe, mas não será possivel chamar a função pela instancia.
    emitirSom() {
      throw new Error("Método abstrato não implementado");
    }

  }
  
  // Classe derivada que implementa o método abstrato
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome);
    }
  
    // Implementação do método abstrato
    emitirSom() {
      return this.nome + " diz Au Au!";
    }

    getNome(){
        return this.nome
    }
  }
  
  class Gato extends Animal{
    constructor(nome){
        super(nome)
    }

    // Se tiver esse meétodo abaixo, irá gera o erro: "Método abstrato não implementado"
    emitirSom(){
        return this.nome + " diz Miaww!"
    }
  }
  // Criando uma instância da classe derivada
  const meuCachorro = new Cachorro("Buddy");
  const meuGato = new Gato("Spike")
  
  // Chamando o método implementado
  console.log(meuCachorro.emitirSom()); // Saída: Buddy diz Au Au!
  console.log(meuGato.emitirSom()) // Saída: Spike diz Miaww!

console.log("----------------------------------------------------------------------------------------------------------2")
/*------------------------------------------------------------------------------------------------------------------------*/


//Exemplo 3: Abstração com classe, com metodo e propriedade obrigatórios.

class Veiculo {
    constructor(marca, ano) {
      //Assim a classe se tornará abstrata, não sendo possivel instancia-lá.
      if (new.target === Veiculo) { 
        throw new TypeError("Veiculo é uma classe abstrata e não pode ser instanciada diretamente.");
      }
      this.marca = marca;

  
    /*
    *Metodo ou Propriedade Obrigatória dentro da classe derivada:

    Se você quiser, você pode tornar metodos ou propriedades obrigatórias, 
    Se você deseja garantir que certos métodos e propriedades sejam obrigatoriamente implementados nas classes derivadas, 
    é comum realizar essa verificação dentro do construtor. 
    Isso permite que a verificação seja feita no momento da criação da instância da classe, 
    assegurando que os métodos obrigatórios estejam presentes.
    
    Como abaixo:
    */

    //Verificando se o método e propriedade foi implementada na classe derivada

      //Metodo se torna obrigatório dentro da classe derivada.
      if (this.acelerar === undefined) {
        throw new TypeError("É obrigatório implementar o método acelerar.");
      }
  
      //Propriedade se torna obrigatório dentro da classe derivada.
      if (ano === undefined) {
        throw new TypeError("É obrigatório fornecer a propriedade 'ano'.");
      }
  
      this.ano = ano;

      /*

      */

    }

    /* 
    *Método Necessário apenas se for chama-lo pela instância:

    Dessa maneira NÃO é obrigatorio implementar o metodo dentro da classe, 
    porem não será possivel chamar a função pela instancia.
    dessa maneira não tem necessidade de implementar o metodo dentro do constructor.
    Portanto se torna necessario apenas se for utilizar o metodo da classe Pai.
    Como abaixo:
    */
   
    //Método se torna necessário apenas se for chama-lo na instância.
    emitirSom() { 
        throw new Error("Método abstrato não implementado");
    }
  }
  
  class Automotivo extends Veiculo {
    constructor(marca, modelo, ano) {
      super(marca, ano);
      this.modelo = modelo;
    }
  
    //Mesmo que não faça nada, será obrigatorio implementar o metodo acelerar(){}
    acelerar() { 
      return `${this.marca} ${this.modelo} (${this.ano}) acelerando!`;
    }

    emitirSom(){
        console.log("Vruuuuuuum")
    }
  }
  
  // Exemplo de uso
  
  // Tentativa de instanciar a classe abstrata (gerará um erro)
  // const veiculo = new Veiculo("Toyota", 2023); // Erro: Veiculo é uma classe abstrata e não pode ser instanciada diretamente.
  
  // Tentativa de instanciar a classe derivada sem fornecer a propriedade 'ano' (gerará um erro)
  // const meuVeiculo = new Automotivo("Toyota", "Corolla"); // Erro: É obrigatório fornecer a propriedade 'ano'.

  // Tentativa de instanciar a classe derivada sem implementar o metodo 'acelerar' (gerará um erro)
  // const meuVeiculo = new Automotivo("Toyota", "Corolla", 2023); // Erro: É obrigatório implementar o método acelerar.

  // Tentativa de instanciar a classe derivada sem implementar o metodo 'emitirSom' (NÃO gerará um erro, porém se tentar chamar o método sem intanciar SIM)
  // meuAutomotivo.emitirSom(); // Erro: Método abstrato não implementado.
  
  // Criando uma instância da classe derivada
  const meuAutomotivo = new Automotivo("Toyota", "Corolla", 2023);
  
  // Chamando o método implementado
  console.log(meuAutomotivo.acelerar()); // Saída: Toyota Corolla (2023) acelerando!
  meuAutomotivo.emitirSom() // Saída: Vruuuuuuum
  

console.log("----------------------------------------------------------------------------------------------------------3")
/*------------------------------------------------------------------------------------------------------------------------*/


//Exemplo 4: Abstração com classe, Carro.

class CarroPadrao{
    constructor(){
        if (this.constructor===CarroPadrao) { //ASSIM NÓS TORNAMOS A CLASSE EM ABSTRATA.
            throw new TypeError("Esta classe não pode ser instanciada")  
        }
        if(this.ligar===undefined){ //SE VOCÊ QUISER, VC PODE TORNAR UMA PROPRIEDADE OU METODO OBRIGATÓRIO.
            throw new TypeError("É Obrigatório implementar o método ligar")
        }
        this.portas=4
        this.rodas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="Normal"
        }else if(tipo==2){
            this.velMax=160
            this.nome="Esportivo"
        }else if(tipo==3){
            this.velMax=200
            this.nome="Super Esportivo"
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel. Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Ligado: ${this.ligado?"Sim":"Não"}`)
        console.log("------------------")
    }
    ligar(){} // MESMO QUE NÃO FAÇA NADA, SERÁ OBRIGATÓRIO IMPLEMENTAR O METODO LIGAR AGORA, SE NÃO DARA ERRO.


}


class Turbo{
    constructor(e){
        if(e===0){
            this.pot=0
        }else if(e===1){
            this.pot=50
        }else if(e===2){
            this.pot=75
        }else if(e===3){
            this.pot=100
        }
    }
}


class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=1
        this.velMax=300+this.turbo.pot
        this.nome="Carro Especial"
    }
    info(){
        if(this.tipoInfo==1){
            super.info()
        }else{
            console.log(`Nome...: ${this.nome}`)
            console.log(`Vel. Max: ${this.velMax}`)
            console.log(`Turbo...: ${this.turbo.pot}`)
            console.log("------------------")
        }
        
    }
}



const c1= new Carro(1,0)
const c2= new Carro(1,1)
const c3= new CarroEspecial(3)
// const c4= new CarroPadrao() // IRÁ GERAR UM ERRO, POIS CLASSES ABSTRATAS NÃO PODEM SER INSTANCIADAS

c1.info()
c2.info()
c3.info()

console.log("----------------------------------------------------------------------------------------------------------4")
/*------------------------------------------------------------------------------------------------------------------------*/

/*
*********************************
CONTINUAR PESQUISA, A RESPEITO DE ABSTRAÇÃO EM FUNCTION CONSTRUCTOR.
E COMO FUNCIONA PARA POR METODOS E PROPRIEDADES OBRIGATORIAS OU NECESSARIAS ASSIM COMO CLASSES.
*********************************
*/


//Exemplo 5: Abstração com Function Construction.

// Função construtora "abstrata"
function VeiculoF(marca) {
    if (this.constructor === VeiculoF) {
      throw new TypeError("Veiculo é uma função construtora abstrata e não pode ser instanciada diretamente.");
    }
  
    this.marca = marca;
  
    // Método abstrato
    this.acelerar = function() {
      throw new Error("Método abstrato 'acelerar' não implementado.");
    };
  
    // Método abstrato
    this.freiar = function() {
      throw new Error("Método abstrato 'freiar' não implementado.");
    };
  }
  
  // Função construtora derivada
  function CarroF(marca, modelo) {
    // Chama o construtor da classe pai (Veiculo)
    VeiculoF.call(this, marca);
    
    this.modelo = modelo;
  
    // Implementa o método abstrato acelerar
    this.acelerar = function() {
      console.log(`O carro ${this.marca} ${this.modelo} está acelerando.`);
    };
  
    // Implementa o método abstrato freiar
    this.freiar = function() {
      console.log(`O carro ${this.marca} ${this.modelo} está freando.`);
    };
  }
  
  // Criando uma instância de Carro
  const meuCarroF = new CarroF('Toyota', 'Corolla');
  
  // Chamando métodos da classe base
  console.log(meuCarroF.marca); // Saída: Toyota
  
  // Chamando métodos da classe derivada
  meuCarroF.acelerar(); // Saída: O carro Toyota Corolla está acelerando.
  meuCarroF.freiar();   // Saída: O carro Toyota Corolla está freando.
  
  // Tentativa de instanciar a classe base (Veiculo)
  // Isso lançará um erro
  
  try {
    const veiculoF = new VeiculoF('Desconhecida');
  } catch (error) {
    console.error(error.message); // Saída: Veiculo é uma função construtora abstrata e não pode ser instanciada diretamente.
  }
  


console.log("----------------------------------------------------------------------------------------------------------5")
/*------------------------------------------------------------------------------------------------------------------------*/

