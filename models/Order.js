const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    shoulder: { type: Number, required: true },
    chest: { type: Number, required: true },
    bust: { type: Number, required: true },
    waist: { type: Number, required: true },
    hipRound: { type: Number, required: true },
    armRound: { type: Number, required: true },
    sleeves: { type: Number, required: true },
    paneltyCrease: { type: Number, required: true },
    length: { type: Number, required: true },
    backNeck: { type: Number, required: true },
    frontNeck: { type: Number, required: true },
    note: { type: String },
    dateOfDelivery: { type: Date, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
