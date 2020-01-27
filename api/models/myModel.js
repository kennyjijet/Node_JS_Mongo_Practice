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
    }
});

var createCustomerSchema = mongoose.model('Customers', CustomerSchema);
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

  var authorSchema = Schema({
    name    : String,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  var storySchema = Schema({
    author : { type: Schema.Types.ObjectId, ref: 'Author' },
    title    : String
  });

  var BookInstanceSchema = new Schema(
    {
      book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
      imprint: {type: String, required: true},
      status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
      due_back: {type: Date, default: Date.now}
    }
  );
  
  // Virtual for bookinstance's URL
  BookInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/bookinstance/' + this._id;
  });
  
  
var StorySchema  = mongoose.model('Story', storySchema);
var AuthorSchema = mongoose.model('Author', authorSchema);
var BookSchema = mongoose.model('Book', BookSchema);
var BookInstance = mongoose.model('BookInstance', BookInstanceSchema);

module.exports = {
    createCustomerSchema,
    AuthorSchema,
    StorySchema,
    BookSchema,
    BookInstance
}
//module.exports = mongoose.model('Customers', CustomerSchema);

