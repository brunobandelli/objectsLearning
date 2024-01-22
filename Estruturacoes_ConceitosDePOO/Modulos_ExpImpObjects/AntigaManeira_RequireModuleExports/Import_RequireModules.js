/*
VERSÃO ANTES DO ES6
Agora, em outro arquivo JavaScript, você pode importar o módulo usando o require. 
Suponha que você tenha um arquivo chamado OutroArquivo.js:
OBS:mudar a extensão para .js
*/

// OutroArquivo.js
const Pessoa = require('./Export_ModuleExports'); // Importa o módulo Pessoa

const pessoa = new Pessoa("Bruno", 29);
pessoa.saudacao();