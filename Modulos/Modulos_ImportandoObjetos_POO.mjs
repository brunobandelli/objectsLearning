/*MODULOS - IMPORTANDO OBJETOS*/

/*
VERSÃO ES6
Em versões mais recentes do Node.js (a partir da versão 13 e posteriores), os módulos ES6 são suportados por padrão. 
*/


// OutroArquivo.mjs
import Pessoa from './Modulos_ExportandoObjetos_POO.mjs'; // Importa o módulo Pessoa

const pessoa = new Pessoa("Bruno", 29);
pessoa.saudacao();

/*
VERSÃO ANTES DO ES6
Agora, em outro arquivo JavaScript, você pode importar o módulo usando o require. 
Suponha que você tenha um arquivo chamado OutroArquivo.js:
OBS:mudar a extensão para .js
*/

// // OutroArquivo.js
// const Pessoa = require('./Modulos_ExportandoObjetos_POO'); // Importa o módulo Pessoa

// const pessoa = new Pessoa("Maria", 25);
// pessoa.saudacao();
