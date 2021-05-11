module.exports = app => {
    const todos = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Task
    router.post("/", todos.create);
  
    // Retrieve all Tasks
    router.get("/", todos.findAll);
  
    // Retrieve all published Tasks
    router.get("/published", todos.findAllPublished);
  
    // Retrieve a single Task with id
    router.get("/:id", todos.findOne);
  
    // Update a Task with id
    router.put("/:id", todos.update);
  
    // Delete a Task with id
    router.delete("/:id", todos.delete);
  
    // Create a new Task
    router.delete("/", todos.deleteAll);
  
    app.use('/api/todos', router);
  };