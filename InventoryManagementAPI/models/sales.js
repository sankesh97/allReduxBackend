const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = { Sales };
