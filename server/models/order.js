var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
  name: String,
  street_address: String,
  city: String,
  state: String,
  zipcode: String,
  created_at: {type: Date, default: Date.now}
});

mongoose.model("Order", OrderSchema);
