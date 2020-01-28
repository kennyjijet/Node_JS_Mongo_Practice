'use strict';
//Task = mongoose.model('Tasks');
var mongoose = require('mongoose'),
    Customer = mongoose.model('Customers'),
    Author = mongoose.model('Author'),
    Story = mongoose.model('Story');
    
//var url = require('url');
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
/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
*/


exports.add_a_story_to_author = function (req, res) {
    var nameParam = req.params.name;
    var story = {};
    Author.findOne({ name: nameParam }, function (err, task) {
        if (!task) { 
            res.json("Not Found");
            return;
        }
        if (err) {
            res.send(err);
            //res.json(err);
            return;
        }
        story = new Story({
            title: "New Story",
            author: task._id
        }); 
        story.save(function (err) {
            if (err) {
                res.send(err);
                return;
            }
            Author.updateOne({ name: nameParam }, { "$push": { "stories": story._id } });
        });
    });
    res.json("updated");
}
   

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
    
    story.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
    });
    
    */
    /*
    Author.updateOne(
        { name : nameParam },
        { "$push": { stories: story._id } },
        function (err, raw) {
            if (err) { 
                console.log('The raw response from Mongo was ', raw);
            } //return handleError(err);
        });
    */

    /*
    Author.findOne(query, function (err, task) {
        if (!task) { 
            res.json("Not Found");
            return;
        }
        
        if (err) {
            res.send(err);
            //res.json(err);
            return;
        }

        author = task;
        var story = new Story({
            title: "New Story",
            author: nameParam
        }); 
        
        story.save(function (err) {
            if (err) {
                res.send(err);
                return;
            }
            author.stories.push(story._id);
            author.save(function (err) {
                if (err) {
                    res.send(err);
                    return;
                }
                res.json(author);
            });
        });
    });

};
    */


    /*
    const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("testdb");

        let collection = db.collection('cars');

        let query = { name: 'Volkswagen' }

        let res = await collection.findOne(query);

        console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

findOne();
    console.log(author);
    console.log(author.stories);
    if (!author.stories) {
        res.json("Not Found");
        return;
    }
    console.log(author.stories);

    var story = new Story({
        title: "New Story",
        author: nameParam    // assign the _id from the our author Bob. This ID is created by default!
    }); 
    author.stories.push(story._id);
    story.save(function (err) {
        if (err) {
            return handleError(err);
        }
    });
    author.save(function (err) {
        if (err) {
            return handleError(err);
        }
    });
   
    res.json("Added");
    */


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