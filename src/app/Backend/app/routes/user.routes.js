module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    // Signup
    router.post('/signup', users.signup);

    // Login
    router.post('/login', users.login);
  
    // Retrieve all Tasks
    router.get("/", users.findAll);
  
    // Retrieve a single Task with id
    router.get("/:id", users.findOne);
  
    // Update a Task with id
    router.put("/:id", users.update);
  
    // Delete a Task with id
    router.delete("/:id", users.delete);
  
    // Create a new Task
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };