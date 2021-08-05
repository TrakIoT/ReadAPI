const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reading = new Schema ({
  register_id: { type: String, required: true },
  register_type: { type: String, required: true },
  register_date: { type: String, required: true },
  product_id: { type: Number, required: true },
  server_id: { type: Number, required: true },
  stowage_id: { type: Number, required: true },
  batch_id: { type: Number, required: true },
  quantity: { type: Number, required: true },
  expiring_date: { type: String, required: true }
});

module.exports = { ReadingSchema: mongoose.model('Reading', Reading) };