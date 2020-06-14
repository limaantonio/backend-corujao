const express = require('express');

const UserController = require('./controllers/UserController');


const routes = express.Router();


//USER
routes.get('/users', UserController.index);
routes.delete('/user/:userId', UserController.deleteById);
routes.put('/user/:id', UserController.updateById);
routes.post('/user', UserController.create);





module.exports = routes;