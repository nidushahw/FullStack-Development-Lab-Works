const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    orderID:{
        type: String,
        require: true
    },
    item: String,
    customer_name: String,
    
});
const Order = mongoose.model("Order", orderSchema, "Order");
module.exports = Order;