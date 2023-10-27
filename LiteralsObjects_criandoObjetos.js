/*OBJETOS LITERIAS*/

const Pessoa={
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome="Euréca!"
p2["nome"]="Jeckerson"
Pessoa.setNome("Blasterman")
Pessoa.setIdade(29)

console.log(Pessoa.nome)
console.log(Pessoa.idade)
console.log(p2.getNome())
console.log(p2.getIdade())
console.log(p3.nome)
console.log(p3.idade)