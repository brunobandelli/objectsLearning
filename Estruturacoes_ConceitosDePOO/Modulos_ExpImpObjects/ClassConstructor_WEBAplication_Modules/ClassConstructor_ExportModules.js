class MeuNome {
    constructor(){
        this.nome = "Bruno"
    }

    diz = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const meuNome = new MeuNome

// export default meuNome
module.exports = meuNome