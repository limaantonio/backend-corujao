const Sensor = require('../models/Sensor');
const User = require('../models/User');


module.exports = {
  async index (request, response){
    try{
      const sensors = await Sensor.find().populate('user');
      
      return response.send({sensors})
    }catch(err){
      return response.status(400).send({error: 'Error loading sensors.'})
    }
  },

  async indexById (request, response){
    try{
      const sensor = await Sensor.findById(request.params.sensorId).populate('sensors');
      
      return response.send({sensor})
    }catch(err){
      return response.status(400).send({error: 'Error loading sensor.'})
    }
  },

  async deleteById (request, response){
    try{
      const sensor = await Sensor.findByIdAndRemove(request.params.sensorId).populate('sensors');
      
      return response.send()
    }catch(err){
      return response.status(400).send({error: 'Error delete sensor.'})
    }
  },

  async updateById (request, response){
    const {id} = request.params;
    const {name, fone, board, model} = request.body;

    try{
      const user  = await User.findByIdAndUpdate(id, {
        name: name,
        fone: fone,
        board: board,
        model: model,
       
  
      });

      return response.status(204).send();
    }catch(e){
      return response.status(400).json({error: 'No user found with this ID'});
    }
  },

  async create (request, response){ 
    try{
      const sensor = await Sensor.create({...request.body, user: request.userId});

      return response.status(201).json(sensor);

    }catch(err){
      console.log(err);
      return response.status(400).send({error: 'Error creating new Sensor'})
    }
         
  }
}