/*ABSTRACT*/

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
