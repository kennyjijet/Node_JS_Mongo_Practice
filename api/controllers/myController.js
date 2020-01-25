'use strict';

var mongoose = require('mongoose'),
//Task = mongoose.model('Tasks');
Task = mongoose.model('Customers');

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
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


exports.create_a_task = function (req, res) {
    /*
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
    */
    var new_task = new Task({"name": "test"});
   new_task.save(function (err, task) {
       if (err)
           res.send(err);
       res.json(task);
   });
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