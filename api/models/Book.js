'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
      title: {type: String, required: true},
      author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
      summary: {type: String, required: true},
      isbn: {type: String, required: true},
      genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    }
  );
  
  // Virtual for book's URL
  /* 
  Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.
  */
  BookSchema
  .virtual('url')
  .get(function () {
    return '/catalog/book/' + this._id;
  });
  
  module.exports = mongoose.model('Book', BookSchema);