const request = require('supertest');
const app = require('../server/server.js');

/**
 * Make sure that the list is empty in the beginning of the application
 */
describe('GET /api/todo', function() {
  it('returns an empty array', function(done) {
    request(app)
        .get('/api/todo')
        .set('Accept', 'application/json')
        .expect(200, [], done);
  });
});

/**
 * Scenario:
 * 1). Add a new item
 * 2). Check if it is in the list
 * 3). Add the same item again (should give an error)
 * 4). Check if the item has not been added!
 */
describe('POST /api/todo/:todoItem', function() {
  it('adds the item "TodoItem" to the list', function(done) {
    request(app)
        .post('/api/todo/TodoItem')
        .set('Accept', 'application/json')
        .expect(201, done);
  });

  it('should contain the item "TodoItem" in the list', function(done) {
    request(app)
        .get('/api/todo')
        .set('Accept', 'application/json')
        .expect(200, ['TodoItem'], done);
  });

  it('should throw an error when adding a duplicate item', function(done) {
    request(app)
        .post('/api/todo/TodoItem')
        .set('Accept', 'application/json')
        .expect(400, done);
  });

  it('should not have added a duplicate item', function(done) {
    request(app)
        .get('/api/todo')
        .set('Accept', 'application/json')
        .expect(200, ['TodoItem'], done);
  });
});

/**
 * Scenario:
 * 1). Delete an unexisting item from the list (should give 404)
 * 2). Delete an existing item from the list
 * 3). Check if the item has been deleted
 */
describe('DELETE /api/todo/:message', function() {

  it('should return 404 when deleting a non-existing item', function(done) {
    request(app)
        .delete('/api/todo/Corona')
        .expect(404, done);
  });

  it('remove the item "TodoItem"', function(done) {
    request(app)
        .delete('/api/todo/TodoItem')
        .set('Accept', 'application/json')
        .expect(204, done);
  });

  it('returns an empty array (since the previous element has been deleted)',
      function(done) {
        request(app)
            .get('/api/todo')
            .set('Accept', 'application/json')
            .expect(200, [], done);
      });
});
