````Javascript
-------------------------------------------SOLID-------------------------------------------------

SOLID é um conjunto de princípios de design de software orientado a objetos que visam criar sistemas mais compreensíveis, flexíveis e fáceis de manter. Cada letra de acrônimo representa um princípio específico.:

S - Single Responsibility Principle (Princípio da Responsabilidade Única): 

Uma classe deve ter apenas um motivo para mudar.
Isso significa que uma classe deve ter apenas uma responsabilidade ou função no sistema. Se uma classe tem mais de uma razão para ser modificada, pode se tornar mais difícil de entender e manter.

O - Open/Closed Principle (Princípio Aberto/Fechado):

Uma classe deve estar aberta para extensão, mas fechada para modificação.
Isso incentiva a criação de código que pode ser estendido sem modificar seu código fonte. Novos recursos podem ser adicionados por meio de herança ou implementação de interfaces, sem alterar o código existente.

L - Liskov Substitution Principle (Princípio da Substituição de Liskov): 

As instâncias de uma classe base devem ser substituíveis por instâncias de suas classes derivadas sem afetar a integridade do programa.
Isso significa que, se uma classe B é uma subclasse de A, então objetos do tipo A podem ser substituídos por objetos do tipo B sem afetar o comportamento do programa.

// Classe base A
class A {
  metodo() {
    return "Método da classe A";
  }
}

// Subclasse B, que estende a classe A
class B extends A {
  metodo() {
    return "Método da classe B";
  }
}

// Função que recebe um objeto do tipo B e chama o método
function chamarMetodo(objetoLetra) {
  return objetoLetra.metodo();
}

// Criando uma instância de A
const objetoA = new A();
console.log(chamarMetodo(objetoA)); // Saída: "Método da classe A"

// Criando uma instância de B
const objetoB = new B();
console.log(chamarMetodo(objetoB)); // Saída: "Método da classe B"


I - Interface Segregation Principle (Princípio da Segregação de Interfaces):

Uma classe não deve ser forçada a implementar interfaces que ela não usa.
Isso evita que As classes tenham que implementar métodos que não são relevantes para elas. Em vez disso, As interfaces devem ser divididas em interfaces menores e mais específicas.

D - Dependency Inversion Principle (Princípio da Inversão de Dependência): 

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
Isso incentiva o uso de interfaces ou classes abstratas para desacoplar módulos de software, tornando o sistema mais flexível e fácil de modificar.

Esses princípios fornecem diretrizes valiosas para o desenvolvimento de software que é mais fácil de entender, manter e estender.

````