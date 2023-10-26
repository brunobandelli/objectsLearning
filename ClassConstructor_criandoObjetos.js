/*CRIANDO OBJETOS COM CLASSES CONSTRUTORAS */

/*Sintaxe:
As classes foram introduzidas no ECMAScript 6 (ES6) e fornecem uma sintaxe mais orientada a objetos. 
Você pode usar a palavra-chave class para definir uma classe e usar o método constructor para definir o construtor da classe.
A sintaxe é mais declarativa e semelhante a outras linguagens de programação orientada a objetos.

Herança:
As classes oferecem uma sintaxe mais clara para definir herança. 
Você pode estender outras classes usando a palavra-chave extends e 
usar o método super() para chamar o construtor da classe pai.
*/


//Exemplo 1: Criando objetos com classes construtoras e parametros

// A palavra-chave 'class' é usada para definir uma classe chamada 'Pessoa'
class Pessoa{                       
    // O constructor é um método especial que inicializa as propriedades da instância.
    // Neste caso, 'nome' é uma propriedade da instância da classe Pessoa.
    constructor(pnome){                    
        this.nome=pnome                  //Inicializa as propriedade
    }
}
 
// Criando uma instância (objeto) da classe 'Pessoa' com o nome 'Bruno'.
let p1= new Pessoa("Bruno")                 // Instanciando a classe com um nome específico.
let p2= new Pessoa("Bandelli")
let p3= new Pessoa("Vieira")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

/*
DEIXANDO CLARO:
Em JavaScript, uma classe em si não é um objeto, mas um modelo ou um plano para criar objetos. 
Uma classe é uma descrição da estrutura e do comportamento que os objetos criados a partir dela terão. 
Para criar um objeto real com base nessa classe, você precisa instanciá-la usando a palavra-chave new. 
A instância é o objeto concreto que segue o modelo definido pela classe.

Portanto, uma classe define como os objetos que serão criados a partir dela devem se parecer e 
quais propriedades e métodos eles terão. 
A criação de uma instância com new é o momento em que um objeto real é criado com base nessa definição de classe.

ANALOGIA:
class: É o Modelo, Como a planta da casa que descreve a estrutura da casa, onde os quartos estarão, as dimensões, etc.
constructor: Como as especificações de construção que definem os detalhes, como a cor das paredes, o tipo de piso, os móveis, etc.
Instância (objeto): A casa real construída com base na planta e nas especificações.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Criando objetos com classes construtoras, parametros e metodos.

class Carro {
    canal="Youtube"
    constructor(pnome, ptipo){
        this.nome=pnome
        // this.canal="Instagram"
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }
        else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }
        else {
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTIpo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }
    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max.: ${this.velmax}`)
        console.log(`Canal.: ${this.canal}`)
        console.log("--------------------------------")
    }
}

let c1= new Carro("Rapidão",1)
let c2= new Carro("Super Luxo",2)
let c3= new Carro("bombadão",4)
let c4= new Carro("Carrego tudo",3)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
c1.info()
c2.info()
c3.info()
console.log("--------------------------")
/*-----------------------------------------------------*/
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelMax())
console.log("--------------------------")
/*----------------------------------------------------*/
console.log(c1.getInfo())
console.log(c1.getInfo()[0])
console.log("--------------------------")
/*----------------------------------------------------*/
c1.setNome("Super Veloz")
c1.setTIpo("Luxo Esportivo Premium")
c1.setVelMax(500)
c1.info()




/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Utilizando membros Static.

/*
Os mebros estáticos pertencem à classe em si e não a instâncias específicas da classe.
Perceba que a invocar-lo você não chama a instancia e sim a classe.
*/

class Npc{
    static alerta=false
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log("------------------------------------")
    }
    static alertar=function(){
        Npc.alerta=true
    }
}

const npc1= new Npc(100)
const npc2= new Npc(80)
const npc3= new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()

/*
Os membros estáticos, sejam eles métodos ou propriedades, 
pertencem à classe como um todo, em oposição às instâncias específicas da classe. 
Eles são compartilhados entre todas as instâncias da classe e são chamados diretamente na classe, 
não em instâncias individuais.
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Utilizando Prototype para adicionar propriedades e metodos.

/*
A propriedade prototype é usada para adicionar propriedades e 
métodos que podem ser compartilhados por todas as instâncias criadas a partir dessa função construtora.
*/

class Nave {
    constructor(energia) {
      this.energia = energia;
      this.disparos = 3;
    }
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
  
console.log(Nave)
console.log(Nave.prototype) //OBSERVE
console.log(n1) //OBSERVE
console.log(n1.vidas)
console.log(n1.disparos)
  
/*OBSERVE OS 2 COMENTARIOS ACIMA (//OBSERVE):
  Observe que ao usar console.log em n1, os novos membros criados pelo prototype não serão exibidos diretamente na instância. 
  Isso ocorre porque esses membros estão associados ao prototype da classe(Nave) em geral, não a instâncias individuais. 
  Para visualizá-los, é necessário acessá-los através do prototype da classe, como em Nave.prototype. 
*/
  
/*
  A propriedade prototype permite compartilhar métodos entre todas as instâncias criadas a partir da mesma função construtora. 
  É uma maneira eficiente de evitar a duplicação de métodos em cada instância e economizar espaço na memória.
  
  Portanto, o prototype é uma propriedade especial que pertence à função construtora e não a uma instância específica. 
  Ela permite que você defina métodos que estão disponíveis para todas as instâncias criadas a partir dessa função.
  
  RESUMINDO:
  Os métodos e propriedades criados usando a propriedade prototype pertencem à função construtora, 
  não a instâncias específicas. Eles são compartilhados por todas as instâncias criadas a partir dessa função construtora, 
  o que os torna acessíveis a todas as instâncias, mas eles ainda pertencem à classe em geral.
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: 
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: 


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")