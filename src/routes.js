const express = require('express');

const UserController = require('./controllers/UserController');
const SensorController = require('./controllers/SensorController');
const authController = require('./controllers/authController');
const authMiddleware = require('../src/middlewares/auth');


const routes = express.Router();

routes.post('/register', authController.register);

routes.post('/authenticate', authController.authenticate);

routes.post('/forgot_password', authController.forgot_password);

routes.post('/reset_password', authController.reset_password);


//USER
routes.get('/users', UserController.index);
routes.delete('/user/:userId', UserController.deleteById);
routes.put('/user/:id', UserController.updateById);
routes.post('/user', UserController.create);

//SENSOR
routes.get('/sensor', SensorController.index);
routes.get('/sensor/:sensorId',authMiddleware, SensorController.indexById);
routes.post('/sensor', authMiddleware, SensorController.create);
routes.delete('/sensor/:sensorId', authMiddleware, SensorController.deleteById);





module.exports = routes;