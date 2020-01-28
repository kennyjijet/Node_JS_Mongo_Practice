'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = Schema({
    author : { type: Schema.Types.ObjectId, ref: 'Author' },
    title    : String
  });

module.exports = mongoose.model('Story', storySchema);
  

/* 
var PackageSchema = new Schema({
    id: ObjectId,
    title: { type: String, required: true },
    flashcards: [ {type : mongoose.Schema.ObjectId, ref : 'Flashcard'} ]
});

var FlashcardSchema = new Schema({
    id: ObjectId,
    type: { type: String, default: '' },
    story: { type: String, default: '' },
    packages: [ {type : mongoose.Schema.ObjectId, ref : 'Package'} ]
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// avoid forward referencing
var PackageSchema = new Schema();
var FlashcardSchema = new Schema();

PackageSchema.add({
    id          : ObjectId,
    title       : { type: String, required: true },
    flashcards  : [ FlashcardSchema ]
});

FlashcardSchema.add({
    id      : ObjectId,
    type        : { type: String, default: '' },
    story       : { type: String, default: '' },
    packages    : [ PackageSchema ]
});

// Exports both types
module.exports = {
    Package:   mongoose.model('Package', PackageSchema),
    Flashcard: mongoose.model('Flashcard', FlashcardSchema)
};  

https://www.npmjs.com/package/mongoose-relationship

##Many-To-Many with Multiple paths

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");

var ParentSchema = new Schema({
    children:[{ type:Schema.ObjectId, ref:"Child" }]
});
var Parent = mongoose.models("Parent", ParentSchema);

var OtherParentSchema = new Schema({
    children:[{ type:Schema.ObjectId, ref:"Child" }]
});
var OtherParent = mongoose.models("OtherParent", OtherParentSchema);

var ChildSchema = new Schema({
    parents: [{ type:Schema.ObjectId, ref:"Parent", childPath:"children" }]
    otherParents: [{ type:Schema.ObjectId, ref:"OtherParent", childPath:"children" }]
});
ChildSchema.plugin(relationship, { relationshipPathName:['parents', 'otherParents'] });
var Child = mongoose.models("Child", ChildSchema)

var parent = new Parent({});
parent.save();
var otherParent = new OtherParent({});
otherParent.save();

var child = new Child({});
child.parents.push(parent);
child.otherParents.push(otherParent);
child.save() //both parent and otherParent children property will now contain the child's id 
child.remove() 

*/