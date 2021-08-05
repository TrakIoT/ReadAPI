const { ReadingSchema } = require('../models/readings.model');
const { uploadRegisterService } = require('../services/uploading.service');

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

  const newReading = new ReadingSchema(reading);

  newReading.save((err) => {
    if(err) {
      response.status(400).send({message: 'READING_POST_ERROR', err});
    } else {
      const sended = uploadRegisterService(mapReadingUpload(newReading));
      if( sended ){
        response.status(200).json({ register_id: newReading.register_id });
      } else {
        response.status(400).send({message: 'UPLOADING_REGISTER_ERROR', err});
      }
    }
  });
}

const mapReadingUpload = (reading) => {
  return {
    register_id: reading.register_id,
    register_type: reading.register_type,
    register_date: reading.register_date,
    product_id: reading.product_id,
    server_id: reading.server_id,
    stowage_id: reading.stowage_id,
    quantity: reading.quantity,
    batch_id: reading.batch_id,
    expiring_date: reading.expiring_date
  };
}

module.exports = { readingGetByIdController, readingsGetController, readingPostController };