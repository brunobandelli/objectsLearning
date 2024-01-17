/*POLIMORFISMO COM CLASSES CONSTRUTORAS*/

/* 
O Polimorfismo em JS pode ser alcançado através da manipulação dinâmica de objetos, sobrescrita de métodos e funções,
permitindo que objetos de diferentes classes respondam ao mesmo método ou propriedade de maneira única. 

O foco principal do polimorfismo é a capacidade de tratar objetos de diferentes classes de maneira uniforme 
através de interfaces comuns, como métodos com o mesmo nome. Em JavaScript, 
essa abordagem promove flexibilidade e reutilização de código, 
mesmo que os métodos sobrescritos não compartilhem diretamente o mesmo espaço de memória.

Dessa forma, o polimorfismo não está intrinsecamente ligado à economia de espaço de memória pelo 
compartilhamento direto de recursos entre métodos sobrescritos, mas sim à capacidade de criar código mais flexível e 
genérico, onde objetos de diferentes tipos possam ser tratados de maneira homogênea.

*/

//Exemplo 1: Polimorfismo simples com Class Constructor.

class Animal {
  fazerBarulho() {
    console.log("Barulho genérico de animal");
  }
}

class Cachorro extends Animal {
  fazerBarulho() {
    console.log("Latindo...");
  }

  procurar(){
    console.log("procurando bola")
  }

}

class Gato extends Animal {
  fazerBarulho() {
    console.log("Miando...");
  }
}

// Criando instâncias das classes
const meuAnimal = new Animal();
const meuCachorro = new Cachorro();
const meuGato = new Gato();

// Chamando o método diretamente em cada instância
meuAnimal.fazerBarulho();   // Saída: Barulho genérico de animal
meuCachorro.fazerBarulho(); // Saída: Latindo...
meuGato.fazerBarulho();     // Saída: Miando...

/*
Observe,e estamos chamando os métodos com o mesmo nome em instancias de diferentes classes, 
apesar de usarmos o mesmo nome de método (fazerBarulho()), cada classe fornece uma implementação única e especifica.
Este fenômeno exemplifica o conceito de polimorfismo em JS, 
onde objetos de disferentes classes podem ser tratados de maneira uniforme, 
permitindo a execução de comportamentos especificos para cada classe sem interferencia.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Intrumentos em tocar(). Polimorfismo simples com Class Constructor.

class Instrumento {
    tocar() {
      console.log("Tocando instrumento...");
    }
  }
  
  class Guitarra extends Instrumento {
    tocar() {
      console.log("Tocando guitarra...");
    }
  }
  
  class Piano extends Instrumento {
    tocar() {
      console.log("Tocando piano...");
    }
  }
  
  const meuInstrumento = new Instrumento();
  const minhaGuitarra = new Guitarra();
  const meuPiano = new Piano();
  
  meuInstrumento.tocar();   // Saída: Tocando instrumento...
  minhaGuitarra.tocar();    // Saída: Tocando guitarra...
  meuPiano.tocar();         // Saída: Tocando piano...
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Carro em info(). Polimorfismo simples com Class Constructor.

class CarroP{
    constructor(tipo, estagioTurbo){
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
        console.log("------------------")
    }


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


class CarroEspecial extends CarroP{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=0
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



const c1= new CarroP(1,0)
const c2= new CarroP(1,1)
const c3= new CarroEspecial(3)

c1.info()
c2.info()
c3.info()

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")









