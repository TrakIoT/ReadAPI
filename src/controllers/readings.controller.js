const { ReadingSchema } = require('../models/readings.model');

const readingGetByIdController = (request, response, next) => {
  const {register_id} = request.params;

  ReadingSchema.find({register_id}).exec(function (err, registers) {
    if (err) {
      return response.status(500).send(err);
    }
    
    response.status(200).json(registers[0]);
  });
};

const readingsGetController = (request, response, next) => {
  const {limit, offset, product_id, server_id} = request.params;

  const filters = {
    ...product_id && ({product_id}),
    ...server_id && ({server_id}),
  };

  const ubication = {
    skip: parseInt(offset), 
    limit: parseInt(limit)
  };

  ReadingSchema.find(filters, null, ubication).exec(function (err, readings) {
    if (err) {
      return response.status(500).send(err);
    }
    response.status(200).json({readings});
  });
};

const readingPostController = (request, response, next) => {
  const reading = request.body;

  console.log(reading);
  const newReading = new ReadingSchema(reading);

  newReading.save((err) => {
    if(err) {
      response.status(400).send({message: 'READING_POST_ERROR', err});
    } else {
      response.status(200).json({ register_id: newReading.register_id });
    }
  });
}

module.exports = { readingGetByIdController, readingsGetController, readingPostController };