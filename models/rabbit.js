const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
rabbit_color: String,
rabbit_breed: String,
rabbit_price: Number
})
module.exports = mongoose.model("rabbit",rabbitSchema);

