const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')


const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);


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