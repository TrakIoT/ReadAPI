const { ReadingSchema } = require('../models/readings.model');

const readingGetByIdController = (request, response, next) => {
  const {register_id: registerId} = request.params;

  ReadingSchema.find({register_id: registerId}).exec(function (err, registers) {
    if (err) {
      return response.status(500).send(err);
    }
    response.status(200).json(registers[0]);
  });
};

const readingsGetController = (request, response, next) => {
  const {limit, offset, product_id: productId, server_id: serverId} = request.params;

  const filters = {
    ...productId && ({productId}),
    ...serverId && ({serverId}),
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

  const newReading = new ReadingSchema(reading);

  newReading.save((err) => {
    if(err) {
      response.status(400).send('READING_POST_ERROR');
    } else {
      response.status(200).json({ reading_id: newReading.register_id });
    }
  });
}

module.exports = { readingGetByIdController, readingsGetController, readingPostController };