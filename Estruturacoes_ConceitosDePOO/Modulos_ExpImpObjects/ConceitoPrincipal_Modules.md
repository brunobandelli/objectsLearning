````Javascript

Em programação orientada a objetos (POO) em JavaScript, 
a ideia de módulos refere-se à capacidade de organizar e encapsular código em unidades independentes e reutilizáveis. 
Isso é particularmente útil para gerenciar a complexidade de grandes projetos, 
promover a reutilização de código e facilitar a manutenção.

Com os módulos em JavaScript (seja utilizando a abordagem antiga CommonJS ou a abordagem moderna ES6), 
você pode importar e exportar várias partes de código, incluindo variáveis, funções, classes, arrays e objetos.
A sintaxe para importar e exportar é bastante flexível e é consistente, 
independentemente de tipo de entidade que você está manipulando.

★★★★★★★★★★★★★★★★★
★★★EXEMPLOS SLIMPLES★★★
★★★★★★★★★★★★★★★★★

••••••••••••••••••••
•••MANEIRA ANTIGA•••
••••••••••••••••••••
// moduloAntigo.js // Modulo que será exportado
var minhaFuncao = function() {
    console.log("Olá do módulo antigo!");
};
module.exports = minhaFuncao;

// principalImport.js // Modulo que importara o modulo exportado
var funcaoImportada = require('./moduloAntigo');
funcaoImportada();


•••••••••••••••••••
•••MANEIRA ATUAL•••
•••••••••••••••••••
Em JavaScript, quando você está trabalhando com módulos ES6, 
a extensão de arquivo normalmente é .mjs para indicar explicitamente que o arquivo contém código de módulo. 
Isso é necessário quando você está utilizando a extensão tradicional .js para scripts, 
e deseja que um arquivo seja interpretado como um módulo.

Se você estiver usando a sintaxe de módulo ES6 com import e export, 
é recomendável usar a extensão .mjs para indicar que o arquivo é um módulo.
*/


// modulo.mjs
export const minhaFuncao = () => {
    console.log("Olá do novo módulo!");
};


// principalNovoImport.mjs
import { minhaFuncao } from './modulo';
minhaFuncao();


•••••••••••••••••••••••••••••••
•••Modulos em aplicação WEB•••
•••••••••••••••••••••••••••••••
Em uma aplicação web básica que utiliza HTML e JavaScript no navegador, 
a extensão .mjs não é necessária porque os navegadores modernos reconhecem scripts com a sintaxe de módulo ES6 
diretamente a partir de arquivos com a extensão .js. 

Os navegadores estão cada vez mais suportando nativamente os módulos ES6, 
o que significa que você pode usar a sintaxe de módulo em arquivos JavaScript padrão
sem a necessidade da extensão .mjs.

Ao usar módulos no navegador, 
você deve incluir scripts com a tag type="module":
<script type="module" src="seuarquivo.js"></script>

No seu HTML. A tag type="module" indica ao navegador que o script deve ser tratado como um módulo, 
permitindo o uso de import e export no código JavaScript.


//Documento.html
<!DOCTYPE html>
...
<body>
    <script type="module" src="meuarquivo.js"></script>
</body>
</html>


Arquivo modulo sem a extensão mjs

// meuarquivo.js
import { minhaFuncao } from './moduloNovo';

minhaFuncao();


OBS:
NO MODO ANTIGO, NÃO PRECISA POR tag type="module" no HTML e nem extensão .mjs tanto no arquivo principal, 
quanto nos arquivos a serem importados.



★★★★★★★★★★★★★★★★★★★★★★★★★★★
★★★MANEIRAS DE EXPORTAR E IMPORTAR★★★
★★★★★★★★★★★★★★★★★★★★★★★★★★★

••••••••••••••••
•••EXPORTANDO•••
••••••••••••••••

1.Exportação Direta ao Chamar a Função.:

// modulo.js
export function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

/*------------------------------------------------------------------------------------------------------------*/
2.Exportação no Final de Código.:

// modulo.js
function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

// Exportação no final do código
export { minhaFuncao };

/*------------------------------------------------------------------------------------------------------------*/
3.Exportação com Default.:
//Só pode ter uma exportação declarada como default
// modulo.js
export default function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

/*------------------------------------------------------------------------------------------------------------*/
4.Na forma antiga, de qualquer maneira a exportação será assim.:

// modulo.js
function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

// Exportação direta ao chamar a função
module.exports = minhaFuncao;

••••••••••••••••
•••IMPORTANDO•••
••••••••••••••••

1.Importação Nomeada.:
// principal.js
import { minhaFuncao } from './modulo.js';
minhaFuncao(); // Chama a função importada

/*------------------------------------------------------------------------------------------------------------*/
2.Importação com Default.:
A importação de valor padrão não exige que você use chaves {}. 
Em vez disso, você pode escolher qualquer nome para a entidade importada contanto que tenha o default na exportação,
e apenas para o default.


// modulo.js
export default function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

// principal.js
import qualquerNome from './modulo.js'; 
qualquerNome(); // Chama a função importada

/*------------------------------------------------------------------------------------------------------------*/
3.Importando Padrão e Nomeado.:
// modulo.js
const mensagemPadrao = "Olá do módulo!";
const outraMensagem = "Outra mensagem!";

export { outraMensagem }; // Exportação nomeada
export default mensagemPadrao; // Exportação padrão

// principal.js
import minhaMensagemPadrao, { outraMensagem } from './modulo.js';

console.log(minhaMensagemPadrao); // Saída: Olá do módulo!
console.log(outraMensagem); // Saída: Outra mensagem!

/*------------------------------------------------------------------------------------------------------------*/
4.Importação com Alias.:
O uso de alias, ou renomeação de imports/exports, 
é uma prática comum em JavaScript para fornecer nomes mais concisos ou 
significativos para as entidades importadas/exportadas. Isso pode ser útil para reduzir a verbosidade do código, 
evitar conflitos de nome e melhorar a legibilidade.

Ao realizar um import, você pode atribuir um nome diferente à entidade importada usando a palavra-chave as. 
Isso cria um alias para a entidade original.

// principal.js
import { minhaFuncao as funcaoImportada } from './modulo.js';
funcaoImportada(); // Chama a função importada usando o alias

Essa prática é útil ao lidar com bibliotecas ou módulos de terceiros, 
onde os nomes podem ser extensos ou não tão descritivos.

Em resumo, o uso de alias oferece flexibilidade e clareza no código, 
permitindo que você forneça nomes mais curtos ou significativos para entidades importadas/exportadas. 
Isso pode melhorar a legibilidade e facilitar a manutenção de código.

Alias em Exports.:
Ao exportar, você pode usar a palavra-chave as para renomear a entidade exportada.

// modulo.js
const algumaVariavel = "Olá do módulo!";
export { algumaVariavel as mensagem };

/*------------------------------------------------------------------------------------------------------------*/
5.Importação de Todas as Entidades (Importação de Namespace).:
Quando você coloca um * no alias durante um import, 
você está realizando uma  importação de todos os membros disponíveis do módulo e 
atribuindo esses membros a um único objeto. Isso é chamado de importação com "namespace" (espaço de nomes).

// modulo.js
export const variavel1 = "Valor 1";
export const variavel2 = "Valor 2";


// principal.js
import * as modulo from './modulo.js';
console.log(modulo.variavel1); // Saída: Valor 1
console.log(modulo.variavel2); // Saída: Valor 2

/*------------------------------------------------------------------------------------------------------------*/
6.Importação de Módulos do Node.js (CommonJS)(ANTIGA):
//Na forma antiga de qualquer maneira a importação será assim.:
// modulo.js
function minhaFuncao() {
    console.log("Olá da função no módulo!");
}

module.exports = minhaFuncao;


// principal.js
const funcaoImportada = require('./modulo.js');
funcaoImportada(); // Chama a função importada usando o CommonJS


````