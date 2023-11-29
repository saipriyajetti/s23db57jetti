const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
rabbit_color: String,
rabbit_breed: {type:String,length:15},
rabbit_price: {type:Number,min:1000,max:400000}
})
module.exports = mongoose.model("rabbit",rabbitSchema);

