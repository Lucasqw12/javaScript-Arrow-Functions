class Animal{
    constructor(nome, dataNascimento, raca){
this.nomeAnimal = nome
this.dataNascimentoAnimal = dataNascimento
this.racaAnimal = raca 
    }
    exibirDadosAnimal(tipoAnimal){
        console.log("O " + tipoAnimal + " tem o nome de: " + this.nomeAnimal + " a data de nascimento é: " + this.dataNascimentoAnimal + " a raça é : " + this.racaAnimal) 
       
    }
}
const gato = new Animal ("ovudo,22/06/2014,Persa")
const cachorro = new Animal ("caramelo,22/06/2014,Golden")
const Passaro = new Animal ("braçoCurto,22/06/2014,Urubu")

gato.exibirDadosAnimal("gato")
cachorro.exibirDadosAnimal("cachorro")
Passaro.exibirDadosAnimal("passaro")
