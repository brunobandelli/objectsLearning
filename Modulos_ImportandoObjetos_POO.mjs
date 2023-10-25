/*MODULOS - IMPORTANDO OBJETOS*/

// OutroArquivo.js
import Pessoa from './Modulos_ExportandoObjetos_POO.mjs'; // Importa o módulo Pessoa

const pessoa = new Pessoa("Bruno", 29);
pessoa.saudacao();

/*
Agora, em outro arquivo JavaScript, você pode importar o módulo usando o require. 
Suponha que você tenha um arquivo chamado OutroArquivo.js:
*/

// // OutroArquivo.js
// const Pessoa = require('./Modulos_ExportandoObjetos_POO'); // Importa o módulo Pessoa

// const pessoa = new Pessoa("Maria", 25);
// pessoa.saudacao();
