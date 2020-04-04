define({ "api": [
  {
    "type": "post",
    "url": "/api/todo/:todoItem",
    "title": "Add a todo item",
    "name": "AddToDoItem",
    "group": "ToDo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A name for the todo item</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "server/server.js",
    "groupTitle": "ToDo"
  },
  {
    "type": "delete",
    "url": "/api/todo/:todoItem",
    "title": "Remove a todo item",
    "name": "DeleteToDoItem",
    "group": "ToDo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the todo item</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "server/server.js",
    "groupTitle": "ToDo"
  },
  {
    "type": "get",
    "url": "/api/todo",
    "title": "Gets all todo items",
    "name": "GetTodoItems",
    "group": "ToDo",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/todo",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/todo"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "TodoList",
            "description": "<p>A ToDoList object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    \"TodoItem1\",\n    \"TodoItem1\",\n    \"TodoItem1\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "server/server.js",
    "groupTitle": "ToDo"
  }
] });
