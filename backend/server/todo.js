const _ = require('lodash');

/**
 * Class for keeping track of ToDo-items
 */
class ToDoList {
  /**
   * Initialize an empty ToDoList
   */
  constructor() {
    this.items = [];
  }

  /**
   * Add an todo item to the list. The items need to be unique!
   * @param {string} item Todo list item
   * @throws Will throw an error when the item is already in the list
   */
  add(item) {
    if (!this.contains(item)) {
      this.items.push(item);
    } else {
      throw new Error('Duplicate item');
    }
  }

  /**
   * Checks if array contains item
   * @param {string} item Todo list item
   * @return {boolean} found
   */
  contains(item) {
    return _.includes(this.items, item);
  }

  /**
   * Deletes an iem from the list
   * @param {string} item Todo list item
   * @throws Will throw an error when if item is not in the list
   */
  delete(item) {
    if (this.contains(item)) {
      _.remove(this.items, function(curItem) {
        return curItem === item;
      });
    } else {
      throw new Error('Item not found');
    }
  }

  /**
   * Get the list from the object
   * @return {string[]} todo list
   */
  getList() {
    return this.items;
  }
}

module.exports = ToDoList;
