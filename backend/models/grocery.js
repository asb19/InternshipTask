var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const grocerySchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});
module.exports = mongoose.model("grocery", grocerySchema);
