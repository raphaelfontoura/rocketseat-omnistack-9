const express = require('express');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.store);

//routes.post('/users', (req, res) => {
//    return res.json(req.body);
//});
//
//routes.put('/users/:id', (req, res) => { //aqui o será utilizado a url com /users/1 , por exemplo, para pegar o id 1.
//    return res.json({ id: req.params.id });
//});
//
//routes.get('/', (req, res) => {
//    //return res.send('Hello World');
//    return res.json({ message: "Hello Omnistack" });
//});

module.exports = routes;