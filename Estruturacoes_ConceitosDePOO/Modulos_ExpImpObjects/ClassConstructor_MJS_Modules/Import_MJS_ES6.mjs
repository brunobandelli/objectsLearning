/*MODULOS - IMPORTANDO OBJETOS*/

/*
VERSÃO ES6
Em versões mais recentes do Node.js (a partir da versão 13 e posteriores), os módulos ES6 são suportados por padrão. 
*/


// OutroArquivo.mjs
import P from './Export_MJS_ES6.mjs'; // Importa o módulo Pessoa

const pessoa = new P("Bruno", 29);
pessoa.saudacao();


