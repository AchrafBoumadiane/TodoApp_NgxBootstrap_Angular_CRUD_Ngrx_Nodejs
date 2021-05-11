const db = require("../models");
const Todo = db.todos;

// Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a TodoTask
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed ? req.body.completed : false
    });

    // Save Todo in the database
    todo
      .save(todo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Todo Task."
        });
      });
  };

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Todo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tasks."
        });
      });
  };

// Find a single Task with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Task with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Task with id=" + id });
      });
  };

// Update a Task by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    const id = req.params.id;

    Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Task with id=${id}. Maybe Task was not found!`
          });
        } else res.send({ message: "Task was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Task with id=" + id
        });
      });
  };

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
          });
        } else {
          res.send({
            message: "Task was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Task with id=" + id
        });
      });
  };

// Delete all Tasks from the database.
exports.deleteAll = (req, res) => {
    Todo.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Tasks were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tasks."
        });
      });
  };

// Find all published Tasks
exports.findAllPublished = (req, res) => {
    Todo.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tasks."
        });
      });
  };