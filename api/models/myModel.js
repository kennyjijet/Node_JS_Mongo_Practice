'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

*/
var CustomerSchema = new Schema({ name: {
    type: String,
    required: 'Kindly enter the name of the task'
  }});
module.exports = mongoose.model('Customers', CustomerSchema);