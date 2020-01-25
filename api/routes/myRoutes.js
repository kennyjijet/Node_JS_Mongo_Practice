'use strict';
module.exports = function (app) {
    var myList = require('../controllers/myController');
    // get Routes
    app.route('/customers')
        .get(myList.list_all_tasks)
        .post(myList.create_a_task);
        //.put()
        //.delete()
    app.route('/customersDel')
        .get(myList.delete_tasks);
    
    app.route('/customersCreate')
        .get(myList.create_a_task);
    
    

/*
    app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
  */
    //.post(todoList.create_a_task);
    /*
        app.route('/tasks/:taskId')
            .get(todoList.read_a_task)
            .put(todoList.update_a_task)
            .delete(todoList.delete_a_task);
    */

};
