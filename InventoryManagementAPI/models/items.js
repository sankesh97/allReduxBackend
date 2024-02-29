const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
});

const Items = mongoose.model("Items", ItemsSchema);

module.exports = { Items };
