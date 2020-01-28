'use strict';
//Task = mongoose.model('Tasks');
var mongoose = require('mongoose'),
    Customer = mongoose.model('Customers'),
    Author = mongoose.model('Author'),
    Story = mongoose.model('Story');
    
exports.list_all_tasks = function (req, res) {
    /*
    Customer.find({}, function (err, task) {
            if (err) {
                res.send(err);
            }
        res.json(task);
    });
    */
   Author.find({}, function (err, task) {
    if (err) {
        res.send(err);
    }
    res.json(task);
    });
    
    /*
    Task.find
    */
    /*
   Task.create({ name: 'test' }, function (err, name) {
    if (err) return handleError(err);
    // saved!
    res.json("save");
  });
  */
};

function createAuthor() {
    var IsSaved = true;
    var bob = new Author({ name: 'Bob Smith' });
    var story = new Story({
        title: "Bob goes sledding",
        author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
    });
    story.save(function (err) {
        if (err) {
            IsSaved = false;
            return handleError(err);
            // Bob now has his story.
        }
    });
    bob.stories.push(story._id);
    bob.save(function (err) {
        if (err) {
            IsSaved = false;
            return handleError(err);
        }
        //Bob now exists, so lets create a story.
        //bob.stories.push(story._id);

    });
    return (IsSaved) ? "saved": "failed";
}
    /*
   var story = new Story({
    title: "Bob goes sledding",
    author: "test"    // assign the _id from the our author Bob. This ID is created by default!
   });
    
   story.save(function (err) {
       if (err) {
           return handleError(err);
       }
   return "save";
    // Bob now has his story
       */


exports.create_a_task = function (req, res) {
    /*
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
    */
    
    var resText = createAuthor();
    res.json(resText);
    /*
    var new_task = new Customer({"name": "test"});
    new_task.save(function (err, task) {
       if (err)
           res.send(err);
       res.json(task);
    });
    */
};

exports.delete_tasks = function (req, res) {
    Task.deleteMany({}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json("Delete all");
    });
};

/*

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
*/