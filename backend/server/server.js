const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const TodoList = require('./todo.js');
const app = express();

// Im gonna start using CORS because I kept getting blocked resource errors.
app.use(cors());
app.options('*', cors());

// Setup the body parser
app.use(bodyParser.json());

// Data store (in memory)
const todoList = new TodoList();

/**
 * @api {get} /api/todo Gets all todo items
 * @apiName GetTodoItems
 * @apiGroup ToDo
 * @apiVersion 1.0.0
 * 
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/todo
 * 
 * @apiSampleRequest http://localhost:3000/api/todo
 * 
 * @apiSuccess {Object} TodoList A ToDoList object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         "TodoItem1",
 *         "TodoItem2",
 *         "TodoItem3"
 *     ]
 *
 */
app.get('/api/todo', function(req, res) {
  res.status(200);
  res.json(todoList.getList());
});

/**
 * @api {post} /api/todo/:todoItem Add a todo item
 * @apiName AddToDoItem
 * @apiGroup ToDo
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name A name for the todo item
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */
app.post('/api/todo/:todoItem', function(req, res) {
  try {
    todoList.add(req.params.todoItem);
    res.status(201);
    res.end();
  } catch (err) {
    res.status(400);
    res.end();
  }
});

/**
 * @api {delete} /api/todo/:todoItem Remove a todo item
 * @apiName DeleteToDoItem
 * @apiGroup ToDo
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Name of the todo item
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
app.delete('/api/todo/:todoItem', function(req, res) {
  try {
    todoList.delete(req.params.todoItem);
    res.status(204);
    res.end();
  } catch (err) {
    res.status(404);
    res.end();
  }
});

module.exports = app;
