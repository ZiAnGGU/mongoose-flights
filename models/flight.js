const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        // required: true,
    }, 
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    }, 
    flightNO: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    }, 
    departs: {
        type: Date,
        required: true, 
        default: () => {
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        return oneYearFromNow;
        },
    },
});
// Schema is not a model and we want pass the Schema to use 
module.export = mongoose.model('Flight', flightSchema);

