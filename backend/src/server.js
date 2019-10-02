const express = require('express');
const routes = require('./routes'); //usando o caminho relativo para que o app não busque nas bibliotecas o recurso.

const app = express();

// GET, POST, PUT, DELETE
// utilizar o insomnia rest para testar as rotas com os verbos HTTP acima.
// req.query -> Acessar query params (para filtros)
// o ideal é utilizar os recursos em ingles e no plural.
// req.params -> Acessar route params (para edição e delete))
// req.body -> Acessar o corpo da requisição (para criação ou edição de registros)

app.use(express.json());
app.use(routes);

// Usaremos como banco de dados o MongoDB e o mesmo será disponibilizado no mongodb atlas. http://mongodb.com/cloud/atlas

app.listen(3333);