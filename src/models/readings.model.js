const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reading = new Schema ({
  register_id: { type: String, required: true },
  register_type: { type: String, required: true },
  register_date: { type: String, required: true },
  server_id: { type: String, required: true },
  stowage_id: { type: String, required: true },
  batch_id: { type: String, required: true },
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  expiring_date: { type: String, required: true }
});

module.exports = { ReadingSchema: mongoose.model('Reading', Reading) };