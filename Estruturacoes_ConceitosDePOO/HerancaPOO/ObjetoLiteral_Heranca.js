/*Herança com Objetos Literais*/

/*
Também é possivel simular heranças com objetos literais, embora essa abordagem funcione, 
é importante notar que a herança em objetos literais pode se tornar complexa à medida que a estrutura do código cresce. 
Classes e funções construtoras são frequentemente preferidas para criar hierarquias de objetos em POO, 
proporcionando uma sintaxe mais clara e organizada.
Em baixo, alguns exemplos de Heranças com Objetos Literais:
*/


//Exemplo 7: Herança com Objeto Literal com Object.create().

// Objeto pai
const paiOL = {
    nome: "Pai",
    apresentar: function() {
      console.log("Meu nome é " + this.nome);
    }
  };
  
  // Objeto filho que herda de pai
  const filhoOL = Object.create(paiOL);
  filhoOL.nome = "FilhoOL";
  filhoOL.apresentar();  // Saída: Meu nome é Filho
  
  /*
  OBS:
  A função Object.create() permite criar um novo objeto com um protótipo especificado.
  Isso possibilita a herança prototípica.
  */
  
  
  /*------------------------------------------------------------------------------------------------------------------------*/
  console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")
  
  //Exemplo 8: Herança com Objeto Literal com Atribuição Direta.
  
  // Objeto pai
  const paiOL2 = {
    nome: "Pai",
    apresentar: function() {
      console.log("Meu nome é " + this.nome);
    }
  };
  
  // Objeto filho que herda de pai
  const filhoOL2 = {
    nome: "FilhoOL2"
  };
  
  // Herança de método
  filhoOL2.apresentar = paiOL2.apresentar;
  filhoOL2.apresentar();  // Saída: Meu nome é Filho
  
  /*
  OBS:
  Você pode atribuir propriedades diretamente a objetos filhos, criando uma cópia das propriedades do objeto pai.
  */
  
  /*------------------------------------------------------------------------------------------------------------------------*/
  console.log("-----------------------------------------------------------------------------------------------------Exemplo 8")