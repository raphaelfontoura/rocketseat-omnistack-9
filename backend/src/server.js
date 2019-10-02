const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); //usando o caminho relativo para que o app não busque nas bibliotecas o recurso.

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-fe2fx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE
// utilizar o insomnia rest para testar as rotas com os verbos HTTP acima.
// req.query -> Acessar query params (para filtros)
// o ideal é utilizar os recursos em ingles e no plural.
// req.params -> Acessar route params (para edição e delete))
// req.body -> Acessar o corpo da requisição (para criação ou edição de registros)

//para receber e enviar json nas rotas
app.use(express.json());

//para conseguir receber requisições Multipart no body (imagens, textos, arquivos, etc...)
//será necessário adicionar outra modulo --> npm add multer

app.use(routes);

// Usaremos como banco de dados o MongoDB e o mesmo será disponibilizado no mongodb atlas. http://mongodb.com/cloud/atlas
// npm add mongoose

app.listen(3333);